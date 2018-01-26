var shops = document.getElementsByClassName('shop')
var sortShops = Array.prototype.filter.call(shops, function(el, i, aa) {
    if (i % 2 == 0) { 
        el.style = 'background:green' 
        // el.className += ' bla'
    }
    console.log(i + ': ' + el )
})
