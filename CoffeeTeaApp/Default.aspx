<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CoffeeTeaApp._Default" %>

<asp:Content ID="HeaderContent" ContentPlaceHolderID="HeadContent" runat="server">
    <asp:PlaceHolder runat="server">
        <%: Scripts.Render("~/bundles/Recipes") %>
    </asp:PlaceHolder>
</asp:Content>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div id="selector">
        <div class="jumbotron">
            <h1>Select a Drink</h1>
            <p class="lead">Select one of the panels below to choose your drink.</p>
        </div>

        <div class="row">
            <div class="col-md-4 pointer bg-primary border-white" id="lemonTea">
                <h2>Lemon tea</h2>
                <p>
                    Enjoy a cup of tea with a hint of lemon
                </p>
            </div>
            <div class="col-md-4 pointer bg-primary small-margin border-white" id="coffee">
                <h2>Coffee</h2>
                <p>
                    Energise yourself with a cup of coffee.
                </p>
            </div>
            <div class="col-md-4 pointer bg-primary small-margin border-white" id="chocolate">
                <h2>Hot Chocolate</h2>
                <p>
                    Why not treat yourself to a hot chocolate?
                </p>
            </div>
        </div>
    </div>
    <div id="recipeDisplay">

    </div>
</asp:Content>
