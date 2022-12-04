var imgs = [
    "薯條.jpg",
    "地瓜球.jpg"
];

var texts = [
    "薯條",
    "地瓜球"
]

var introduction = [
    "中華民國國產馬鈴薯 梅子/胡椒",
    "木薯粉 細砂糖 地瓜"
]

var process = [
    "把切成條狀的馬鈴薯放進氣炸鍋炸大概15分鐘左右,再撒上梅子粉或胡椒粉即可享用",
    "將地瓜切片拿去蒸熟,之後加入木薯粉跟砂糖,在搓成圓球拿去炸"
]

var feature = [
    "酥脆可口",
    "Q彈帶勁"
]

var money = [
    "30元",
    "30元",
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