
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);


let kaisu = 0;


let b = document.querySelector('button#kaitou');
b.addEventListener('click', hantei);


function hantei() {
  
  let p = document.querySelector('span#answer');
  let p2 = document.querySelector('p#result');
  let p3 = document.querySelector('span#kaisu')
  let i = document.querySelector('input[name=seisuu]');
  let inum = Number(i.value);
  let yoso = inum;
  
  kaisu += 1;
  p3.textContent = kaisu + "回目の予想:" + yoso;
  if( kaisu > 3){
    p2.textContent = "答えは " + kotae +  " でした．すでにゲームは終わっています";
  } else if (yoso === kotae){
    p2.textContent = "正解です．おめでとう!";
    kaisu = 4;
  }

  

  if(yoso !== kotae ){
    if(kaisu === 3){
      p2.textContent = "まちがい．残念でした答えは" + kotae + "です";
    } else if (kaisu <= 2 && yoso < kotae){
      p2.textContent = "まちがい．答えはもっと大きいですよ";
    } else if (kaisu <= 2 && yoso > kotae){
      p2.textContent = "まちがい．答えはもっと小さいですよ";
    }
  }


  
}