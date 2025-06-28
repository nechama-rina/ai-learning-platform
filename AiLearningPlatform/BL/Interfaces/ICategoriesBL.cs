using DAL.Models;

namespace BL.Interfaces
{
    public interface ICategoriesBL
    {
        Task<List<Category>> GetCategories();
    }
}