const accordion = document.getElementsByClassName("container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
//网页操作
function web1() {
  window.location.href = "https://www.yjrb.com.cn/";
}
function web2() {
  window.location.href = "https://yjdaily.yjrb.com.cn/";
}
