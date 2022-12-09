 let infoProductos = [
    { producto: 'Celular', precio: 350000 },
    { producto: 'Libreta', precio: 20000 },
    { producto: 'Portatil', precio: 1200000 },
    { producto: 'Tasa',     precio: 18000 },
    { producto: 'Hojas de Papel', precio: 4000 },
    { producto: 'Cuaderno', precio: 5000 },
    { producto: 'Mesa de Escritorio', precio: 250000 },
    { producto: 'Retrato', precio: 20000 },
    { producto: 'Marcadores', precio: 25000 }
 ];



$(document).ready(() => {
    for (let i = 1; i < 10; i++) {
        $('#productos').append(`<figure class="retrato" id="retrato${i}"> <img id="image${i}" loading="lazy" width="380" height="450" src="../img/${i}.jpg"> <h2 id="title${i}" class="title-img">${infoProductos[i - 1].producto}</h2>
        <p id="precio${i}" class="precio-img">$${infoProductos[i - 1].precio}</p> </figure>`); 

        $(`#retrato${i}` ).bind('mouseover mouseout', () => {    
            setTimeout(() =>  {
                $(`#image${i}`).toggleClass('img-style');
                $(`#title${i}`).toggleClass('title-view'); 
                $(`#precio${i}`).toggleClass('title-view');
            }, 100);           
                                      
        });             
    }    
   
 
});




