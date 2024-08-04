function createDiv() {
    const div = document.createElement('div');
    div.id = 'div-1';
    div.className = 'newdiv';
    div.appendChild(document.createTextNode('hello bcho'));
    document.body.appendChild(div);
}

function CreateLi() {
    const li = document.createElement('li');
    li.id = 'li';
    li.className = 'newLi';
    li.appendChild(document.createTextNode('li'));

}