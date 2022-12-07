let showingAlert = false;
const title = '心痛的一班 小吃介紹';
const messages = '心痛的一班 小吃介紹🍟';

const change = setInterval(() => {
    document.title =
        showingAlert ? title : messages;
        showingAlert = !showingAlert;
}, 1000);

var imgs = [
    "薯條.jpg",
    "雞塊jpg.jpg"
];

var texts = [
    "薯條",
    "雞塊"
]

var introduction = [
    "中華民國國產馬鈴薯 梅子/胡椒",
    "高級冷凍包裝雞塊"
]

var process = [
    "把切成條狀的馬鈴薯放進氣炸鍋炸大概15分鐘左右,再撒上梅子粉或胡椒粉即可享用",
    "用鍋子把雞塊炸熟就能食用"
]

var feature = [
    "酥脆可口",
    "鮮嫩多汁"
]

var money = [
    "一份30元",
    "6塊30元",
]


var num=0;
var sum = 0;

function next(){
    var img = document.getElementById('imgs');
        num++;
        sum++;
        if(num >= imgs.length) {
            num = 0;
            if(sum >= texts.length){
                sum = 0;
            }
        }
        img.src = imgs[num];
        document.getElementById('h02').innerHTML= texts[sum];
        document.getElementById('h03').innerHTML= introduction[sum];
        document.getElementById('h04').innerHTML= process[sum];
        document.getElementById('h05').innerHTML= feature[sum];
        document.getElementById('h06').innerHTML= money[sum];
}

function previous(){
    var img = document.getElementById('imgs');
        num--;
        sum--;
        if(num < 0) {
            num = imgs.length-1;
            if(sum < texts.length){
                sum = texts.length-1;
            }
        }
        img.src = imgs[num];
        document.getElementById('h02').innerHTML= texts[sum];
        document.getElementById('h03').innerHTML= introduction[sum];
        document.getElementById('h04').innerHTML= process[sum];
        document.getElementById('h05').innerHTML= feature[sum];
        document.getElementById('h06').innerHTML= money[sum];
}

setTimeout(function(){alert("若您想購買以上介紹的這幾種小吃的話,可以回首頁點選Location下的Read More查看201班的位置")},10000);