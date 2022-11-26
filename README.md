# <center> Sistema de Pesquisa de Satisfação </center> 

### Esse é o projeto integrador, um sistema de pesquisa de satisfação 🖥️


## Recursos do sistema:

* Poder fazer uma avaliação da aula dado no dia totalmente anônimo.
* O professor pode gerenciar todas as avaliações feitas para aula e filtrar por disciplinas específicas


>## Tecnologias usadas:

<table>
  <tr>
    <td>C#</td>
    <td>Dotnet 7.0</td>
    <td>Entity Framework</td>
    <td>Scafold</td>
    <td>MySQL</td>
    <td>HTML</td>
    <td>CSS</td>
    <td>JS</td>
    <td>Bootstrap</td>
    <td>jQuery</td>
    <td>SweetFire Alert</td>
  </tr>
</table>

>## Como a aplicação foi feita:
### Primeiramente foi instalado na máquina o dotnet na versão 7 e os pacotes do Entity Framework. Logo após foi feito os arquivos das visões de login, avaliações e cadastro de avaliações e seus respectivos arquivos Javascript. Na terceira fase do projeto foi criado o banco de dados com as tabelas avaliacao, usuario e disciplinas. Após a criação do banco, foi feita a engenharia reversa do banco usando o scafold, método do Entity Framework. Na penúltima fase do projeto foram feitas as APIs do sistema que estão na pasta controller. A última parte do projeto foi a tentativa de subir a aplicação e roda na Azure, porém não obtivemos sucesso.

>## O que não foi feito dos requisitos:

#### Aplicação rodando na Azure e a atualização de dados. 

>## Motivo que não foi possível fazer os itens acima:

1. Conseguimos subir a aplicação para Azure, porém as APIs não funcionaram. Tentamos inúmeras possibilidades de soluções diferentes e não conseguimos solucionar os problemas.
2. A atualização de dados não foi feita pois o nosso sistema ja estava pronto e fizemos apenas algumas alterações na APi em questão. O nosso banco ja estava construido e com relações de tabelas e para fazer as atualizações teriam que mudar a lógica no nosso banco. 
