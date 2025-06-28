using AutoMapper;
using BL.Interfaces;
using DAL;
using DAL.Interfaces;
using DAL.Models;
using Entities.DTO;
using Microsoft.AspNetCore.Mvc;

//fo https://go.microsoft.com/fwlink/?LinkID=397860

namespace AiLearningPlatform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        ICategoriesBL _categoriesBL;
        IMapper _mapper;
        public CategoriesController(ICategoriesBL categoriesBL, IMapper mapper)
        {
            _categoriesBL = categoriesBL;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<CategoryDTO>>> GetCategories()
        {
            List<Category> categories = await _categoriesBL.GetCategories();
            List<CategoryDTO> categoryDTOList = _mapper.Map<List<Category>, List<CategoryDTO>>(categories);
            return Ok(categoryDTOList);
        }
    }
}