using Microsoft.AspNetCore.Mvc;
using satisfactionSurvey.Models;
using Microsoft.EntityFrameworkCore;

namespace satisfactionSurvey.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]

    public class AvaliacaoController : ControllerBase
    {
        private BDContexto contexto;
        public AvaliacaoController(BDContexto bdContexto)
        {
            contexto = bdContexto;
        }
        
        [HttpGet]
         public List<Avaliacao> Listar()
        {  
            return contexto.Avaliacaos.Include(v => v.IdDisciplinaNavigation).OrderBy(v => v.Id).Select
                (
                    v => new Avaliacao
                    {
                        Id = v.Id,
                        Nota= v.Nota,
                        Comentario = v.Comentario,
                        IdDisciplina = v.IdDisciplina,
                        IdDisciplinaNavigation = new Disciplina 
                            { 
                                Id = v.IdDisciplinaNavigation.Id, 
                                NomeDisciplina = v.IdDisciplinaNavigation.NomeDisciplina
                            }
                    }
                ).ToList();
        }

        [HttpGet]
        public List<Avaliacao> Visualizar(int id)
        {
            List<Avaliacao> sql;

            sql =  contexto.Avaliacaos.Where(p => p.Id == id).Select
            (
                p => new Avaliacao
                {
                    Id = p.Id,
                    Nota= p.Nota,
                    Comentario = p.Comentario,
                    IdDisciplina = p.IdDisciplina,
                    IdDisciplinaNavigation = new Disciplina 
                        { 
                            Id = p.IdDisciplinaNavigation.Id, 
                            NomeDisciplina = p.IdDisciplinaNavigation.NomeDisciplina
                        }
                }
            ).ToList();

            return sql;
        }

        [HttpPost]
        public string Cadastrar([FromBody]Avaliacao novoAvaliacao)
        {
            try
            {
                contexto.Add(novoAvaliacao);
                contexto.SaveChanges();
                return "Avaliação cadastrado com sucesso!";
            }
            catch (System.Exception e)
            {
               return "Erro ao cadastrar: " + e.Message; 
            }

        }

        [HttpDelete]
        public string Excluir([FromBody]int id)
        {
            Avaliacao? dados = contexto.Avaliacaos.FirstOrDefault(p => p.Id == id);
            if (dados == null) 
            {
                return "Avaliação inexistente!";
            }
            else 
            {
                try
                {
                    contexto.Remove(dados);
                    contexto.SaveChanges();
                    return "Avaliação removida!";
                }
                catch (System.Exception e)
                {
                    return "Erro ao fazer a exclusão! \n Erro: " + e.Message;   
                }
            }       
        }
        
    }
}