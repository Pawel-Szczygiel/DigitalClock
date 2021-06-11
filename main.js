

setInterval( () => {

    let hours = document.querySelector('#hour');
    let minutes = document.querySelector('#minutes');
    let secundes = document.querySelector('#secundes');

    let day = new Date();
    
    hours.innerHTML = day.getHours();
    minutes.innerHTML = day.getMinutes();
    secundes.innerHTML = day.getSeconds();

});
 

