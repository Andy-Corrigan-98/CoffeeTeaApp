
using System.ComponentModel;

namespace CoffeeTeaApp.Models
{
    //using a hardcoded enum for the purpose of the tech test - real world scenario would likely use a database connection, to allow for easy expansion/alterations
    public enum Recipes
    {
        [Description("Lemon Tea")]
        LemonTea=1, // start the enum at 1 to mimic the identity in a DB
        [Description("Coffee")]
        Coffee,
        [Description("Chocolate")]
        Chocolate
    }
}