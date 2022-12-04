let showingAlert = false;
const title = '心痛的一班💓';
const messages = '心痛的一班💔';

const change = setInterval(() => {
    document.title =
        showingAlert ? title : messages;
        showingAlert = !showingAlert;
}, 1800);

setInterval(() => {
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');


let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM";

// h超過12就給他歸零
if (h > 12){
    h -= 12;
}

// 時間若是一位數的話前面要給他加零
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hours.innerHTML = h + "<br><span>Hours</span>";
minutes.innerHTML = m + "<br><span>minutes</span>";
seconds.innerHTML = s + "<br><span>seconds</span>";
ampm.innerHTML = am;

hh.style.strokeDashoffset = 440 - (440 * h) / 12; // 12小時制
mm.style.strokeDashoffset = 440 - (440 * m) / 60; // 60分鐘制
ss.style.strokeDashoffset = 440 - (440 * s) / 60; // 60秒鐘制

hr_dot.style.transform = `rotate(${h * 30}deg)`; // 360 / 12 = 30 簡單數學
min_dot.style.transform = `rotate(${m * 6}deg)`; // 360 / 60 = 6 簡單數學
sec_dot.style.transform = `rotate(${s * 6}deg)`; // 360 / 60 = 6 簡單數學

})

setTimeout(function(){alert("Hellow! 歡迎來到心痛的一班網站!")},4000);
setTimeout(function(){alert("我們會2022/12/10開始營業,可以點選Location下的Read More查看201班的位置")},4100);