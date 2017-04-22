function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicked');
}

function btnClick(e) {
    var key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!key) return;

    key.classList.add('clicked');

}

var keys = Array.from(document.querySelectorAll('button'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', btnClick);