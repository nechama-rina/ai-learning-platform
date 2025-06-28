using AutoMapper;
using BL;
using BL.Interfaces;
using DAL.Models;
using Entities.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AiLearningPlatform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategoriesController : ControllerBase
    {
        ISubCategoriesBL _SubCategoriesBL;
        IMapper _mapper;
        public SubCategoriesController(ISubCategoriesBL SubCategoriesBL, IMapper mapper)
        {
            _SubCategoriesBL = SubCategoriesBL;
            _mapper = mapper;
        }

        [HttpGet("byCategory/{categoryId}")]
        public  ActionResult<List<SubCategoryDTO>> GetSubCategoriesByCategoryId(int categoryId)
        {
            var subCategories = _SubCategoriesBL.GetSubCategoriesByCategoryId(categoryId);
            var subCategoryDTOs = _mapper.Map<List<SubCategoryDTO>>(subCategories);
            return Ok(subCategoryDTOs);
        }

    }
}
