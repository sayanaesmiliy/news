using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace akhbar.Models
{
    public class LoginRequest
    {
        public string Password { get; set; }
        public string Username { get; set; }
    }
}
