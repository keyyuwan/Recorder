const { ipcRenderer } = require('electron')

const destPath = document.querySelector("#dest-path")

ipcRenderer.on("dest-path-update", (event, destination) => {
    destPath.value = destination
})

function choose() {
    // invoke espera algum retorno/resposta
    ipcRenderer.invoke("show-dialog")
        .then(destination => {
            destPath.value = destination
        })
}