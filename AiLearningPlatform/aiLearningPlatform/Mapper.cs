using AutoMapper;
using DAL.Models;
using Entities.DTO;

namespace AiLearningPlatform
{
    public class Mapper : Profile
    {
        public Mapper()
        {
            CreateMap<UserDTO, User>();
            CreateMap<Category, CategoryDTO>();
            CreateMap<SubCategory, SubCategoryDTO>();
            CreateMap<PromptGet, Prompt>()
                .ForMember(dest => dest.OriginalPrompt, opt => opt.MapFrom(src => src.CustomQuestion));
            CreateMap<Prompt, CreatePromptRequestDTO>();
        }

        public string GenerateFullPrompt(Prompt prompt, string[] categoriesName)
        {
            string fullPrompt;
            if (!string.IsNullOrWhiteSpace(prompt.OriginalPrompt))
                fullPrompt = prompt.OriginalPrompt;
            else
                fullPrompt = $"Generate a structured educational lesson covering the subject of {categoriesName[0]} - {categoriesName[1]}.";

            return fullPrompt;
        }
    }
}
