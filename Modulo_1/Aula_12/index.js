let velocidade = 0

do { // a diferença, é que no Do - While ele executa o bloco de código antes de verificar a condição
    alert("A velocidade é: " + velocidade + " km/h")
    velocidade -= 20
} while (velocidade > 0) // Então mesmo aqui sendo False pois a velocidade é 0, e ele quer que seja maior que 0, ele executa o bloco de código uma vez antes de verificar a condição

alert("A velocidade é: " + velocidade + " km/h")