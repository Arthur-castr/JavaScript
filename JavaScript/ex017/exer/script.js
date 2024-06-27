function armazenar(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById('seltab')
    if(num.value.length < 0){
        window.alert('erro')
    }else{
           let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `${n}`
        tab.appendChild(item)
    }
}
    function finalizar(){
        let num = document.getElementById("txtn")
        let n = Number(num.value)
        let g = [n]
        let res = document.getElementById('res')
        let fin = document.createElement('option#final')
        fin.text = `${g}`
        res.appendChild(fin)
        
    
}

