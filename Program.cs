using satisfactionSurvey.Models;
using Microsoft.EntityFrameworkCore;

//Swagger
using Microsoft.OpenApi.Models;

 
var builder = WebApplication.CreateBuilder(args);
 
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<BDContexto>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});
 
// Add services to the container.
builder.Services.AddControllersWithViews();

// Add Swagger
// No terminal antes execute: dotnet add satisfactionSurvey.csproj package Swashbuckle.AspNetCore -v 6.2.3
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Swagger
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "Satisfaction Survey API",
        Description = "API em ASP.NET para gerenciamento de um sistema de pesquisa de avaliação.",
        Contact = new OpenApiContact
        {
            Name = "Contato",
            Url = new Uri("https://example.com/contact")
        },
        License = new OpenApiLicense
        {
            Name = "Licença",
            Url = new Uri("https://example.com/license")
        }
    });
});
 
var app = builder.Build();
 
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

// Swagger
app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "Satisfaction Survey v5");
    options.RoutePrefix = string.Empty;
    options.DocumentTitle = "Satisfaction Survey";
});

app.UseHttpsRedirection();
app.UseStaticFiles();
 
app.UseRouting();
 
app.UseAuthorization();
 
app.UseCors(option => option.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
 
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
 
app.Run();