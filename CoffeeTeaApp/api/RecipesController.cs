using CoffeeTeaApp.Models;
using System.Web.Http;

namespace CoffeeTeaApp.Controllers
{
    [RoutePrefix("api/Recipes")]
    public class RecipesController : ApiController
    {

        // GET route is: api/<controller>/5 
        // Gets recipe as JSON for processing
        [Route("{id}")]
        [HttpGet]
        public string Get(int id)
        {
            Recipe recipe = new Recipe(id);
            return recipe.GetSteps().ToString();
        }

    }
}