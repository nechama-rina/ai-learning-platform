using BL;
using BL.Interfaces;
using DAL;
using DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
Console.WriteLine("Current Windows User: " + System.Security.Principal.WindowsIdentity.GetCurrent().Name);


builder.Services.AddScoped<IUsersDAL, UsersDal>();
builder.Services.AddScoped<IUsersBL, UsersBL>();
builder.Services.AddScoped<ICategoriesDAl, CategoriesDAl>();
builder.Services.AddScoped<ICategoriesBL, CategoriesBL>();
builder.Services.AddScoped<ISubCategoriesDAL, SubCategoriesDAL>();
builder.Services.AddScoped<ISubCategoriesBL, SubCategoriesBL>();
builder.Services.AddScoped<AIService>();
builder.Services.AddScoped<IPromptDAL, PromptDAL>();
builder.Services.AddScoped<IPromptBL, PromptBL>();
builder.Services.AddDbContext<AiprojectBdContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("connection")));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    });
 https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors("AllowAll");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
