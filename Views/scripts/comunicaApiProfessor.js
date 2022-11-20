function getAvaliacoes() {
    $.get('https://localhost:5001/Avaliacao/Listar')
        .done(function (avaliacoes) {
            for (i = 0; i < avaliacoes.length; i++) {
                let row = $('<tr class="text-center"></tr>');

                row.append($('<td></td>').html(avaliacoes[i].id));
                row.append($('<td></td>').html(avaliacoes[i].avaliacao));
                row.append($('<td></td>').html(avaliacoes[i].comentario));

                let botaoVisualizar = $('<button class="btn btn-primary"></button>').attr('type', 'button').html('Visualizar').attr('onclick', 'visualisarAvaliacao(' + avaliacoes[i].id + ')');
                let botaoExcluir = $('<button class="btn btn-danger"></button>').attr('type', 'button').html('Excluir').attr('onclick', 'deleteAvaliacao(' + avaliacoes[i].id + ')');
                
                let excluir = $('<td></td>');
                let visualizar = $('<td></td>');

                visualizar.append(botaoVisualizar);
                row.append(visualizar);

                excluir.append(botaoExcluir);
                row.append(excluir);

                $('#grid').append(row);
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

function deleteAvaliacao(id) {
    $.ajax({
        type: 'DELETE',
        url: 'https://localhost:5001/Avaliacao/Excluir',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(id),
        success: function (resposta) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Avaliação deletada com sucesso',
                showConfirmButton: false,
                timer: 1500
            }),
            setTimeout(function () {
                window.location.reload();
            }, 1800);
        }
    })
}

function visualisarAvaliacao(id){
    $.get('https://localhost:5001/Avaliacao/Visualisar?id='+id)
    .done(function(resposta){
        let visualizacao = "ID: " + resposta.id;
        visualizacao += '\n';
        visualizacao += "NOTA: " + resposta.avaliacao;
        visualizacao += '\n';
        visualizacao += "COMENTÁRIO: " + resposta.comentario;
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: visualizacao,
            showConfirmButton: true
        })
    })
}


function listarDisciplinas(){
    $.get('https://localhost:5001/Avaliacao/Listar')
        .done(function(resposta) { 
            for(i = 0; i < resposta.length; i++) {
                $('#disciplinaSelect').append($('<option></option>').val(resposta[i].id).html(resposta[i].nome));
            }
        })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        });
}

$(document).ready(function () {
    getAvaliacoes();
});