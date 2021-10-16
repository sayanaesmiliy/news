using akhbar.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace akhbar.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class loginController : ControllerBase
    {
        private readonly IJwtAuthenticationManager jwtAuthenticationManager;
        private readonly Context _db;
        public loginController(IJwtAuthenticationManager jwtAuthenticationManager, Context db)
        {
            this.jwtAuthenticationManager = jwtAuthenticationManager;
            _db = db;
        }
        // GET: api/<login>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "iran", "new york" };
        }

        //GET api/<login>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> AuthenticateAsync([FromBody] LoginRequest model)
        {
            
         
            var user = _db.usercred.Where(
                u => u.Username == model.Username && u.Password == model.Password).FirstOrDefault();
            if(user == null)
            {
                return BadRequest("User Not Found!"); 
            }
            var token= jwtAuthenticationManager.BuildToken(user); 
            if (token == null)
                return Unauthorized();

            return Ok(new { token = token, Role = user.Role });
        }

    }
}
