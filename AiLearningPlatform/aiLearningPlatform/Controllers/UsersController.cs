using AutoMapper;
using BL;
using DAL.Interfaces;
using DAL.Models;
using Entities.DTO;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AiLearningPlatform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersBL _usersBL;
        private readonly IMapper _mapper;

        public UsersController(IUsersBL usersBL, IMapper mapper)
        {
            _usersBL = usersBL;
            _mapper = mapper;
        }

        
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            var users = await _usersBL.GetAllUsersAsync();
            return Ok(users);
        }

      
        [HttpPost("register")]
        public async Task<ActionResult<int>> Register([FromBody] UserDTO userDTO)
        {
            var user = _mapper.Map<User>(userDTO);
            int userId = await _usersBL.RegisterUserAsync(user);
            if (userId == 0)
                return Conflict("Phone number already exists.");

            return Ok(userId);
        }

        
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login([FromBody] UserDTO userDTO)
        {
            var user = await _usersBL.LoginAsync(userDTO.Name, userDTO.Phone);
            if (user == null)
                return Unauthorized("Invalid name or phone.");

            return Ok(user);
        }
    }
}
