//导航栏的下拉
var dropdown = document.getElementById("dropdown");
var dropdownLi = dropdown.getElementsByTagName("li");
//循环遍历
for (var i = 0; i < dropdownLi.length; i++) {
    //因为1的时候没有效果所以我们要弹出一下
    if (i == 1) {
        continue;
    }
    dropdownLi[i].onmouseover = function () {
        this.classList.add("show");
    }
    dropdownLi[i].onmouseout = function () {
        this.classList.remove("show");
    }
}
//全部分类侧边栏显示隐藏
var dropright = document.getElementById("dropright");

let uname = localStorage.getItem('uname')
let unameshopping = JSON.parse(localStorage.getItem(`${uname}shopping`))
let str = '<h2>我的订单</h2>'
for (let i = 0; i < unameshopping.length; i++) {
    
        str += `<div class="evaluate-detail">
    <div class="evaluate-top" >
        <img src="./images/吃饭.png" alt="">
        <h4>${unameshopping[i].name}</h4>
        <span>已完成</span>
    </div>
    <div class="evaluate-middle">
        <img src=${unameshopping[i].imgurl} alt="">
        <p>下单时间：<span>${unameshopping[i].nowtime}</span></p>
        <p>总价:￥${unameshopping[i].price1}</p>
        <p style='color: orange;'>评价有礼！评价晒图可获得抵现福利</p>
    </div>
    <div class="evaluate-footer">
        <a class="fr" href="javascript:;" data-stars=${i}>立即评价</a>
    </div>
</div>`
    
}
document.querySelector('.evaluate-content').innerHTML = str

let popup = document.querySelector('#popup')
document.querySelector('.poi-little .close').addEventListener('click', function () {
    popup.style.display = 'none'
    document.body.style.overflow = 'auto'
    item.style.display = 'none'
    // 结束，清空文本域
    tx.value = ''
    // 把字符统计复原
    total.innerHTML = '0/200字'
    renderingstar()
})
let evafr=document.querySelectorAll('.evaluate-footer .fr')
for(let i=0;i<evafr.length;i++){
    evafr[i].addEventListener('click', function () {
        popup.style.display = 'block'
        document.body.style.overflow = 'hidden'
        document.querySelector('.marktitle').innerHTML = unameshopping[this.getAttribute('data-stars')].name
    })
}


//获取系统当前日期
function getMyDate() {
    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
    return `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} ${h}:${m}:${s}`
}

const tx = document.querySelector('#tx')
const total = document.querySelector('.total')
const item = document.querySelector('.item')
const text = document.querySelector('.text')
const wrappername = document.querySelector('.info2 .name')
const wrappertime = document.querySelector('.info2 .time')
const starsxing = document.querySelector('.info2 .starsxing')
const wrapperbtn=document.querySelector('.wrapperbtn')
// 1. 当我们文本域获得了焦点，就让 total 显示出来
tx.addEventListener('focus', function () {
    total.style.opacity = 1
})
// 2. 当我们文本域失去了焦点，就让 total 隐藏出来
tx.addEventListener('blur', function () {
    total.style.opacity = 0
})
// 3. 检测用户输入
tx.addEventListener('input', function () {
    // console.log(tx.value.length)  得到输入的长度
    total.innerHTML = `${tx.value.length}/200字`
})


wrapperbtn.addEventListener('click', function (e) {
        // 如果用户输入的不为空就显示和打印
        if (tx.value.trim()) {
            // console.log(11)
            item.style.display = 'block'
            // console.log(tx.value)  // 用户输入的内容
            text.innerHTML = tx.value
            wrappername.innerHTML = uname
            wrappertime.innerHTML = getMyDate()
            starsxing.innerHTML = vote + '分'
            renderingstar()
        }
        // 结束，清空文本域
        tx.value = ''
        // 把字符统计复原
        total.innerHTML = '0/200字'

})

var stars = document.getElementsByClassName("stars")[0]
// 获取所有的星星
var icons = document.getElementsByClassName("fa-star")
// 定义分数变量
var vote = 0
var score = document.getElementById("score")
score.innerText = vote
function renderingstar() {
    vote = 0
    for (var i = 0; i < 5; i++) {
        // 把星星背景颜色清零
        icons[i].style.setProperty("--v", 0)
    }
    score.innerText = vote
}
stars.addEventListener("click", function (evt) {
    vote = 0
    for (var i = 0; i < 5; i++) {
        // 把星星背景颜色清零
        icons[i].style.setProperty("--v", 0)
        // 判断星星是否被选中
        if (icons[i] == evt.target) {
            vote = i
            // 把当前星星之前的星星填满颜色
            for (var j = 0; j < i; j++) {
                icons[j].style.setProperty("--v", 100)
            }
            var ps = evt.clientX - icons[i].getBoundingClientRect().left
            // 判断当前点中的位置是星星的那一边
            if (ps / icons[i].offsetWidth < 0.5) {
                icons[i].style.setProperty("--v", 50)
                vote += 0.5
            } else {
                icons[i].style.setProperty("--v", 100)
                vote++
            }
        }
    }
    score.innerText = vote
})