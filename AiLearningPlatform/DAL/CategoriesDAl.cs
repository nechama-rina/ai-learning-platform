using DAL.Interfaces;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class CategoriesDAl : ICategoriesDAl
    {
        AiprojectBdContext _AiprojectBdContext;
        public CategoriesDAl(AiprojectBdContext aiprojectBdContext)
        {
            _AiprojectBdContext = aiprojectBdContext;
        }
        public async Task<List<Category>> GetCategories()
        {
            return await _AiprojectBdContext.Categories.ToListAsync();

        }





    }
}
