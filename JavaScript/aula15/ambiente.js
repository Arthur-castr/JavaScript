let num = [5,2,9,1]
num.push(6)
console.log(`tem ${num.length} posições`)
console.log(`o primeiro valor é ${num[0]}`)
console.log(`a sequencia é ${num}`)
let pos = num.indexOf(9)
if(pos == -1){
    console.log('não esta registrado')
}else{
console.log(`o valor 9 esta na posição ${pos}`)
}