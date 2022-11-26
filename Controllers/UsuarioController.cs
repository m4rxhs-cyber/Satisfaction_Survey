using Microsoft.AspNetCore.Mvc;
using satisfactionSurvey.Models;
using Microsoft.EntityFrameworkCore;

namespace satisfactionSurvey.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]

    public class UsuarioController : ControllerBase
    {
        private BDContexto contexto;
        public UsuarioController(BDContexto bdContexto)
        {
            contexto = bdContexto;
        }
        
        [HttpGet]
         public List<Usuario> Listar()
        {  
            return contexto.Usuarios.ToList();
        }
    }
}