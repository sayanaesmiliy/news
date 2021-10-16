using akhbar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace akhbar
{
   public interface IJwtAuthenticationManager
    {
        string BuildToken(UserCred user);  
    }
}
