using DAL.Models;

namespace BL.Interfaces
{
    public interface ISubCategoriesBL
    {
        List<SubCategory> GetSubCategoriesByCategoryId(int categoryId);
    }
}