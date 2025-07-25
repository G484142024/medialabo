function print(data) {
  console.log("都市名: " + data.name);
  console.log("経度: " + data.coord.lon);
  console.log("緯度: " + data.coord.lat);
  console.log("最低気温: " + data.main.temp_min + "°C");
  console.log("最高気温: " + data.main.temp_max + "°C");
  console.log("湿度: " + data.main.humidity + "%");
  console.log("天気: " + data.weather[0].description);
  console.log("風速: " + data.wind.speed + " m/s");
  console.log("風向: " + data.wind.deg + "°");

  //let id = document.querySelector('input[name="kensaku"]');
  //console.log('市名ID：' + id.value );
}

 
// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let div = document.querySelector('div#result');
  div.innerHTML = '';
  let h2 = document.createElement('h2');
  h2.textContent = data.name;
  div.insertAdjacentElement('beforeend', h2 );

  let p = document.createElement('p');
  p.textContent = '今日は' + data.weather[0].description + 'ですよ！';
  div.insertAdjacentElement('beforeend', p);


  let table = document.createElement('table');
  table.setAttribute('border', '1');

  
  let trHead = document.createElement('tr');
  let heads = ['経度', '緯度', '最低気温', '最高気温', '湿度', '風速', '風向'];
  for(let text of heads) {
    let th = document.createElement('th');
    th.textContent = text;
    trHead.insertAdjacentElement('beforeend', th);
  };
  table.insertAdjacentElement('beforeend', trHead);

  
  let trData = document.createElement('tr');
  let vals = [
    data.coord.lon,
    data.coord.lat,
    data.main.temp_min,
    data.main.temp_max,
    data.main.humidity,
    data.wind.speed,
    data.wind.deg
  ];
  for(let val of vals) {
    let td = document.createElement('td');
    td.textContent = val;
    trData.insertAdjacentElement('beforeend', td);
  };
  table.insertAdjacentElement('beforeend', trData);

  div.insertAdjacentElement('beforeend', table);

}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('button#find');
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  
    // URL を設定
    let cityid = document.querySelector('input[name="kensaku"]');
    let idd = cityid.value
    console.log(idd);
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+idd+'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    //print(data);
    printDom(data);
}



// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

 
 

