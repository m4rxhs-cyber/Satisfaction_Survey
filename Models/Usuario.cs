﻿using System;
using System.Collections.Generic;

namespace satisfactionSurvey.Models
{
    public partial class Usuario
    {
        public int Id { get; set; }
        public string Login { get; set; } = null!;
        public string Nome { get; set; } = null!;
        public string Senha { get; set; } = null!;
        public string Grupo { get; set; } = null!;
        public string Cpf { get; set; } = null!;
        public string Email { get; set; } = null!;
        public bool? FlgAtivo { get; set; }
    }
}
