## Criando váriaveis (MUITO **IMPORTANTE**)

## Teste no navegador

## Criando váriaveis var - let - const

## Var e Let = é uma variavel que pode ter seu valor alterado após ser definido. (atualmente usar o let é melhor(mesmo sendo a mesma coisa))

## Const = Cria um valor constante, não altera

## Usando o var - let

## No terminal, escreva var nome = "Rodrigo" ele retorna > undefined, então caso eu escreva apenas nome no console, não vai dar erro mesmo sem as aspas, ele vai retornar o que foi escrito na variavel, nome retorna no console > 'Rodrigo'

## var idade retorna > undefined. a variavel foi criada, porem não foi instituido um valor. (exemplo de cima foi adicionado valor, 'var nome = "Rodrigo"' a parte do valor é após o =) caso a gente escreva idade no console agora, ela vai retornar undefined, pois a idade não foi definida. Como a variavel idade, ja foi definida, se escrevermos no console, idade = 20 ele vai gravar a idade como 20, então se escrever no console idade ele retorna > 20 

## Usando o const

## No terminal, const mes = "Maio" com isso ele salvou o nome do mes como Maio, então no console mes vai retornar > 'Maio' caso a gente tente mudar o mes, usando mes = "Junho" ele vai dar um erro, pois o valor não pode ser modificado

## Criando váriaveis. 

## Para criarmos uma variavel, por exemplo de um usuario. precisamos do nome dele. Então, criamos uma variável const nome de usuario = "Rodrigo" - retorna um erro, pois não pode ter espaçamento. então deve ficar desse modo const nomedeusuario = "Rodrigo" vai salvar nomedeusuario como Rodrigo. Porém o modo certo de criar uma variavel que usa mais que uma palavra (Nome de usuario utiliza 3), é criar a variavel usando maiusculo sempre que mudar a palavra. Mais conhecido como Camel Case, (por conta das corcovas de um camelo) = modo certo de uso **IMPORTANTE** const nomeDeUsuario = "Rodrigo" deixando mais facil identificar cada palavra (primeira palavra sempre minusculo). Outro modo de uso também certo mas menos utilizado é o Snake Case = const nome_de_usuario = "Rodrigo" (Separando as palavras por "_")