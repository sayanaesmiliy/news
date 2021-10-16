using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace akhbar.Models
{
    public class Context: DbContext
    {
        public Context(DbContextOptions<Context> options):base(options)
        {
            

        }
        public DbSet<product> products { get; set; }
        public DbSet<UserCred> usercred { get; set; }
    }
}
