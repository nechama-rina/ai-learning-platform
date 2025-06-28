using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace DAL
{
    public class AiprojectBdContextFactory : IDesignTimeDbContextFactory<AiprojectBdContext>
    {
        public AiprojectBdContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AiprojectBdContext>();
            optionsBuilder.UseSqlServer("Server=DESKTOP-IN2P6D4\\SQLEXPRESS;Database=AIProjectBD;Trusted_Connection=True;TrustServerCertificate=True;");

            return new AiprojectBdContext(optionsBuilder.Options);
        }
    }
}
