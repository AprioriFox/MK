const python = document.getElementById('py')
const javas = document.getElementById('js')
const resetBtn = document.getElementById('reset')

function pythonBG() {
    document.body.style.backgroundImage = 'url(https://cdn.kualo.com/blogassets/wp-content/uploads/2018/09/pythonbg.jpg)';
    document.body.style.backgroundSize = 'cover'
}
function js() {
    document.body.style.backgroundImage = 'url(https://image.freepik.com/free-photo/javascript-programming-code-abstract-technology-background_272306-155.jpg)';
    document.body.style.backgroundSize = 'cover'
}
function resetB() {
    document.body.style.backgroundImage = 'url(https://previews.123rf.com/images/whatawin/whatawin1902/whatawin190200007/119588046-green-binary-code-bg-coding-or-hacking-concept-.jpg)'
    document.body.style.backgroundSize = 'cover'
}
python.addEventListener('click', pythonBG)
javas.addEventListener('click', js)
resetBtn.addEventListener('click', resetB)
