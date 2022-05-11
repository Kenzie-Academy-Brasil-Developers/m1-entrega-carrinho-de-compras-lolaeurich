// Crie um botão contendo a string "Finalizar".
const botao = document.createElement('button')
botao.innerHTML = "Finalizar"


// Crie dinamicamente uma tag main dentro do body.
const main = document.createElement('main')
const body = document.getElementsByTagName('body')
body[0].appendChild(main)
console.log(body)


// Dentro da tag main você deverá inserir uma lista não ordenada contendo o array products-details.
console.log('oi');


// Crie uma variável soma, que irá representar a soma total dos itens no carrinho.
let soma = 0

function criarLista(lista) {
    const listaProducts = document.createElement('ul')

    for(let i = 0; i < lista.length; i++){
        soma += lista[i].preco
        const item = criarItem(lista[i])
        listaProducts.appendChild(item)
        
    }
    return listaProducts
}

function criarItem(item){
    
    const li = document.createElement('li')

    const spanNome = document.createElement('span')
    spanNome.innerHTML = item.nome

    const spanPreco = document.createElement('span')
    spanPreco.innerHTML = `R$ ${item.preco}`

    li.appendChild(spanNome)
    li.appendChild(spanPreco)

    return li
}
main.appendChild(criarLista(products))

// Crie um array products-details que irá receber a soma e o botão.
// Dentro da tag main você deverá inserir uma lista não ordenada para o array de products.
const productsDetails = [soma, botao]
const listaProductsDetails = document.createElement('ul')
const liSoma =  document.createElement('li')
const liBotao =  document.createElement('li')

liSoma.innerHTML = `Total R$ ${soma}`
liBotao.appendChild(botao)

listaProductsDetails.appendChild(liSoma)
listaProductsDetails.appendChild(liBotao)
main.appendChild(listaProductsDetails)
