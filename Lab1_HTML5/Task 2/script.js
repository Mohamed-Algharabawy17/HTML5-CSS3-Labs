let redRange = document.getElementById('redRange');
let greenRange = document.getElementById('greenRange');
let blueRange = document.getElementById('blueRange');
let colorDisplay = document.getElementById('colorDisplay');

function updateColor() 
{
    let red = redRange.value;
    let green = greenRange.value;
    let blue = blueRange.value;
    let color = `rgb(${red}, ${green}, ${blue})`;
    colorDisplay.style.color = color;
    colorDisplay.textContent = color;
}

redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);


updateColor();
