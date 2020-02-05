function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    //var res = document.getElementById('res')
    //ou
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert("[ERRO]")
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'gabriel.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'euJovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Eu.png')
            } else {
                //idoso
                img.setAttribute('src', 'euVelho.png')
            }
        } else {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'cecilia.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'daniJovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'dani.png')
            } else {
                //idoso
                img.setAttribute('src', 'daniVelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}