function logout() {
    window.location.href = "view_login.html";
}

function easteregg() {
    Swal.fire({
        title: 'Cade os meus quatro pontos, Andre?',
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