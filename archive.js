fetch('apartment.json')
.then(response => response.json())
.then(data => {

const jewelry = document.getElementById('jewelry');

    const buttonReset = document.getElementById('all');
    const buttonLiving = document.getElementById('living');
    const buttonAmp = document.getElementById('amps');
    const buttonChacha = document.getElementById('chas');
    const buttonKarina = document.getElementById('karis');
    const buttonNop = document.getElementById('nops');

data.forEach(item => {
    const div = document.createElement('div');
    const title = document.createElement('h5');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const img = document.createElement('img');

    title.textContent = item.ObjectNumber;
    p.textContent = item.Title;
    p2.textContent = item.Brand;
    p3.textContent = item.Owner;
    p4.textContent = item.Location;
    p5.textContent = item.When;
    img.src = "./assets/" + item.Image;

    buttonReset.addEventListener('click', function(){
        div.style.display = "block";
    });

    buttonLiving.addEventListener('click', function(){
        if (item.LivingType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonAmp.addEventListener('click', function(){
        if (item.AbedroomType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonChacha.addEventListener('click', function(){
        if (item.CbedroomType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonKarina.addEventListener('click', function(){
        if (item.KbedroomType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonNop.addEventListener('click', function(){
        if (item.NbedroomType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
    
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    jewelry.appendChild(div);
    });

})
.catch(error => console.error(error));