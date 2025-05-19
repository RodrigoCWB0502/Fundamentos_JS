// Declarando a variável

const valor = prompt("Escolha um valor em metros: ")
const medida = prompt("Escolha para qual medida você quer converter? \n 1) Milímetro (mm) \n 2) Centímetro (cm) \n 3) Decímetro (dm) \n 4) Decâmetro (dam) \n 5) Hectômetro (hm) \n 6) Quilômetro (km)")

// Usando a variável no Switch
// Pega o valor em metros e converte para a medida escolhida usando * para multiplicar e / para dividir

switch (medida) {
    case "1":
        alert("O valor em milímetros é: " + valor * 1000)
        break;
    case "2":
        alert("O valor em centímetros é: " + valor * 100)
        break;
    case "3":
        alert("O valor em decímetros é: " + valor * 10)
        break;
    case "4":
        alert("O valor em decâmetros é: " + valor / 10)
        break;
    case "5":
        alert("O valor em hectômetros é: " + valor / 100)
        break;
    case "6":
        alert("O valor em quilômetros é: " + valor / 1000)
        break;
    default:
        alert("O valor em metros é: " + valor)
        break;
}