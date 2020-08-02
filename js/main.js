let displayField = document.getElementById('display');


function play(str) {
    let audio = document.getElementById(str);
    let soundName = audio.getAttribute('name');
    displayField.innerHTML = soundName;
    audio.play();
}

$(document).keydown(function (e) {
    switch (e.keyCode) {
        case 81:
            play("Q");
            break;
        case 87:
            play("W");
            break;
        case 69:
            play("E");
            break;
        case 65:
            play("A");
            break;
        case 83:
            play("S");
            break;
        case 68:
            play("D");
            break;
        case 90:
            play("Z");
            break;
        case 88:
            play("X");
            break;
        case 67:
            play("C");
            break;
    }
});

