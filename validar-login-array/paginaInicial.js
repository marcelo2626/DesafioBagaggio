document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.href = `paginaInicial.html?usuario=${encodeURIComponent(pegaUsuario)}`);
    const usuario = urlParams.get('usuario');
  
    if (usuario) {
      const mensagem = `Bem-vindo, ${usuario}!`;
      document.getElementById('mensagemBoasVindas').textContent = mensagem;
    }
  });
  