const listaDeCompras = [] // Criando o array (VAZIO) com o nome Lista de Compras
console.log(listaDeCompras);

listaDeCompras[0] = "Arroz" // Adicionamos o Arroz na primeira posição do array
listaDeCompras[1] = "Feijão"
console.log(listaDeCompras);

// Exemplo n° 2: Substituindo as posições

const Compras = ["Doce de Leite", false, true] // Cria o Array Compras e tem 3 elementos inseridos, [0, 1, 2] indice sempre 0 na primeira posição
console.log(Compras); // Printa os valores do Array

Compras[0] = "Arroz" // Inserido no lugar do Doce de leite
Compras[1] = "Feijão" // Inserido no lugar do false
Compras[2] = "Açucar" // Inserido no lugar do true
Compras[3] = "Paçoca" // Inserido em uma nova posição 
Compras[5] = "Bolo de caneca" // Inserindo o valor na posição 5, e o valor 4 seráa vazio (null)
console.log(Compras); 