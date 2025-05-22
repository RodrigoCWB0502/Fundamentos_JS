# Operadores (testar no console)

# Esses são os operadores do JS: Aritméticos +,-,*,/ e % | Agrupamento () | Atribuição =, +=, -=, /= e %= | Encadeamento | Incrementar ++ | Decrementar -- 

#  Aritméticos: São basicamente contas que você consegue fazer usando o console (no codigo também da) Exemplos: 1 + 1 retorna 2, 7 - 2 retorna 5, 3 * 3 retorna 9, 6 / 2 retorna 3, 10 % 3 retorna 1 (utilizado para obter o resto da divisão).

# Agrupamento: 3 + 3 * 5 retorna 18 caso queira fazer a soma antes, coloque entre () fica (3 + 3) * 5 retorna 30 (Não utiliza chaves {} ou conchetes [] faz contas complexas usando apenas o (). Exemplo mais completo ((4 + 4) * 4 + (5 + 5)) / 2 retorna 21)

# Atribuição: Exemplo mais visto é o = | um exemplo onde ele pode ser visto é criando uma variavel, const nome = "Rodrigo". O opeador para soma +=, para subtração -=, multiplicação *=, divisão /= serve, para alterar um valor existente exemplo: let num = 5 define no console que num = 5, então ao escrever num no console retorna 5, se voce fizer uma soma, num + 3 retorna 8 porem num continua sendo 5, pode ver isso no console escrevendo num novamente, para alterar o valor de num precisa ser +=, então se fizer no console: num += 3, vai retornar no console o numero 8 e agora num será igual a 8, pode ver isso escrevendo apenas num no console. num agora é = 8, se fizermos num += 3, num agora é igual a 11, num -= 2, num agora é 9, num *= 3, num agora é 27, num /= 9, num agora é 3

# Encadeamento: É basicamente o ponto (.) Exemplo: console.error() então o encadeamento é basicamente o . Para testar ele, encadeando um elemento, teste console.error(num) vai retornar em forma de erro o numero 3, (ou o numero atual, se você mudou). Muito importante, vai ser muito usado em diversas variaveis daqui pra frente.

# Incrementar ++: Incrementar, é como se fossemos somar 1 no nosso elemento, então teste no console num ++ vai retornar no console > 3 porém se você escrever num no console o valor dele mudou de 3 para 4, então sempre vai somar 1 cada vez utilizado, se fizer novamente, num ++ vai retornar 4 porem ele somou 1, então se escrever num no console, num vai ser 5. Outro exemplo de uso é ++num vai somar 1 e vai mostrar ele ja atualizado

# Decrementar --: Decrementar faz basicamente a mesma coisa que Incrementar porem subtraindo, num -- (num que era 5 pois incrementamos += duas vezes), vai ser 4 agora, vai retornar no console o numero 5 porém seu valor é 4 pois subtraimos um. Outro exemplo é --num vai subtrair 1 e vai mostar ele atualizado

# Teste em strings: se testarmos "Rodrigo" + "Bittencourt" vai retornar 'Rodrigo Bittencourt' ele juntou as duas strings. 

# Numero + String: se fizermos uma soma no console 1 + "1" (o segundo um sendo uma string, não um numero, pois ele está entre aspas "") retorna '11', ele transformou o primeiro numero em string ou seja, ele Concatenou

# Exemplo mais eficiente: criamos duas variaveis. let num1 = 32 e let num2 = "64" ou seja, o num1 é um numero e o num2 é uma string, então se tentarmos somar no console, num1 + num2 ele vai retornar '3264' concatenou e juntou numa string, não vai fazer uma soma, caso você altere o num2 dessa maneira: num2 = 64 ai sim ele mudou para numero, então num1 + num2 = 96

[Foto de exemplo](image.png)