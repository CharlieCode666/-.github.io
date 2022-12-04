let showingAlert = false;
const title = '心痛的一班 位置介紹';
const messages = '心痛的一班 位置介紹🏫';

const change = setInterval(() => {
    document.title =
        showingAlert ? title : messages;
        showingAlert = !showingAlert;
}, 1000);

setTimeout(function(){alert("請分享這個連結讓更多人知道201班的位置,謝謝您!")},2000);