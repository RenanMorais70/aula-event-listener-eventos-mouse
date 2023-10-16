const itemInfo = {
    valor: 11.66,
};

const quantidadeSubtotalText = document.getElementById("quantidade-subtotal");
const valorSubtotalText = document.getElementById("valor-subtotal");

const input = document.getElementById('quantidade-produto-01')
const sumButton = document.getElementById('btn-adicionar-produto-01')
const subButton = document.getElementById('btn-subtrair-produto-01')



function atualizarTotal() {
  const quantidade = input.value

  quantidadeSubtotalText.innerText = input.value + " itens";
  valorSubtotalText.innerText = itemInfo.valor * input.value

}

function adicionarItem() {
  input.value = Number(input.value) + 1
  
  atualizarTotal()
 }


function subtrairItem() {
  if (input.value > 1) {
  input.value = Number(input.value) - 1
}
  
  atualizarTotal()
}

sumButton.addEventListener('click', adicionarItem)

subButton.addEventListener('click', subtrairItem)



