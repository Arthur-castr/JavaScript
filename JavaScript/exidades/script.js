function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
     window.alert('erro')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id','img')
        if (fsex[0].checked){
            genero = "Homem" 
        if(idade > 0 && idade <= 10){
            //criança
        }else if(idade > 10 && idade < 21){
            //adolescente
        }else if(idade > 21 && idade < 50){
            //adulto
        }else{
            //velho
        }
    }else if (fsex[1].checked){
            genero = "mulher"
            if(idade > 0 && idade <= 10){
                //criança
            }else if(idade > 10 && idade < 21){
                //adolescente
            }else if(idade > 21 && idade < 50){
                //adulto
            }else{
                //velho
            }
        }
        

        res.innerHTML = `detectamos que você é ${genero} com idade ${idade}`
        
    }
    
}