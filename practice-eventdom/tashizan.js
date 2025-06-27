function add() {
    let a = document.querySelector('input[name=left]');
    let b = document.querySelector('input[name=right]');
  
    an = Number(a.value);
    bn = Number(b.value);

    let p = document.querySelector('span#answer');
    p.textContent = an + bn;
}

let b = document.querySelector('button#calc');
b.addEventListener('click', add);