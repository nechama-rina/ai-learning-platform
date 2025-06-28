using DAL;
using DAL.Interfaces;
using DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BL
{
    public class UsersBL : IUsersBL
    {
        private readonly IUsersDAL _userDal;

        public UsersBL(IUsersDAL userDal)
        {
            _userDal = userDal;
        }

        public async Task<User?> LoginAsync(string name, string phone)
        {
            return await _userDal.LoginAsync(name, phone);
        }

        public async Task<int> RegisterUserAsync(User user)
        {
            if (await _userDal.IsPhoneExistsAsync(user.Phone))
                return 0;

            return await _userDal.RegisterUserAsync(user);
        }

        public Task<List<User>> GetAllUsersAsync() => _userDal.GetAllUsersAsync();

        public Task<User?> GetUserByIdAsync(int id) => _userDal.GetUserByIdAsync(id);

        public Task<bool> UpdateUserAsync(User user) => _userDal.UpdateUserAsync(user);

        public Task<bool> DeleteUserAsync(int id) => _userDal.DeleteUserAsync(id);
    }
}
