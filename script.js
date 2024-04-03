//Titulo

document.addEventListener("DOMContentLoaded", function() {
  var h1Element = document.querySelector('h1');
  setTimeout(function() {
    h1Element.classList.add('h1-normal');
  }, 1000); // 1000 milissegundos = 1 segundo
});


// Tipos de grãos

// Seleciona todos os elementos h4 com a classe 'tipos'
var h4Elements = document.querySelectorAll('h4.tipos');

// Para cada elemento h4, adiciona um evento de mouse
h4Elements.forEach(function(h4) {
  // Adiciona um ouvinte de evento de mouse para o evento 'mouseover'
  h4.addEventListener('mouseover', function() {
    // Seleciona o próximo elemento irmão com a classe 'texto'
    var textoElement = this.nextElementSibling;

    // Adiciona a classe 'mostrar' ao elemento irmão
    textoElement.classList.add('mostrar');
  });

  // Adiciona um ouvinte de evento de mouse para o evento 'mouseout'
  h4.addEventListener('mouseout', function() {
    // Seleciona o próximo elemento irmão com a classe 'texto'
    var textoElement = this.nextElementSibling;

    // Remove a classe 'mostrar' do elemento irmão
    textoElement.classList.remove('mostrar');
  });

  // CONTEUDO

  var h3Elements = document.querySelectorAll('h3.caixa');
  
  h3Elements.forEach(function(h3){
    h3Elements.addEventListener('mouseover', function(){
        var caixaElement = this.nextElementSibling;
        caixaElement.classList.add('mostrar');
    });
  });
});

var h4Elements = document.querySelectorAll('h4.tipos');

h4Elements.forEach(function(h4) {
  h4.addEventListener('mouseover', function() {
    var textoElement = this.nextElementSibling;
    textoElement.classList.add('mostrar');
  });

  h4.addEventListener('mouseout', function() {
    var textoElement = this.nextElementSibling;
    textoElement.classList.remove('mostrar');
  });
});
