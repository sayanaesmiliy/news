using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace akhbar.Models
{
    public class UserCred
    {
      [Key]  
            public string Username { get; set; }
            public string Password { get; set; }
            public string Role { get; set; }
        
    }
}
