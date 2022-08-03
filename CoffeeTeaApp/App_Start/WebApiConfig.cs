using System.Web.Http;
using System.Web.Routing;

namespace CoffeeTeaApp.App_Start
{
    public static class WebApiConfig
    {
        public static void MapApiRoutes(RouteCollection routes)
        {
            routes.MapHttpRoute(name: "API Default", routeTemplate: "api/{controller}/{id}", defaults: new { id = RouteParameter.Optional });
        }
    }
}