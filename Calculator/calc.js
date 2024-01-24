
let screen = document.getElementById('screen');

function    numCalc()
{
    try {
        let sonuc = eval(screen.innerText);
        screen.textContent = sonuc;
    }catch (error) {
       screen.textContent = "ERR";
    }
    screen.scrollLeft = 0;
}

function    deleteCharacter(){
    
    if (screen.textContent === "ERR" || screen.textContent === "Infinity")
        screen.textContent = "0"
    contentMsg = screen.innerText;
    screen.innerText = contentMsg.slice(0, -1);
    if (screen.innerText === "")
        screen.textContent = "0";
    screen.scrollLeft = 0;
}

function    screenPrinting(value)
{
    if (value === "AC" || screen.textContent === "ERR" 
        || screen.textContent === "Infinity")
        screen.textContent = "0";
    else
        (screen.textContent == "0") ?  screen.textContent = value 
                                            : screen.textContent += value;
    screen.scrollLeft = screen.scrollWidth - screen.clientWidth;
}