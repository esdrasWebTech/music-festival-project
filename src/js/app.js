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
        image.onclick = function(){
            showModal(i);
        };

        gallery.appendChild(image);
    };
};

// generating modal
function showModal(i){
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.onclick = modalRemove;

    //generatig modal inner container
    const modalInner = document.createElement('div');
    modalInner.classList.add('modal-inner');

    //generating image view
    const image = document.createElement('img');
    image.src = `../img/grande/${i}.jpg`;
    image.alt = `Imagen galeria ${i}`;

    //generating modal close btn
    const modalCloseBtn = document.createElement('button');
    modalCloseBtn.classList.add('modal-close-btn');
    modalCloseBtn.textContent = 'X';
    modalCloseBtn.onclick = modalRemove;

    //add modal in HTML
    const bodyPage = document.querySelector('body');
    bodyPage.classList.add('overflow-hidden');
    modalInner.appendChild(modalCloseBtn);
    modalInner.appendChild(image);
    modal.appendChild(modalInner);
    bodyPage.appendChild(modal);
};

//Close modal 
function modalRemove (){
    
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    
    setTimeout(() => {
        const bodyPage = document.querySelector('body');
        bodyPage.classList.remove('overflow-hidden');

        modal?.remove();
    }, 300)

};
