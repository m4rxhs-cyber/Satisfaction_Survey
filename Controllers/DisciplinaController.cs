using Microsoft.AspNetCore.Mvc;
using satisfactionSurvey.Models;
using Microsoft.EntityFrameworkCore;

namespace satisfactionSurvey.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]

    public class DisciplinaController : ControllerBase
    {
        private BDContexto contexto;
        public DisciplinaController(BDContexto bdContexto)
        {
            contexto = bdContexto;
        }
        
        [HttpGet]
         public List<Disciplina> Listar()
        {  
            return contexto.Disciplinas.ToList();
        }
    }
}