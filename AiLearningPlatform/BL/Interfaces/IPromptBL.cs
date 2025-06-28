using DAL.Models;
using Entities.DTO;

namespace BL.Interfaces
{
    public interface IPromptBL
    {
        Task<string> GenerateLessonAsync(Prompt request);
        Task<List<PromptHistoryDTO>> GetPromptHistoryByUserIdAsync(int userId);
    }
}