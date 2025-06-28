using BL.Interfaces;
using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class CategoriesBL : ICategoriesBL
    {
        ICategoriesDAl _categoriesDAl;
        public CategoriesBL(ICategoriesDAl categoriesDAl)
        {
            _categoriesDAl = categoriesDAl;
        }
        public async Task<List<Category>> GetCategories()
        {
            return await _categoriesDAl.GetCategories();
        }


    }
}
