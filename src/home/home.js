var photo = document.querySelector(".photo");
var buttons = document.querySelector(".buttons").getElementsByTagName("span"); //此为一个数组
var container = document.querySelector(".container");
var timer;
var index = 1;

// 分界线
// 以下是轮播图层的JS效果
// 切换图片的方法： 点击左右的箭头 切换图片 往左或往右点击到最后一张图时，需要出现最开始的那一副图，实现循环
function arrow(value){
    var coordinate = parseInt (photo.style.left);
    var judg = coordinate + value ;
    var newcoordinate = "";
    var time = 100; //位移总时间
    var interval = 10 ; // 每次位移时间间隔
    var speed = value / ( time / interval); //每次移动的距离

    // 此函数设置动画函数
    function animation(){
        // 如果speed是负数，则当之前的值大于新的位置的值，就继续执行函数.反之亦然
        if((speed < 0 && parseInt (photo.style.left) > judg) || (speed > 0 && parseInt (photo.style.left) < judg)){
            photo.style.left = parseInt (photo.style.left) + speed + "%";
            setTimeout (animation, interval); //间隔interval时间就执行一次动画, z直到执行完成再开始
        }else{
            // 当执行多次animation 函数后，导致newcoordinate达到需要的那个移动值，就不再执行前面的if，而是判断图片的位置，进行无限的循环
            // 以下是功能：如果一直按左箭头或者右箭头，当滑动到最后一张图时，需要紧接着显示第一张图
            if(coordinate < -300 ){
                coordinate = -100;
            }else if(coordinate > -100 ){
                coordinate = -300 ;
            }else{
                coordinate = coordinate;
            }
            newcoordinate = coordinate + value + "%"
            photo.style.left = newcoordinate;
        }
    }
     // 没有执行else时都需要继续的进行animation,以便移动的总值达到我们需要移动的100%
     animation();
}

// 切换点亮的小方点的方法
function change(){
    document.querySelector(".show").classList.remove("show");
    buttons[index-1].classList.add("show");
}


//点击左箭头的动画： 左箭头图片左移，每次位置移动100%
document.querySelector(".arrow-left").onclick = function (){
    arrow(100);
    if(index == 1){
        index = 3;
    }else{
        index -= 1;
    }
    change();
    fade();
}

//点击右箭头的动画： 右箭头图片右移，每次位置移动-100%
document.querySelector(".arrow-right").onclick = function (){
    arrow(-100);
    if(index == 3){
        index = 1;
    }else{
        index += 1;
    }
    change();
    fade();
}

// 点击下方的小方点的动画和样式
document.querySelector(".buttons").onclick = function (event){
    var target = event.target || event.srcElement;
    switch(target.id){
        case "one" :
        photo.style.left = "-100%";
        document.querySelector(".show").classList.remove("show");
        document.querySelector("#one").classList.add("show");
        fade();
        break;

        case "two" :
        photo.style.left = "-200%";
        document.querySelector(".show").classList.remove("show");
        document.querySelector("#two").classList.add("show");
        fade();
        break;

        case "three":
        photo.style.left = "-300%";
        document.querySelector(".show").classList.remove("show");
        document.querySelector("#three").classList.add("show");
        fade();
        break;
    }
}

// 自动播放轮播图,相当于定时点击右边方向头
function play(){
    timer = setInterval(function(){
        //图片的循环播放
        arrow(-100);
        // 小方点的循环播放
        if(index == 3){
            index = 1;
        }else{
            index += 1;
        }
        change();
    },4000);
    
}

// 默认开始就是正在执行轮播
play();

// 自动播放停止
function stop(){
    clearInterval(timer);
}

//鼠标移入就停止，移除就正常轮播，注意去掉stop不要括号
container.onmouseover = stop;
container.onmouseout = play;

// 每次点击轮播图时，HUAYU这几个字都淡入
function fade(){
    document.querySelector(".fade-in").classList.add("hide");
    document.querySelector(".fade-in").classList.remove("fadeIn");
    setTimeout(function(){
        document.querySelector(".fade-in").classList.remove("hide");
        document.querySelector(".fade-in").classList.add("fadeIn");
    },1000);
}


// 分界线
// 以下是商品展示的JS效果
// window.addEventListener("scroll" ,function (e){
// console.log(document.querySelector(".second-left").scrollTop);

// console.log(window.innerHeight);
//     if(document.querySelector(".second-left").scrollTop=window.innerHeight){
//         // debugger
//         document.querySelector(".second-left").classList.add("fadeInLeft");
//         document.querySelector(".second-right").classList.add("fadeInRight");
//     }
// });


// 分界线
// 今日上新
// function bigge(){

// }


// 分界线
// 限时促销
function date(){
    // 以下是实时显示当前的时间
    var date = new Date();
    var Hour = date.getHours();
    var Minute = date.getMinutes();
    var Second = date.getSeconds();
    var classHour = document.querySelectorAll(".hour");
    var classMinute = document.querySelectorAll(".minute");
    var classSecond = document.querySelectorAll(".sec");
    // 以下是显示今天是今年的第几天
    var dateArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var result = 0;
    var Month = date.getMonth();
    var day = date.getDate();
    var classDay = document.querySelectorAll(".day");
    var year = date.getFullYear(); 

    for(var i = 0 ;i< Month; i++){
        result += dateArr[i];
    }
    result += day;

    // 以下需要判断是不是闰年
    if (Month > 1 && (year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {  
        result += 1;  
    }

    // 以下是把天数及当前的时间写入HTML中
    for(var a = 0 ;a<classHour.length; a++){
        classHour[a].innerText = Hour;
        classMinute[a].innerText = Minute;
        classSecond[a].innerText = Second;
        classDay[a].innerText = result;
    }

    console.log(date);
}
date();

// 分界线
// 动画效果
var wowOne = new WOW({
    boxClass: 'wowOne',
    animateClass: 'animated fadeInLeft',
    offset: 0,
    mobile: true,
    live: true
});

var wowTwo = new WOW({
    boxClass: 'wowTwo',
    animateClass: 'animated fadeInRight',
    offset: 0,
    mobile: true,
    live: true
});

var wowSlideInUp = new WOW({
    boxClass: 'wowSlideInUp',
    animateClass: 'animated slideInUp',
    offset: 0,
    mobile: true,
    live: true
});

wowOne.init();
wowTwo.init();
wowSlideInUp.init();


// 点击屏幕的左侧箭头,可以让让界面滚动到最初的开始位置
document.querySelector(".scroll-top").onclick=function(){
    // 以下是瞬间滚动到初始位置
    // window.scrollTo(0,0);
    window.scrollTo({
        top:0,
        left:0,
        behavior: "instant"
    });
}