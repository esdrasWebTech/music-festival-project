document.addEventListener('DOMContentLoaded', function(){
    createGalerie();
});

function createGalerie(){

    const QTY_IMG_GALLERY = 12;
    const gallery = document.querySelector('div.galeria-imagenes');

    for( let i = 1; i <= QTY_IMG_GALLERY; i++ ){
        const image = document.createElement('img');
        image.src = `../img/grande/${i}.jpg`;
        image.alt = `Imagen galeria ${i}`;
        console.log(image);

        gallery.appendChild(image);
    };
};