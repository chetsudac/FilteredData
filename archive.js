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

var button = document.getElementById("changeBGColorButton");
var originalColor = document.body.style.backgroundColor; // Store the original body color
var originalTextColors = {}; // Store original text colors
var isBlack = false; // Variable to track the current color state

// Function to store original text colors
function storeOriginalTextColors() {
    var textElements = document.querySelectorAll("body *"); // Get all elements within the body
    textElements.forEach(function(element) {
        originalTextColors[element.tagName] = window.getComputedStyle(element).color; // Store computed color
    });
}

// Function to change text colors
function changeTextColors(color) {
    var textElements = document.querySelectorAll("body *"); // Get all elements within the body
    textElements.forEach(function(element) {
        element.style.color = color; // Change text color
    });
}

// Store original text colors when the page loads
storeOriginalTextColors();

button.addEventListener("click", function() {
    // Toggle between two colors
    if (!isBlack) {
        document.body.style.backgroundColor = "black";
        button.style.backgroundColor = "red"; // Change button color
        button.style.color = "whitesmoke"; // Change button text color
        changeTextColors("whitesmoke"); // Change text colors to white
        isBlack = true;
    } else {
        document.body.style.backgroundColor = originalColor;
        button.style.backgroundColor = ""; // Reset button color
        button.style.color = ""; // Reset button text color
        changeTextColors(""); // Reset text colors to original
        isBlack = false;
    }
});
