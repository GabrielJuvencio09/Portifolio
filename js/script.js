const titulo = document.querySelector('.escrita')
typeWriter(titulo)


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';  // usado para que nao tenha texto ao aparecer a pagina //
    let currentText = ''; 
    let lastChar = '';

    
  
    textoArray.forEach((letra, i) => {
      setTimeout(function() {
        if (lastChar === '.') {
          currentText += '<br>';
        }
        currentText += letra;
        elemento.innerHTML = currentText;
        lastChar = letra;
      }, 35 * i);
    });
  }


