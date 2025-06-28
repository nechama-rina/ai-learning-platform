using DAL.Models;

namespace DAL.Interfaces
{
    public interface ISubCategoriesDAL
    {
        List<SubCategory> GetSubCategoriesByCategoryId(int categoryId);
    }
}