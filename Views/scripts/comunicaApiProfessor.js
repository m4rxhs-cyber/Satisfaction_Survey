$(document).ready(function () {
    listarGrid();
    filtrarDisciplinas();
});

function listarGrid(){
    $.get('http://20.206.250.122:5001/Avaliacao/Listar')
        .done(function(avaliacoes) { 
            carregarGrid(avaliacoes);
        })
        .fail(function(erro, mensagem, excecao) { 
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

function filtrarDisciplinas(){
    $.get('http://20.206.250.122:5001/Disciplina/Listar')
        .done(function(resposta) { 
            for(i = 0; i < resposta.length; i++) {
                $('#filtroDisciplina').append($('<option></option>').val(resposta[i].id).html(resposta[i].nomeDisciplina));
            }
        })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        });
}

function listarAvaliacaoPorDisciplina() {

    var element = document.getElementById("filtroDisciplina");
    var valueDiscipina = element.options[element.selectedIndex].value;
    
    
    if(valueDiscipina == 0){
        listarGrid();
    }
    else
    {
        $.get('http://20.206.250.122:5001/Avaliacao/ListarPorDisciplina?id=' + valueDiscipina)
            .done(function(resposta) { 
                carregarGrid(resposta);
            })
            .fail(function(erro, mensagem, excecao) { 
                alert("Erro ao consultar a API!");
            });
        }
}

function deleteAvaliacao(id) {
    $.ajax({
        type: 'DELETE',
        url: 'http://20.206.250.122:5001/Avaliacao/Excluir',
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
    $.get('http://20.206.250.122:5001/Avaliacao/Visualizar?id='+id)
    .done(function(resposta){
        let visualizacao = "NOTA: " + resposta.nota;
        visualizacao += '\n';
        visualizacao += "COMENTÁRIO: " + resposta.comentario;
        
        Swal.fire({
            position: 'center',
            title: visualizacao,
            showConfirmButton: true
        })
    })
    .fail(function(erro, mensagem, excecao) { 
        alert("Erro ao consultar a API!");
    });
}