var imgs = [
    "梅子雪碧.jpg",
    "紅茶.jpg",
    "綠茶.jpg",
    "猛男流淚.jpg"
];

var texts = [
    "梅子雪碧/可樂",
    "紅茶",
    "綠茶",
    "傷心的淚水"
]

var introduction = [
    "可樂/汽水 梅子",
    "天然礦泉水 紅茶茶葉",
    "天然礦泉水 綠茶茶葉",
    "天然礦泉水"
]

var process = [
    "把可樂/汽水打開並倒入容器中,最後再加上酸甜的梅子作為點綴",
    "把紅茶茶葉泡在天然礦泉水大約40秒左右即可享用",
    "把綠茶茶葉泡在天然礦泉水大約40秒左右即可享用",
    "天然礦泉水當然是純原味最好喝啦"
]

var feature = [
    "清涼又解渴",
    "甘甜可口",
    "滋味鮮爽",
    "可以當水喝"
]

var money = [
    "30元",
    "40元",
    "40元",
    "40元"
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

setTimeout(function(){alert("若您想購買以上介紹的這幾種飲料的話,可以回首頁點選Location下的Read More查看201班的位置")},10000);