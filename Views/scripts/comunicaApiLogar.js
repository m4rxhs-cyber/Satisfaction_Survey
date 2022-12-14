//Funcao para logar no sistema
function logar() {
    var login = $("#email_input").val();
    var senha = $("#password_input").val();


    $.get('https://20.206.250.122:5001/Usuario/Listar')
        .done(function (resposta) {
            for (i = 0; i < resposta.length; i++) {
                if (resposta[i].email == login && resposta[i].senha == senha) {
                    if (resposta[i].grupo == 'aluno') {
                        window.location.href = "./Satisfaction_Survey/Views/view_cadastrar_avaliacao.html";
                    } else { window.location.href = "./Satisfaction_Survey/Views/view_avaliacoes.html" }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Credenciais incorretas, tente novamente!!'
                    })
                }
            }
        })
        .fail(function (erro, mensagem, excecao) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo de errado aconteceu!',
                footer: '<a href="mailto:m4rxhs3301@gmail.com" target="_blank">Contate o administrador aqui</a>'
            })
        });


}


//Funcao para deslogar do sistema
function logout() {
    window.location.href = "http://satisfactionsurvey.brazilsouth.cloudapp.azure.com/index.html";
}