// Verificar se um número é primo
function numPrimo(numero) {
    if (numero <= 1) {
      return (numero + ' não é um numero primo');
    }
  
    for (var i = 2; i * i <= numero; i++) {
      if (numero % i === 0) {
        return (numero + ' não é um numero primo');
      }
    }
        return (numero + ' é um numero primo');
  }

// Inverter uma string
function invertString(texto) {
    var stringInvertida = "";
  
    for (var i = texto.length - 1; i >= 0; i--) {
        stringInvertida += texto[i];
    }
  
    alert (stringInvertida);
  }

// Validar uma senha
function validarSenha(senha) {
    if (senha.length < 8) {
        alert('Senha não contem o minimo de 8 caracteres');
    }
  
    else if (!/[A-Z]/.test(senha)) {
        alert('Não contem letra maiuscúla');
    }
  
    else if (!/[a-z]/.test(senha)) {
        alert('Não contem letra minuscúla');
    }

    else if (!/\d/.test(senha)) {
        alert('Não contem número');
    }
    
    else{
        alert('Senha aprovada');
    }
  }

// Geração de cores aleatórias
function gerarCor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const corHexadecimal = `#${componenteHexadecimal(red)}${componenteHexadecimal(green)}${componenteHexadecimal(blue)}`;
  
    return corHexadecimal;
  }
  
function Hexadecimal(valor) {
    const componenteHex = valor.toString(16).padStart(2, '0');
  
    return componenteHex;
  }
  
    const corAleatoria = gerarCor();
    document.body.style.backgroundColor = corAleatoria;

// Converter temperatura
function temperatura(gc) {
    gf = (gc * 9/5) + 32
    alert (gf + ' Fahrenheit')
}