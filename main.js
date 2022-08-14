let $debug = window.localStorage.getItem('Debug');

window.addEventListener('load', (event) => {
    //console.log('page is fully loaded');
    //setInterval(UpdateCanvas,100);
});

function debug($dbg) {
    if ($debug) {
        console.log("DEBUG " + $dbg);

    }
}

function setDebug() {
    $di = document.getElementById('debugToggle');
    $debug = $di.checked;
    window.localStorage.setItem('Debug', $debug);
    
    debug("Setting debug to " +$debug);
}

function setAnimationType() {

    $ai = document.getElementById('aniTypeInput');
    window.localStorage.setItem('Animation Type', $ai.value);

    debug("update animation type " + $ai.value);
}

function setColor() {
    $ci = document.getElementById('colorInput');
    window.localStorage.setItem('Color', $ci.value);

    debug("update color " + $ci.value);
}

function setLabelText() {

    debug("Reading text input field");

    $ti = document.getElementById('textInput');
    window.localStorage.setItem('Text Input', $ti.value);
}

function resetLocalStorage() {
    debug('Resetting local storage');

    window.localStorage.clear();
    $ti = document.getElementById('textInput');
    $ti.value = "";
}

function Setup() {

}
function SetupLabel() {
    // Setup html div label
    debug("Setting up label");

    $tl = document.getElementById('textLabel');
    $label = window.localStorage.getItem('Text Input');
    $tl.style.color = window.localStorage.getItem('Color');
    $aniType = window.localStorage.getItem('Animation Type');
    $tl.className = "animate__animated animate__" + $aniType + " animate__infinite center";
    //$tl.classList.add("center");
    $tl.innerHTML = "<h1>"+$label+"</h1>";

}
