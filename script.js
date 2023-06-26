// unidades de medida por categoria
const unidadesMedida = {
  comprimento: ["metros", "centímetros", "polegadas"],
  peso: ["quilogramas", "gramas", "libras"],
  temperatura: ["Celsius", "Fahrenheit", "Kelvin"]
};

// função para atualizar as opções de unidade de medida
function atualizarUnidades() {
  const categoria = document.getElementById("categoria").value;
  const unidadesOrigem = unidadesMedida[categoria];
  const unidadesOrigemSelect = document.getElementById("unidadeOrigem");
  const unidadesDestinoSelect = document.getElementById("unidadeDestino");

  // Limpar as opções de unidade de medida dos dois campos
  unidadesOrigemSelect.innerHTML = "";
  unidadesDestinoSelect.innerHTML = "";

  // adicionar as opções de unidade de medida
  for (let i = 0; i < unidadesOrigem.length; i++) {
    const option = document.createElement("option");
    option.text = unidadesOrigem[i];
    unidadesOrigemSelect.add(option);
  }

  // adicionar as opções de unidade de medida de destino
  for (let i = 0; i < unidadesOrigem.length; i++) {
    const option = document.createElement("option");
    option.text = unidadesOrigem[i];
    unidadesDestinoSelect.add(option);
  }
}

// função para realizar a conversão comprimento
function converterComprimento(valor, unidadeOrigem, unidadeDestino) {
  switch (unidadeOrigem) {
    case "metros":
      switch (unidadeDestino) {
        case "metros":
          return valor;
        case "centímetros":
          return valor * 100;
        case "polegadas":
          return valor * 39.37;
      }
      break;
    case "centímetros":
      switch (unidadeDestino) {
        case "metros":
          return valor / 100;
        case "centímetros":
          return valor;
        case "polegadas":
          return valor / 2.54;
      }
      break;
    case "polegadas":
      switch (unidadeDestino) {
        case "metros":
          return valor * 0.0254;
        case "centímetros":
          return valor * 2.54;
        case "polegadas":
          return valor;
      }
      break;
  }
  return 0;
}

// função para realizar a conversão - peso
function converterPeso(valor, unidadeOrigem, unidadeDestino) {
  switch (unidadeOrigem) {
    case "quilogramas":
      switch (unidadeDestino) {
        case "quilogramas":
          return valor;
        case "gramas":
          return valor * 1000;
        case "libras":
          return valor * 2.20462;
      }
      break;
    case "gramas":
      switch (unidadeDestino) {
        case "quilogramas":
          return valor / 1000;
        case "gramas":
          return valor;
        case "libras":
          return valor * 0.00220462;
      }
      break;
    case "libras":
      switch (unidadeDestino) {
        case "quilogramas":
          return valor * 0.453592;
        case "gramas":
          return valor * 453.592;
        case "libras":
          return valor;
      }
      break;
  }
  return 0;
}

// função para realizar a conversão - temperatura
function converterTemperatura(valor, unidadeOrigem, unidadeDestino) {
  switch (unidadeOrigem) {
    case "Celsius":
      switch (unidadeDestino) {
        case "Celsius":
          return valor;
        case "Fahrenheit":
          return (valor * 9/5) + 32;
        case "Kelvin":
          return valor + 273.15;
      }
      break;
    case "Fahrenheit":
      switch (unidadeDestino) {
        case "Celsius":
          return (valor - 32) * 5/9;
        case "Fahrenheit":
          return valor;
        case "Kelvin":
          return (valor + 459.67) * 5/9;
      }
      break;
    case "Kelvin":
      switch (unidadeDestino) {
        case "Celsius":
          return valor - 273.15;
        case "Fahrenheit":
          return (valor * 9/5) - 459.67;
        case "Kelvin":
          return valor;
      }
      break;
  }
  return 0;
}

// função para realizar a conversão
function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const unidadeOrigem = document.getElementById("unidadeOrigem").value;
  const unidadeDestino = document.getElementById("unidadeDestino").value;
  let resultado;

  // fazer a conversão com base na categoria selecionada anteriomente
  const categoria = document.getElementById("categoria").value;
  switch (categoria) {
    case "comprimento":
      resultado = converterComprimento(valor, unidadeOrigem, unidadeDestino);
      break;
    case "peso":
      resultado = converterPeso(valor, unidadeOrigem, unidadeDestino);
      break;
    case "temperatura":
      resultado = converterTemperatura(valor, unidadeOrigem, unidadeDestino);
      break;
  }

  // exibir o resultado
  document.getElementById("resultado").textContent = resultado.toFixed(2);
}

// atualizar as opções ao carregar a página
window.onload = atualizarUnidades;
