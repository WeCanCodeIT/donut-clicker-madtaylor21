const totalElement = document.getElementById('total');
let autoClicker = document.getElementById('autoClickBtn');
let clicks = 0
function donutClick(){
    clicks += 1;
    totalElement.innerHTML = clicks
}
let autoClickCount = 0;
let autoClickPrice = 10;
function purchaseAutoClick(){
    if (clicks >= autoClickPrice) {
        clicks -= autoClickPrice;
        autoClickPrice = Math.round(autoClickPrice * 1.2);
        autoClickCount ++;
        totalElement.innerHTML = clicks
        setInterval();
    }
}
setInterval(() => {
    clicks += autoClickCount;
    totalElement.innerHTML = clicks
}, 1000);
