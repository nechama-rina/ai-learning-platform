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
    public class SubCategoriesDAL : ISubCategoriesDAL
    {
        AiprojectBdContext _AiprojectBdContext;
        public SubCategoriesDAL(AiprojectBdContext aiprojectBdContext)
        {
            _AiprojectBdContext = aiprojectBdContext;
        }
        public List<SubCategory> GetSubCategoriesByCategoryId(int categoryId)
        {
            return _AiprojectBdContext.SubCategories.Where(c => c.CategoryId == categoryId).ToList();
        }
    }
}
