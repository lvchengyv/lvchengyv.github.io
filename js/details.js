//导航栏的下拉
var dropdown = document.getElementById("dropdown");
var dropdownLi = dropdown.getElementsByTagName("li");
//循环遍历
for(var i=0;i<dropdownLi.length;i++){
    //因为1的时候没有效果所以我们要弹出一下
    if(i==1){
        continue;
    }
    dropdownLi[i].onmouseover=function(){   
        this.classList.add("show");
    }
    dropdownLi[i].onmouseout=function(){   
        this.classList.remove("show");
    }
}
//全部分类侧边栏显示隐藏
var dropright = document.getElementById("dropright");

//三个图的故事
(function () {
    // 1. 获取三个盒子
    // 2. 小盒子 图片切换效果
    const small = document.querySelector('.small')
    //  中盒子
    const middle = document.querySelector('.middle')
    //  大盒子
    const large = document.querySelector('.large')
    // 2. 事件委托
    small.addEventListener('mouseover', function (e) {
      if (e.target.tagName === 'IMG') {
        // console.log(111)
        // 排他 干掉以前的 active  li 上面
        this.querySelector('.active').classList.remove('active')
        // 当前元素的爸爸添加 active
        e.target.parentNode.classList.add('active')
        // 拿到当前小图片的 src
        // console.log(e.target.src)
        // 让中等盒子里面的图片，src 更换为   小图片src
        middle.querySelector('img').src = e.target.src
        // 大盒子更换背景图片
        large.style.backgroundImage = `url(${e.target.src})`
      }
    })

     // 3. 鼠标经过中等盒子， 显示隐藏 大盒子
     middle.addEventListener('mouseenter', show)
     middle.addEventListener('mouseleave', hide)
     let timeId = null
     // 显示函数 显示大盒子
     function show() {
       // 先清除定时器
       clearTimeout(timeId)
       large.style.display = 'block'
     }
     // 隐藏函数 隐藏大盒子
     function hide() {
       timeId = setTimeout(function () {
         large.style.display = 'none'
       }, 200)
     }


     // 4. 鼠标经过大盒子， 显示隐藏 大盒子
     large.addEventListener('mouseenter', show)
     large.addEventListener('mouseleave', hide)


     // 5. 鼠标经过中等盒子，显示隐藏 黑色遮罩层
     const layer = document.querySelector('.layer')
     middle.addEventListener('mouseenter', function () {
       layer.style.display = 'block'
     })
     middle.addEventListener('mouseleave', function () {
       layer.style.display = 'none'
     })
     // 6.移动黑色遮罩盒子
     middle.addEventListener('mousemove', function (e) {
       // let x = 10, y = 20
       // console.log(11)
       // 鼠标在middle 盒子里面的坐标 = 鼠标在页面中的坐标 - middle 中等盒子的坐标
       // console.log(e.pageX)鼠标在页面中的坐标
       // middle 中等盒子的坐标
       // console.log(middle.getBoundingClientRect().left)
       let x = e.pageX - middle.getBoundingClientRect().left
       let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop
       // console.log(x, y)
       // 黑色遮罩移动 在 middle 盒子内 限定移动的距离
       if (x >= 0 && x <= 400 && y >= 0 && y <= 400) {
         // 黑色盒子不是一直移动的
         // 声明2个变量 黑色盒子移动的 mx my变量 
         let mx = 0, my = 0
         if (x < 100) mx = 0
         if (x >= 100 && x <= 300) mx = x - 100
         if (x > 300) mx = 200

         if (y < 100) my = 0
         if (y >= 100 && y <= 300) my = y - 100
         if (y > 300) my = 200

         layer.style.left = mx + 'px'
         layer.style.top = my + 'px'
         // 大盒子的背景图片要跟随 中等盒子移动  存在的关系是 2倍   
         large.style.backgroundPositionX = -2 * mx + 'px'
         large.style.backgroundPositionY = -2 * my + 'px'
       }
     })
})();

let product=[{name:'【笑江湖火锅】超值双人餐',price1:98,price2:137,imgurl:'https://p1.meituan.net/208.126/scpdeal/eb7f6feb347e3a0fdb5fcda2456a767659610.jpg@100w_100h_1e_1c'},{name:'【江湖再惠】3-4人餐',price1:128,price2:187,imgurl:'https://p0.meituan.net/208.126/deal/bf3d17dcdb062472cf5901d2811afab0629616.jpg@100w_100h_1e_1c'},{name:'【笑江湖火锅】六人餐',price1:238,price2:344,imgurl:'https://p1.meituan.net/208.126/deal/da65c6d475925a722c394255391c8edb667951.jpg@100w_100h_1e_1c'},{name:'【笑江湖】八人餐，包间免费',price1:328,price2:429,imgurl:'https://p1.meituan.net/208.126/scpdeal/eb7f6feb347e3a0fdb5fcda2456a767659610.jpg@100w_100h_1e_1c'},{name:'哈尔滨纯生1瓶',price1:10,price2:12,imgurl:'https://p1.meituan.net/208.126/deal/ef65e09fc93b4ef7cb28c7a8c3b257dc459331.jpg@100w_100h_1e_1c'},{name:'【笑江湖】精品4人餐',price1:168,price2:285,imgurl:'https://p1.meituan.net/208.126/scpdeal/eb7f6feb347e3a0fdb5fcda2456a767659610.jpg@100w_100h_1e_1c'}]

let productlist=document.querySelector('.btm-cont .group>div')
let str=''
for(let i=0;i<product.length;i++){
  str+=`<div class="one ">
  <div class="pic">
      <div class="imgbox" style="height: 100%; width: 100%;">
          <img src=${product[i].imgurl}>
      </div>
  </div>

  <div class="info">
      <p class="name"><span>${product[i].name}</span>
          <img src="https://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png" class="icon">
      </p>
      <p class="price">￥<b>${product[i].price1}</b><span>门市价￥${product[i].price2}</span></p>
      
  </div>
  <div>
      <a class="fr buy buynow" href="javascript:;" data-number=${i}>立即抢购</a>
  </div>
</div>`
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
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}号 ${h}:${m}:${s}`
}
productlist.innerHTML=str

let buynowbutton=document.querySelectorAll('.buynow')
for(let i=0;i<buynowbutton.length;i++){
  buynowbutton[i].addEventListener('click',function(){
    let j=localStorage.getItem('uname')
    if(j){
      let k=buynowbutton[i].getAttribute('data-number')
      let obj=product[k]
      obj.nowtime=getMyDate()
      obj.uname=j
      if(localStorage.getItem(`${j}shopping`)){
        let oldshopping=JSON.parse(localStorage.getItem(`${j}shopping`))
        oldshopping.push(obj)
        localStorage.setItem(`${j}shopping`,JSON.stringify(oldshopping))
      }else{
      localStorage.setItem(`${j}shopping`,JSON.stringify([obj]))
      }
      //跳转到我的订单页面
      window.location.href="./evaluate.html";
    }
    else{
      alert("请先登录")
    }
  })
}

