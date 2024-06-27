let num = [5,2,9,1]
num.push(6)
console.log(`tem ${num.length} posições`)
console.log(`o primeiro valor é ${num[0]}`)
console.log(`a sequencia é ${num}`)

/* 

for(let pos = 0;pos <= num.length;pos++){
    console.log(`${num[pos]}`)
    
}*/
for(let pos in num){
    console.log(`${num[pos]}`)
}