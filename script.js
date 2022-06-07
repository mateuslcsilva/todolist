var contagem = 0
var contagemConcluidas = 0
function adcionar() {

    var tarefa = document.querySelector('#tarefa').value
    if (tarefa.length > 0) {
        if (contagem == 0) {
            let container = document.querySelector('.container')
            let semTarefa = document.querySelector('.semTarefa')
            container.removeChild(semTarefa)
        }
        if (contagem < 130) {
            let container = document.querySelector('.container')
            let div = document.createElement('div')
            let li = document.createElement('li')
            let popup = document.createElement('div')
            let confirm = document.createElement('p')
            let erase = document.createElement('p')

            div.setAttribute('class', 'tarefas')
            div.setAttribute('onmouseover', "menuOpen(this)")
            div.setAttribute('onmouseout', "menuClose(this)")

            li.innerHTML = tarefa

            popup.setAttribute('class', 'popup')

            confirm.setAttribute('onclick', "concluir(this)")
            confirm.setAttribute('class', 'icon')
            confirm.innerHTML = '🗸'

            erase.setAttribute('onclick', "apagar(this)")
            erase.setAttribute('class', 'icon left')
            erase.innerHTML = '<b>X<b>'

            popup.style.display = 'none'

            popup.appendChild(confirm)
            popup.appendChild(erase)
            div.appendChild(li)
            div.appendChild(popup)
            container.appendChild(div)
            document.querySelector('#tarefa').value = ''
            contagem++
        } else {
            alert('Você só pode incluir 13 tarefas simultâneas.')
        }
    }
}

function menuOpen(element) {
    let div = element
    div.children[1].style.display = 'block'
}

function menuClose(element) {
    let div = element
    div.children[1].style.display = 'none'
}

function concluir(element) {
    if (contagemConcluidas > 12) {
        alert('Parece que você já 13 tarefas hoje, parabéns!! Infelizmente esse é o limite da nossa plataforma no momento. Em breve traremos atualizações.')
    } else {
        let popup = element.parentNode
        let tarefa = popup.parentNode
        tarefa.children[0].innerHTML = tarefa.children[0].innerHTML.strike()
        tarefa.children[0].classList.add('tarefaConcluida')
        let concluidas = document.querySelector('.concluidas')
        concluidas.appendChild(tarefa.children[0])
        document.querySelector('.container').removeChild(tarefa)
        contagem--
        if (contagem == 0) {
            let semTarefas = document.createElement('h3')
            semTarefas.setAttribute('class', "semTarefa")
            semTarefas.innerHTML = 'Parabéns, você concluiu todas as suas tarefas!!'
            document.querySelector('.container').appendChild(semTarefas)
        }
        contagemConcluidas++
    }
}


function apagar(element) {
    let con = confirm('Tem certeza de que deseja apagar a tarefa?')
    if (con == true) {
        let popup = element.parentNode
        let tarefa = popup.parentNode
        document.querySelector('.container').removeChild(tarefa)
        contagem--
    }
    if (contagem == 0) {
        let semTarefas = document.createElement('h3')
        semTarefas.setAttribute('class', 'semTarefa')
        semTarefas.innerHTML = 'Ainda não há nenhuma tarefa.'
        document.querySelector('.container').appendChild(semTarefas)
    }
}

function concluidas() {
    document.querySelector('.concluidas').style.display = 'block'
    document.querySelector('.container').style.display = 'none'
    document.querySelector('.btns').style.display = 'none'
}

function voltar() {
    document.querySelector('.concluidas').style.display = 'none'
    document.querySelector('.container').style.display = 'block'
    document.querySelector('.btns').style.display = 'block'
}

function limpar() {
    let con = confirm('Tem certeza que deseja limpar? Se clicar "OK" perderá todas as informações')
    if (con == true) {
        location.reload()
    }
}

document.addEventListener('keydown', function (e) {
    e.key === 'Enter' ? adcionar() : {}
}
)