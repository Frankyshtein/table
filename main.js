function addNewLine() {
    let newLine = document.createElement('tr');
    newLine.innerHTML = '<td><input type="text" class="form-control"><td><input type="text" class="form-control" onkeyup="setTotal()"></td><td><input type="text" class="form-control" onkeyup="setTotal()"></td><td><input type="text" class="form-control"></td><td class="text-center"><button class="btn" onclick="deleteLine()">X</button></td>'
    document.querySelector('table tbody').appendChild(newLine);
}
function deleteLine() {
    event.target.parentElement.parentElement.remove();
    setSum();
}
function setTotal() {
    let result;
    let list = event.target.parentElement.parentElement;
    result = +list.children[1].children[0].value * + list.children[2].children[0].value;
    if(!result){
        list.children[3].children[0].value = '';
    } else {
        list.children[3].children[0].value = result;
    }
    setSum();
}
function setSum() {
    let sum = 0;
    let list = document.querySelectorAll('tbody tr');
    for(let i=0; i < list.length; i++){
        sum += +list[i].children[3].children[0].value;
    }
    if(!sum){
        document.querySelector('p span').innerText = '';
    } else {
        document.querySelector('p span').innerText = sum;
    }
}