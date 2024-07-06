//实时读取时间
let bu0;
function showTime() {
  let daay = new Date();
  let ye = daay.getFullYear();
  let mon = daay.getMonth() + 1;
  let dai = daay.getDate();
  let our = daay.getHours();
  let min = daay.getMinutes();
  let key = document.getElementById("time");
  key.innerHTML = ye + "/" + mon + "/" + dai;
  let key2 = document.getElementById("time2");
  key2.innerHTML = our + bu0 + min;

  if (min < 10) {
    bu0 = ":0";
  } else {
    bu0 = ":";
  }
}
setInterval("showTime()", 500);
//保存
let youShi = false;
let miYao = true;

function change() {
  let anNiu = document.getElementById("anNiu");
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
