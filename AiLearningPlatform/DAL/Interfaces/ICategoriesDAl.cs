using DAL.Models;

namespace DAL.Interfaces
{
    public interface ICategoriesDAl
    {
        Task<List<Category>> GetCategories();
    }
}