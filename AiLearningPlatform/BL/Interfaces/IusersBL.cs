using DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BL
{
    public interface IUsersBL
    {
        Task<User?> LoginAsync(string name, string phone);
        Task<int> RegisterUserAsync(User user);
        Task<List<User>> GetAllUsersAsync();
        Task<User?> GetUserByIdAsync(int id);
        Task<bool> UpdateUserAsync(User user);
        Task<bool> DeleteUserAsync(int id);
    }
}
