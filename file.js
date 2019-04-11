const firePixelsArray = []
const fireWidth = 10
const fireHeight = 10

function start() {
    createFireDataStructure()
    createFireSource()    
    renderFire()

   setInterval(() => {
    calculateFirePropagation()
   }, 1000);
}

function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight

    for ( let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0
    }
}

function calculateFirePropagation() {
    for(let colunn = 0; colunn < fireWidth; colunn++) {
        for (let row = 0; row < fireHeight; colunn++) {
            const pixelIndex = colunn +(fireWidth * row)

            console.log(pixelIndex)
        }
    }
}

function renderFire() {
    let html = '<table cellpadding=0 celspacing=0>'

    for (let row = 0; row < fireHeight; row++) {
        html += '<tr>'

        for (let colunn = 0; colunn < fireWidth; colunn++) {
            const pixelIndex = colunn +(fireWidth * row)
            const fireIntensity = firePixelsArray[pixelIndex]

            html += '<td>'
            html += `<div class="pixel-index">${pixelIndex}</div>`
            html += fireIntensity
            html += '</td>'
        }

        html += '</tr>'
    }

    html += '</table>'

    document.querySelector('#fireCanvas').innerHTML = html
}
function createFireSource() {
    for( let colunn = 0; colunn <= fireWidth; colunn++) {
        const overflowPixelIndex = fireWidth * fireHeight
        const pixelIndex = (overflowPixelIndex - fireWidth) + colunn

        firePixelsArray[pixelIndex] = 36
    }
}


start()