using System;
using System.Collections.Generic;

namespace satisfactionSurvey.Models
{
    public partial class Avaliacao
    {
        public int Id { get; set; }
        public int Nota { get; set; }
        public string? Comentario { get; set; }
        public int IdDisciplina { get; set; }

        public virtual Disciplina? IdDisciplinaNavigation { get; set; } = null!;
    }
}
