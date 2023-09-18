function tirateima() {
    let text = document.getElementById('teima_input').value
    let [x, y] = text.split(',').map(Number)
    const p = document.getElementById('teima')
    if ((0 <= x && x <= 432) && (0 <= y && y <= 468)) {
        p.innerHTML = ("dentro")
    } else {
        p.innerHTML = ("fora")
    }
}

function vicelider() {
    let text = document.getElementById('vice_input').value
    let [n1,n2,n3] = text.split(',').map(Number)
    function sortfuncao(a, b){
        return (a - b)
    }
    let arr = [n1, n2, n3]
    arr.sort(sortfuncao)
    const p = document.getElementById('vice')
    p.innerHTML = `O número do vice-lider é ${arr[1]}`
}

function zerinho(){
    const zeroouum = document.getElementById('zero_input').value
    const p = document.getElementById('zero')
    
    if(zeroouum == "100"){
        p.innerHTML = "A"
    }
    else if(zeroouum == "011"){
        p.innerHTML = "A"
    }
    else if(zeroouum == "101"){
        p.innerHTML = "B"
    }
    else if(zeroouum == "010"){
        p.innerHTML = "B"
    }
    else if(zeroouum == "001"){
        p.innerHTML = "C"
    }
    else if(zeroouum == "110"){
        p.innerHTML = "C"
    }
}