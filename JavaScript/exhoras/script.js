function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` agora são ${hora} horas`
    if(hora >= 10 && hora < 12){
       img.src = "arquivos/manha_resized.jpg"
       document.body.style.background = 'rgb(238, 238, 153)'
    }else if(hora >= 12 && hora < 18){
        img.src = "arquivos/tarde.jpg"
        document.body.style.background = 'rgb(133, 133, 89)'
    }else{
        img.src = "arquivos/noite_resized.jpg"
        document.body.style.background = 'rgb(46, 46, 33)'
    }
}
