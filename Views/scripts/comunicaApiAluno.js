function listarDisciplinas(){
    $.get('https://20.206.250.122:5001/Disciplina/Listar')
        .done(function(resposta) { 
            for(i = 0; i < resposta.length; i++) {
                $('#disciplinaSelect').append($('<option></option>').val(resposta[i].id).html(resposta[i].nomeDisciplina));
            }
        })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        });
}

function cadastrarAvaliacao() {
    let avaliacao = {
        Id: 0,
        Nota: formulario.notaInput.value,
        Comentario: formulario.comentarioInput.value,
        IdDisciplina: $('#disciplinaSelect').val()
    };

    $.ajax({
        type: 'POST',
        url: 'https://20.206.250.122:5001/Avaliacao/Cadastrar',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(avaliacao),
        success: function () {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Avaliação enviada com sucesso',
                showConfirmButton: false,
                timer: 3500
            }),
            setTimeout(function () {
                window.location.reload();
            }, 3800);
        },
        error: function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro ao enviar a avaliação!',
                footer: '<a href="mailto:m4rxhs3301@gmail.com" target="_blank">Contate o administrador aqui</a>'
            })
        }
    });

}

function easteregg() {
    Swal.fire({
        title: 'Cade os meus dois pontos, Andre?',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff',
        backdrop: `
          rgba(0,0,123,0.4)
          url("./img/chew.webp")
          left top
          no-repeat
        `
    })
}

$(document).ready(function () {
    listarDisciplinas();
});

