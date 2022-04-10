//document.getElementById('btnok').setAttribute('onclick', 'resolveTabuada()')

function resolveTabuada(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('tabuada')
    if (num.value.length == 0) {
        window.alert('impossível')
    } else { 
          let n = Number(num.value)
          let c = 1 
          tab.innerHTML = ''
          while (c <= 10) {
              let item = document.createElement('option')
              item.text = `${num.value} X ${c} = ${num.value*c}`
              item.value = `tab${c}`
              tab.appendChild(item)
              c++
          }
    }
}