
//Envio da avaliacao
function envio() {
    let mensagem = {
        avaliacao: formulario.avalInput.value,
        comentario: formulario.mensagemInput.value,
        disciplina_id: formulario.disciplinaInput.value
        
    };

    $.ajax({
        type: 'POST',
        url: 'https://localhost:5001/Mensagem/Cadastrar',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(mensagem),
        success: function () {
            Swal.fire({
                position: 'top',
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
                text: 'Erro ao enviar a avalização!',
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