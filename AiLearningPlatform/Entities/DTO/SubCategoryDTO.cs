﻿using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    
        public record SubCategoryDTO(int Id, string Name,string CategoryId);
    
}
