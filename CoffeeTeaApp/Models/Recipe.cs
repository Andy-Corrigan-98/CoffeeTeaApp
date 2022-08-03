using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace CoffeeTeaApp.Models
{
    public class Recipe
    {
        private Recipes _recipe;
        private List<string> Steps;
        public Recipe(int recipeID)
        {
            _recipe = (Recipes)recipeID;
            DefineSteps();
        }

        private void DefineSteps()
        {
            //again hardcoded due to the static nature of tech test - would pull from DB in real-world scenario (similarly, there would be a RecipeStep class and likely an Ingredient class and the suchlike)
            Steps = new List<string>();
            switch (_recipe)
            {
                case Recipes.LemonTea:
                    Steps.Add("Boil some water");
                    Steps.Add("Steep the water in the tea"); //Surely it's the other way around? But since it's this way in the spec, roll with it
                    Steps.Add("Pour tea in the cup");
                    Steps.Add("Add lemon");
                    break;
                case Recipes.Coffee:
                    Steps.Add("Boil some water");
                    Steps.Add("Brew the coffee grounds");
                    Steps.Add("Pour coffee in the cup");
                    Steps.Add("Add sugar and milk");
                    break;
                case Recipes.Chocolate:
                    Steps.Add("Boil some water");
                    Steps.Add("Add drinking chocolate powder to the water");
                    Steps.Add("Pour chocolate in the cup");
                    break;
            }
        }

        public JObject GetSteps()
        {
            JObject obj = new JObject();
            JArray steps = new JArray(Steps);
            obj.Add("steps", steps);
            return obj;
            
        }
    }
}