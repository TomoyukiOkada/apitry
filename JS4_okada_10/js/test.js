//CodePenプロジェクトのURLを配列へ
var urls = [
  "https://codepen.io/5t3ph/pen/jOPQPzx",
  "https://codepen.io/5t3ph/pen/jOPQPzx",
  "https://codepen.io/aaroniker/pen/eYdOYvj",
  "https://codepen.io/aaroniker/pen/eYdOYvj",
  "https://codepen.io/aaroniker/pen/ZEpEvdz",
  "https://codepen.io/aaroniker/pen/ZEpEvdz",
  "https://codepen.io/ainalem/pen/OJRLRPO",
  "https://codepen.io/ainalem/pen/OJRLRPO",
  "https://codepen.io/creativeocean/pen/oNzjEYj",
  "https://codepen.io/creativeocean/pen/oNzjEYj",
  "https://codepen.io/HunorMarton/pen/VwKwgxX",
  "https://codepen.io/HunorMarton/pen/VwKwgxX",
  "https://codepen.io/jh3y/pen/MWjyoLY",
  "https://codepen.io/jh3y/pen/MWjyoLY",
  "https://codepen.io/johnnyfekete/pen/eYdNvVL",
  "https://codepen.io/johnnyfekete/pen/eYdNvVL",
  "https://codepen.io/ma_suwa/pen/eYdZVML",
  "https://codepen.io/ma_suwa/pen/eYdZVML",
  "https://codepen.io/miocene/pen/NWRWQpX",
  "https://codepen.io/miocene/pen/NWRWQpX",
  "https://codepen.io/natewiley/pen/Ciwyn",
  "https://codepen.io/natewiley/pen/HBrbL",
  "https://codepen.io/oliviale/pen/QWKNvex",
  "https://codepen.io/oliviale/pen/QWKNvex",
  "https://codepen.io/shubniggurath/pen/eYzqyLZ",
  "https://codepen.io/shubniggurath/pen/eYzqyLZ",
  "https://codepen.io/teropa/pen/JLjXGK",
  "https://codepen.io/teropa/pen/PKoYXM"
]
var script = document.createElement('script');
var rnd = Math.floor(Math.random() * urls.length);
var div = document.getElementById('stage');
var info = document.getElementById('info');


script.src = "https://codepen.io/api/oembed/?url=" + urls[rnd] + "&format=js&callback=jsonData";
document.body.appendChild(script);
document.body.removeChild(script);



function jsonData(data) {
  

  div.innerHTML = data.html;
  

  info.innerHTML = "作者：" + "<a href='" + data.author_url + "' target='_blank'>" + data.author_name + "</a>" +
    "　タイトル：" + data.title + "　バージョン：" + data.version;
}


