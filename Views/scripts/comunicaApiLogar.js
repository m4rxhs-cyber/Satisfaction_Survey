//Funcao para logar no sistema
function logar() {
    var login = $("#email_input").val();
    var senha = $("#password_input").val();


    $.get('http://20.206.250.122:5001/Usuario/Listar')
        .done(function (resposta) {
            for (i = 0; i < resposta.length; i++) {
                if (resposta[i].email == login && resposta[i].senha == senha) {
                    if (resposta[i].grupo == 'aluno') {
                        window.location.href = "./view_cadastrar_avaliacao.html";
                    } else { window.location.href = "./view_avaliacoes.html" }
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
    window.location.href = "index.html";
}