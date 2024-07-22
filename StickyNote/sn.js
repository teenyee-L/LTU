//实时读取时间
let maoHao;
function showTime() {
  let datatime = new Date();
  let ye = datatime.getFullYear();
  let mon = datatime.getMonth() + 1;
  let day = datatime.getDate();
  let hour = datatime.getHours();
  let min = datatime.getMinutes();
  let key1 = document.getElementById("date");
  key1.innerHTML = ye + "/" + mon + "/" + day;
  let key2 = document.getElementById("time");
  key2.innerHTML = hour + maoHao + min;

  if (min < 10) {
    maoHao = ":0";
  } else {
    maoHao = ":";
  }
}
setInterval("showTime()", 500);
//保存
let youShi = false;
let miYao = true;

function change() {
  let anNiu = document.getElementById("button1");
  let shuRuKuang = document.getElementById("shuRuKuang");
  if (youShi) {
    youShi = false;
    miYao = true;
    anNiu.innerText = "保存";
    shuRuKuang.style.borderColor = "#fff";
    smile.style.color = "transparent"; //
    //shuRuKuang.value = "";
    shuRuKuang.readOnly = false;
    //新加这一行为可以移除数据
    window.localStorage.removeItem("shi", shuRuKuang.value);
    //anNiu2.disabled = false;
  } else {
    youShi = true;
    miYao = false;
    anNiu.innerText = "修改";
    shuRuKuang.style.borderColor = "transparent";
    smile.style.color = "#fff"; //
    shuRuKuang.readOnly = true;
    //这一行为保存数据
    window.localStorage.setItem("shi", shuRuKuang.value);
    //anNiu2.disabled = true;
  }
}

//这一行函数用于保存和查询数据
let data = window.localStorage.getItem("shi");
if (data) {
  document.getElementById("shuRuKuang").value = data;
  change();
}
//做一个清除功能;
function clean() {
  let shuRuKuang = document.getElementById("shuRuKuang");
  if (miYao) {
    shuRuKuang.value = "";
  }
}
