
function botao() {
  const agradecimento = document.querySelector('#agradecimento');
  agradecimento.innerHTML = 'Olá mundo!'

}
function redirecionar() {
  window.open('https://google.com.br')
  // window.location.href='https://google.com.br'
}
function trocar(elemento) {
  // document.querySelector('#mouseMove').innerHTML="trocou"
  elemento.innerHTML = 'trocou'
}
function voltar(elemento) {
  // document.querySelector('#mouseMove').innerHTML="Passe o mouse"
  elemento.innerHTML = 'Passe o mouse'
}
function load() {
  alert('Página carregada')
}
function funcaoChange(elemento) {
  console.log(elemento.value)
}
// function soma(n1, n2) {
//   return n1 + n2
// }
// alert(soma(10, 4))

// function setReplace(frase, nome, novo_nome) {
//   return frase.replace(nome, novo_nome)
// }
// alert(setReplace('vai Japão', 'Japão', 'Brasil'))

// function validarIdade(idade) {
//   var validar;
//   if (idade >= 18) {
//     validar = true
//   } else {
//     validar = false;
//   }
//   return validar
// }

// var idade = prompt('Qual sua idade?')
// console.log(validarIdade(idade)) 
// var data = new Date()

// alert(data.getHours())
// alert(data.getMinutes())

// var count;
// for(count = 0; count<=5;count++){
//   alert(count)
// }

// var count = 0;
// while(count <= 5){
//   console.log(count)
//   count++
// }

// var idade = prompt('Qual sua idade?')
// if(idade >= 18 ){
//   alert('é maior de idade')
// }else {
//   alert('menor de idade')
// }


// var fruta = [{nome:'maçã', cor:'vermelha'},{nome:'uva',cor:'roxa'}]
// console.log(fruta[1].nome)
// alert(fruta[0].nome)


// var fruta = {nome:'maçã', cor:'vermelha'}
// console.log(fruta.nome)
// alert(fruta.cor)

// var lista = ['pera','maçã','limão']
// lista.push('tamarindo')
// // lista.pop()
// console.log(lista.length)
// console.log(lista.reverse())

// console.log(lista[1])
// console.log(lista)

// console.log(lista.toString())
// console.log(lista.join(" | "))


// var nome = 'Diego Vespa'
// var idade = 29

// alert(`Olá, meu nome é ${nome}! e tenho ${idade} anos`)
// var frase = 'Brasil é legal'

// console.log(frase.replace('Brasil','Japão').toUpperCase())