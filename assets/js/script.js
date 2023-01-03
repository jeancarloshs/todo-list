function clicou() {
    const lista = document.querySelector('#lista')
    const newUl = lista.querySelector('ul')
    let inputValue = document.querySelector('input').value

    let newLi = document.createElement("li")
    newLi.innerText = inputValue
    newUl.append(newLi)
    inputValue.value = ''
}

let inputValue = document.querySelector('input').value
let input = document.querySelector('input')

input.addEventListener('keyup', (event)=>{
    // console.log('SOLTOU', event.keyCode)
    // console.log('--------------------')
    let keyPress = event.keyCode
    if (keyPress === 13) {
        const lista = document.querySelector('#lista')
        const newUl = lista.querySelector('ul')
        const input = document.querySelector('input').value
    
        let newLi = document.createElement("li")
        newLi.innerText = input
        newUl.appendChild(newLi)
    } else {
        console.log('campo vazio')
    }
})