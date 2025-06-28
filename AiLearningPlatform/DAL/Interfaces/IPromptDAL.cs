using DAL.Models;

public interface IPromptDAL
{
    Task AddPromptAsync(Prompt prompt);
    Task<List<string>> GetPromptWithCategoryNamesAsync(int categoryId, int subCategoryId);
    Task<List<Prompt>> GetPromptsByUserIdAsync(int userId); 
}
