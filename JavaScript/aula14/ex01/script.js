function contar() {
let fim = document.getElementById('txtf')
let ini = document.getElementById('txti')
let pas = document.getElementById('txtp')
let res = document.getElementById('res')
if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
    res.innerHTML = 'impossivel contar...'
    window.alert('erro')
} else {
    res.innerHTML = 'contando:'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)

    if(i < f){
        for(let c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1f449} `
        //contagem crescente

    }
   }else{
    for(c = i;c >= f; c -= p){
        res.innerHTML += ` ${c} \u{1f449} `
        //contagem decrescente
    }
   }
  }
}
