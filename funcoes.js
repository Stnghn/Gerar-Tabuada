function gerar() {
    var nro = document.getElementById('nro').value
    var tab = document.getElementById('seltab')
    var result = document.getElementById('result')

    if (nro == "") {
        result.innerHTML = `Campo vazio.`
    } else {
        //Limpa a tela pra n ficar repetindo
        tab.innerHTML = ''
        for (var i = 0; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${nro} x ${i} = ${nro*i}` 
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}