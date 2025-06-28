namespace Entities.DTO
{
    public class PromptGet
    {
        public int UserId { get; set; }
        public int CategoryId { get; set; }
        public int SubCategoryId { get; set; }
        public string? CustomQuestion { get; set; }
    }
}