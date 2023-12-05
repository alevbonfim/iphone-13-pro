document.getElementById('green').onclick = function(){
    var image = this.dataset.image;
    document.getElementById('product-image').src = image;
}
