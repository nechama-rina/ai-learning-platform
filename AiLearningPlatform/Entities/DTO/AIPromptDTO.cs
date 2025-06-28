using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public record CreatePromptRequestDTO(int UserId, int CategoryId, int SubCategoryId, string CategoryName, string SubCategoryName);
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
}
