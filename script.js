fetch('data.json')
.then(response => response.json())
.then(data => {

const lyrics = document.getElementById('lyrics');

    const buttonReset = document.getElementById('all');
    const buttonLife = document.getElementById('LIFE');
    const buttonSad = document.getElementById('SAD');
    const buttonInLove = document.getElementById('INLOVE');
    const buttonEng = document.getElementById('ENG');
    const buttonTh = document.getElementById('TH');
    const buttonKr = document.getElementById('KR');

data.forEach(item => {
    const div = document.createElement('div');
    const title = document.createElement('h1');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');

    title.textContent = item.Lyrics;
    p.textContent = item.Album;
    p2.textContent = item.Title;
    p3.textContent = item.Artist;
    p4.textContent = item.Released;
    p5.textContent = item.Link;



    buttonReset.addEventListener('click', function(){
        div.style.display = "block";
    });

    buttonLife.addEventListener('click', function(){
        if (item.LifeType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }

    });

    buttonSad.addEventListener('click', function(){
        if (item.SadType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });


    buttonInLove.addEventListener('click', function(){
        if (item.InloveType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonEng.addEventListener('click', function(){
        if (item.EngType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonTh.addEventListener('click', function(){
        if (item.ThaiType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    buttonKr.addEventListener('click', function(){
        if (item.KrType == 1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });

    
    
    div.appendChild(title);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    
    lyrics.appendChild(div);
    });

})

.catch(error => console.error(error));

