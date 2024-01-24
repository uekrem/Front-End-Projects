function toggleDarkMode() {
    let body = document.body;
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
    
}

function enableDarkMode() {
    let body = document.body;
    let myButton = document.querySelector('.myButton');

    body.classList.add('dark-mode');
    myButton.classList.add('b-lg-image');
    myButton.classList.remove('b-drk-image');
}

function disableDarkMode() {
    let body = document.body;
    let myButton = document.querySelector('.myButton');

    body.classList.remove('dark-mode');
    myButton.classList.add('b-drk-image');
    myButton.classList.remove('b-lg-image');
}