using BL.Interfaces;
using DAL;
using DAL.Interfaces;
using DAL.Models;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class PromptBL : IPromptBL
    {
        IPromptDAL _promptDAL;
        AIService _aiService;

        public PromptBL(IPromptDAL promptDAL, AIService aiService)
        {
            _promptDAL = promptDAL;
            _aiService = aiService;
        }

        public async Task<string> GenerateLessonAsync(Prompt prompt)
        {
            var categoriesName = await _promptDAL.GetPromptWithCategoryNamesAsync(prompt.CategoryId, prompt.SubCategoryId);

            string fullPrompt;
            if (!string.IsNullOrWhiteSpace(prompt.OriginalPrompt))
            {
                fullPrompt = $"IMPORTANT: The user wants a lesson specifically about: {prompt.OriginalPrompt}. " +
                             $"Do NOT give a general lesson. Focus only on this topic and provide detailed explanations and examples.";
            }
            else
            {
                fullPrompt = $"Generate a structured educational lesson covering the subject of {categoriesName[0]} - {categoriesName[1]}.";
            }

            var result = await _aiService.GetResponseFromOpenAI(fullPrompt);

            var enrichedPrompt = new Prompt
            {
                UserId = prompt.UserId,
                CategoryId = prompt.CategoryId,
                SubCategoryId = prompt.SubCategoryId,
                Prompt1 = fullPrompt,
                OriginalPrompt = prompt.OriginalPrompt,
                Response = result,
                CreatedAt = DateTime.Now
            };

            await _promptDAL.AddPromptAsync(enrichedPrompt);
            return result;
        }

        public async Task<List<PromptHistoryDTO>> GetPromptHistoryByUserIdAsync(int userId)
        {
            var prompts = await _promptDAL.GetPromptsByUserIdAsync(userId);

            return prompts.Select(p => new PromptHistoryDTO
            {
                Prompt = p.Prompt1,
                Response = p.Response.Length > 400 ? p.Response.Substring(0, 400) + "..." : p.Response,
                CreatedAt = p.CreatedAt,
                CategoryName = p.Category.Name,
                SubCategoryName = p.SubCategory.Name
            }).ToList();
        }
    }
}