using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace akhbar.Models
{
    public class product
    {
        [Key]
        public int id { get; set; }
        public string title { get; set; }
        public string brand { get; set; }
        public string details { get; set; }
        public string imageLink { get; set; }
        public int likeCount { get; set; }
    }
}
