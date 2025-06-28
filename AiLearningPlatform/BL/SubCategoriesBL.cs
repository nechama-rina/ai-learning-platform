using BL.Interfaces;
using DAL;
using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class SubCategoriesBL : ISubCategoriesBL
    {
        ISubCategoriesDAL _SubcategoriesDAl;
        public SubCategoriesBL(ISubCategoriesDAL SubCategoriesDAl)
        {
            _SubcategoriesDAl = SubCategoriesDAl;
        }
        public List<SubCategory> GetSubCategoriesByCategoryId(int categoryId)
        {
            return  _SubcategoriesDAl.GetSubCategoriesByCategoryId(categoryId);
        }




    }
}
