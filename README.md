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
### Primeiramente eu criei a parte do front-end somente com HTML, CSS e JavaScript, para depois passar tudo para o Vue JS. Como eu não tinha conhecimento sobre tal assunto, fui estudar. No teste pedia para salvar os dados em um banco de dados e criar uma api em Spring Boot para fazer a comunicação com o front-end, mas eu não tenho conhecimento sobre Java, então resolvi criar uma api em JSON e salvar os dados também en um arquivo JSON. O back-end do site está hospedado no heroku e o front-end você pode rodar ele em localhost ou então abrir o GitPage. O servidor que usei foi o Json-Server.   

>## Como rodar a aplicação:
#### Basta acessar o seguinte link:
```

 https://m4rxhs-cyber.github.io/Cadastro-Pacientes-Pages/ 
 
```

>### Mas se quiser rodar em LOCALHOST dê os sequintes comandos:
 Abra o terminal, pode ser o do VS Code, e crie uma pasta para baixar os arquivos
 ```
 mkdir nomeDaPasta
 ```
 Entre na pasta
 ```
 cd nomeDaPasta
 ```
 Clone este repositório na pasta
```
git clone https://github.com/m4rxhs-cyber/Cadastro-de-Pacientes.git
```

## Você precisará instalar os seguintes pacotes: VUE CLI e o JSON-SERVER

#### Para instalar o VUE CLI basta digitar o seguinte comando:
```
npm install -g @vue/cli
```

#### Para instalar o JSON-SERVER basta digitar o seguinte comando:
```
npm install json-server
```

#### Depois de tudo instalado, já conseguimos rodar a aplicação. Para isso, digite o comando:
```
npm run serve
```

### Ele te dará um link, um LOCALHOST e um NETWORK, copie o link do NETWORK e acesse em seu browser.
### Pronto, agora você ja pode usufrir do sistema.
