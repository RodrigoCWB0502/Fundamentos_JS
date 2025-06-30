function addInput() {
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li') // Podemos passar algumas opções junto. Exemplo ...createElement('li'. {...})
    newLi.className = 'list-item' // ClassName define a classe (class) de um item
    newLi.innerText = 'Novo input:' // Texto que  está dentro da li]
    
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    newLi.appendChild(newInput) // Adicionando o input dentro do Li
    ul.appendChild(newLi) // Adicionando o Li na lista (ul)
}