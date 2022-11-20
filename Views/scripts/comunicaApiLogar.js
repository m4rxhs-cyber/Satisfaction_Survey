function logar() {
    var login = $("#login").val();
    var senha = $("#senha").val();


    $.get('https://localhost:5001/Login')
        .done(function (resposta) {
            for (i = 0; i < resposta.length; i++) {
                if (resposta[i].login == login && resposta[i].senha == senha) {
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


function logout() {
    window.location.href = "index.html";
}