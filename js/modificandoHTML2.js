const div = document.querySelector('div')
        div.innerHTML = 'Texto Alterado'
        // div.outerHTML = 'Texto Alterado'
        div.insertAdjacentHTML('beforebegin',' <p>Ates do Inicio</p>')
        div.insertAdjacentHTML('afterbegin', '<p>Depois do Inicio</p>')
        div.insertAdjacentHTML('beforeend', '<p>Antes do Fim</p>')

        //text only(no tags)
        console.log(div.innerText)