const usuarios = [
  {
    login: 'marcelo',
  },
  {
    login: 'setxpro'
  },
  {
    login: 'admin',
  }
];

let botao = document.getElementById('btnLogar');

botao.addEventListener('click', function logar() {
  let pegaUsuario = document.getElementById('usuario').value;

  let loginValido = false; 

  for (let i in usuarios) {
    if (pegaUsuario == usuarios[i].login) {
      loginValido = true;
      break;
    }
  }

  if (loginValido) {
  
    window.location.href = 'paginaInicial.html';
  } else {
    alert('Login inválido! Verifique suas credenciais.');
  }
});

