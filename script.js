// Mapeamento das unidades de medida por categoria
const unidadesMedida = {
  comprimento: ["metros", "centímetros", "polegadas"],
  peso: ["quilogramas", "gramas", "libras"],
  temperatura: ["Celsius", "Fahrenheit", "Kelvin"]
};

// Função para atualizar as opções de unidade de medida de origem e destino
function atualizarUnidades() {
  const categoria = document.getElementById("categoria").value;
  const unidadesOrigem = unidadesMedida[categoria];
  const unidadesOrigemSelect = document.getElementById("unidadeOrigem");
  const unidadesDestinoSelect = document.getElementById("unidadeDestino");

  // Limpar as opções de unidade de medida de origem e destino
  unidadesOrigemSelect.innerHTML = "";
  unidadesDestinoSelect.innerHTML = "";

  // Adicionar as opções de unidade de medida de origem
  for (let i = 0; i < unidadesOrigem.length; i++) {
    const option = document.createElement("option");
    option.text = unidadesOrigem[i];
    unidadesOrigemSelect.add(option);
  }

  // Adicionar as opções de unidade de medida de destino
  for (let i = 0; i < unidadesOrigem.length; i++) {
    const option = document.createElement("option");
    option.text = unidadesOrigem[i];
    unidadesDestinoSelect.add(option);
  }
}

// Função para realizar a conversão de comprimento
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
  return 0; // Valor padrão caso a conversão não seja possível
}

// Função para realizar a conversão de peso
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
  return 0; // valor caso a conversão não seja possível
}

// Função para realizar a conversão de temperatura
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
  return 0; // Valor padrão caso a conversão não seja calculada
}

// Função para realizar a conversão
function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const unidadeOrigem = document.getElementById("unidadeOrigem").value;
  const unidadeDestino = document.getElementById("unidadeDestino").value;
  let resultado;

  // Realizar a conversão com base na categoria selecionada
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

  // Exibir o resultado da conversão
  document.getElementById("resultado").textContent = resultado.toFixed(2);
}

// Atualizar as opções de unidade de medida de origem e destino ao carregar a página
window.onload = atualizarUnidades;
