document.getElementById('green').onclick = function(){
    var image = this.dataset.image;
    document.getElementById('product-image').src = image;
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    document.querySelector('#green .color').classList.add('selected');
}

document.getElementById('silver').onclick = function(){
    var image = this.dataset.image;
    document.getElementById('product-image').src = image;
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    document.querySelector('#silver .color').classList.add('selected');

}

document.getElementById('golden').onclick = function(){
    var image = this.dataset.image;
    document.getElementById('product-image').src = image;
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    document.querySelector('#golden .color').classList.add('selected');
}

document.getElementById('grafite').onclick = function(){
    var image = this.dataset.image;
    document.getElementById('product-image').src = image;
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    document.querySelector('#grafite .color').classList.add('selected');
}  

document.getElementById('blue').onclick = function(){
    var image = this.dataset.image;
    document.getElementById('product-image').src = image;
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    document.querySelector('#blue .color').classList.add('selected');
}
