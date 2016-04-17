using LabelsDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LabelsDemo.Controllers
{
    public class LabelsController : ApiController
    {
        private static List<Label> labels = new List<Label> { 
            new Label{Id=1, Text = "All good", Color = "#0F0"},
            new Label{Id=2, Text = "Warning", Color = "#FF0"},
            new Label{Id=3, Text = "Error", Color = "#F00"},
            new Label{Id=4, Text = "Unknown", Color = "#00F"},
            new Label{Id=5, Text = "Deffered", Color = "#AAA"},
            new Label{Id=6, Text = "Never", Color = "#FFF"},
            new Label{Id=7, Text = "Super Urgent", Color = "#0FF"},
            new Label{Id=8, Text = "Need more information", Color = "#F0F"},
        };
        
        
        // GET api/values
        public IEnumerable<Label> Get()
        {
            return labels.AsEnumerable();
        }

        // GET api/values/5
        public Label Get(int id)
        {
            return labels.Single(l => l.Id == id);
        }

        // POST api/values
        public void Post([FromBody]Label value)
        {
            int nextID = labels.Count;
            labels.Add(new Label
            {
                Id = nextID,
                Text = value.Text,
                Color = value.Color
            });
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Label value)
        {
            var toUpdate = Get(id);
            if(toUpdate != null)
            {
                toUpdate.Text = value.Text;
                toUpdate.Color = value.Color;
            }
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            labels.RemoveAll(l => l.Id == id);
        }
    }
}
