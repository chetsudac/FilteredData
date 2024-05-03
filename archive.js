fetch('data.json')
.then(response => response.json())
.then(data => {

const eateat = document.getElementById('goodfood');

    const buttonReset = document.getElementById('all');
    const buttonHC = document.getElementById('HC');
    const buttonTH = document.getElementById('TH');
    const buttonJP = document.getElementById('JP');
    const buttonCH = document.getElementById('CH');
    const buttonDS = document.getElementById('DS');

data.forEach(item => {
    const div = document.createElement('div');
    const title = document.createElement('h5');
    const p = document.createElement('p');
    const img = document.createElement('img');

    title.textContent = item.Date;
    p.textContent = item.Location;
    img.src = "./assets/" + item.img;

    buttonReset.addEventListener('click', function(){
        div.style.display = "block";
    });

    buttonHC.addEventListener('click', function(){
        if (item.HomeCookType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonTH.addEventListener('click', function(){
        if (item.ThaiType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonJP.addEventListener('click', function(){
        if (item.JapaneseType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonCH.addEventListener('click', function(){
        if (item.ChineseType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonDS.addEventListener('click', function(){
        if (item.DessertsType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
    
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(p);
    eateat.appendChild(div);
    div.className = "foodpics";
    });
    

})
.catch(error => console.error(error));