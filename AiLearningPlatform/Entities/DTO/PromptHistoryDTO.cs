namespace Entities.DTO
{
    public class PromptHistoryDTO
    {
        public string Prompt { get; set; }
        public string Response { get; set; }
        public DateTime CreatedAt { get; set; }
        public string CategoryName { get; set; }
        public string SubCategoryName { get; set; }
    }
}