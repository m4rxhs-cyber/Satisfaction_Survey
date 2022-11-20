using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace satisfactionSurvey.Models
{
    public partial class BDContexto : DbContext
    {
        public BDContexto()
        {
        }

        public BDContexto(DbContextOptions<BDContexto> options)
            : base(options)
        {
        }

        public virtual DbSet<Avaliacao> Avaliacaos { get; set; } = null!;
        public virtual DbSet<Disciplina> Disciplinas { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = WebApplication.CreateBuilder();
            
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"), Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.24-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Avaliacao>(entity =>
            {
                entity.ToTable("avaliacao");

                entity.HasIndex(e => e.IdDisciplina, "id_disciplina");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Comentario)
                    .HasMaxLength(400)
                    .HasColumnName("comentario");

                entity.Property(e => e.IdDisciplina).HasColumnName("id_disciplina");

                entity.Property(e => e.Nota).HasColumnName("nota");

                entity.HasOne(d => d.IdDisciplinaNavigation)
                    .WithMany(p => p.Avaliacaos)
                    .HasForeignKey(d => d.IdDisciplina)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("avaliacao_ibfk_1");
            });

            modelBuilder.Entity<Disciplina>(entity =>
            {
                entity.ToTable("disciplina");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.NomeDisciplina)
                    .HasMaxLength(30)
                    .HasColumnName("nome_disciplina");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.ToTable("usuario");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Cpf)
                    .HasMaxLength(20)
                    .HasColumnName("cpf");

                entity.Property(e => e.Email)
                    .HasMaxLength(30)
                    .HasColumnName("email");

                entity.Property(e => e.FlgAtivo).HasColumnName("flg_ativo");

                entity.Property(e => e.Grupo)
                    .HasMaxLength(20)
                    .HasColumnName("grupo");

                entity.Property(e => e.Login)
                    .HasMaxLength(50)
                    .HasColumnName("login");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .HasColumnName("nome");

                entity.Property(e => e.Senha)
                    .HasMaxLength(50)
                    .HasColumnName("senha");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
