using System;
using System.Collections.Generic;

namespace satisfactionSurvey.Models
{
    public partial class Disciplina
    {
        public Disciplina()
        {
            Avaliacaos = new HashSet<Avaliacao>();
        }

        public int Id { get; set; }
        public string NomeDisciplina { get; set; } = null!;

        public virtual ICollection<Avaliacao> Avaliacaos { get; set; }
    }
}
