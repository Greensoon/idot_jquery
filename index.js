exports.idotSeo = function(url) {
    if(window) {
        var img = new Image()
        img.src = url
        img.style.display= 'none'
        var wrap = document.body
        if(wrap.querySelector('div')) {
            wrap.querySelector('div').appendChild(img)
        } else {
            wrap.appendChild(img)
        }
    }
}