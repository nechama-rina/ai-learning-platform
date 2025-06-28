using DAL.Interfaces;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL
{
    public class PromptDAL : IPromptDAL
    {
        AiprojectBdContext _aiprojectBdContext;

        public PromptDAL(AiprojectBdContext context)
        {
            _aiprojectBdContext = context;
        }

        public async Task<List<string>> GetPromptWithCategoryNamesAsync(int categoryId, int subCategoryId)
        {
            List<string> categoriesName = new();
            Category? category = await _aiprojectBdContext.Categories.FindAsync(categoryId);
            if (category != null)
                categoriesName.Add(category.Name);
            SubCategory? subCategory = await _aiprojectBdContext.SubCategories.FindAsync(subCategoryId);
            if (subCategory != null)
                categoriesName.Add(subCategory.Name);

            return categoriesName;
        }

        public async Task AddPromptAsync(Prompt prompt)
        {
            _aiprojectBdContext.Prompts.Add(prompt);
            await _aiprojectBdContext.SaveChangesAsync();
        }

        public async Task<List<Prompt>> GetPromptsByUserIdAsync(int userId)
        {
            return await _aiprojectBdContext.Prompts
                .Include(p => p.Category)
                .Include(p => p.SubCategory)
                .Where(p => p.UserId == userId)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
        }
    }
}