$(document).ready(function () {
    listarGrid();
    filtrarDisciplinas();
});

function listarGrid() {
    $.get('https://20.206.250.122:5001/Avaliacao/Listar')
        .done(function (avaliacoes) {
            carregarGrid(avaliacoes);
        })
        .fail(function (erro, mensagem, excecao) {
            alert(mensagem + ': ' + excecao);
        });
}

//Funcao para pegar todas as avaliacoes
function carregarGrid(avaliacoes) {
    $('#grid tr').remove();
    for (i = 0; i < avaliacoes.length; i++) {
        let row = $('<tr class="text-center"></tr>');


        row.append($('<td></td>').html(avaliacoes[i].idDisciplinaNavigation.nomeDisciplina));
        row.append($('<td></td>').html(avaliacoes[i].nota));
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

}

function filtrarDisciplinas() {
    $.get('https://20.206.250.122:5001/Disciplina/Listar')
        .done(function (resposta) {
            for (i = 0; i < resposta.length; i++) {
                $('#filtroDisciplina').append($('<option></option>').val(resposta[i].id).html(resposta[i].nomeDisciplina));
            }
        })
        .fail(function (erro, mensagem, excecao) {
            alert(mensagem + ': ' + excecao);
        });
}

function listarAvaliacaoPorDisciplina() {

    var element = document.getElementById("filtroDisciplina");
    var valueDiscipina = element.options[element.selectedIndex].value;


    if (valueDiscipina == 0) {
        listarGrid();
    }
    else {
        $.get('https://20.206.250.122:5001/Avaliacao/ListarPorDisciplina?id=' + valueDiscipina)
            .done(function (resposta) {
                carregarGrid(resposta);
            })
            .fail(function (erro, mensagem, excecao) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Erro ao consultar a API!',
                    footer: '<a href="mailto:m4rxhs3301@gmail.com" target="_blank">Contate o administrador aqui</a>'
                })
            });
    }
}

function deleteAvaliacao(id) {
    Swal.fire({
        position: 'center',
        title: 'Deseja deletar a avaliação?',
        text: "Você não consiguirá reverter este processo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'DELETE',
                url: 'https://20.206.250.122:5001/Avaliacao/Excluir',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(id),
                complete: (retorno) => {
                    console.log(retorno);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Avaliação deletada com sucesso!',
                        showConfirmButton: false,
                        timer: 3500
                    }),
                    setTimeout(function () {
                        window.location.reload();
                    }, 3800);
                }
            })
        }
    })
}

function visualisarAvaliacao(id) {
    $.get('https://20.206.250.122:5001/Avaliacao/Visualizar?id=' + id)
        .done(function (resposta) {
            //console.log(resposta);
            let visualizacao = "NOTA: " + resposta.nota;
            visualizacao += '\n';
            visualizacao += "COMENTÁRIO: " + resposta.comentario;


            Swal.fire({
                position: 'center',
                title: visualizacao,
                showConfirmButton: true
            })
        })
        .fail(function (erro, mensagem, excecao) {
            alert("Erro ao consultar a API!");
        });
}