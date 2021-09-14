const items = document.querySelectorAll('[wm-dropzone] .item')
items.forEach((item, index) =>{

    // antes de arrastar definir como draggable
    item.draggable = true
    // caso não possua id cria um id ao ser arrastado
    item.id = item.id || `draggable-item-${index}`    
    item.ondragstart = e =>
        e.dataTransfer.setData('item-id', e.target.id)
})

// Zera o padrao do drag e cria evento para concluir o "arrastar"
const dropzones = document.querySelectorAll('[wm-dropzone]')
dropzones.forEach(dropzone => {
    dropzone.ondragover = e => e.preventDefault()
    dropzone.ondrop = function(e){
        const id =  e.dataTransfer.getData('item-id')
        const item = document.getElementById(id)
        e.target.appendChild(item)

        //Caso não queira colocar os elementos dentro um do outro
        // dropzone.appendChild(item)
    }

})