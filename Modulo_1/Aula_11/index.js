let velocidade = 80 // definindo a velocidade inicial

// Pelo while ser uma estrutura dee repetição, ele vai repetir o bloco de código enquanto a condição for verdadeira
while (velocidade > 0) { // Enquanto a velocidade for maior do que 0, vai ficar alertando a velocidade e diminuindo 20 até o carro parar
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20 // valor que diminui da velocidade
    alert("Diminuindo 20 km/h")

    if (velocidade === 40) { // Se a velocidade for igual a 40, o loop vai parar
        break
    }
}