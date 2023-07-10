window.onload=function(){
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
    var droprightLi = dropright.getElementsByTagName("li");

    // console.log(dropright);
    // console.log(droprightLi);
    //循环遍历
    for(var i=0;i<droprightLi.length;i++){
        droprightLi[i].onmouseover=function(){
            this.classList.add("show");
        }
        droprightLi[i].onmouseout=function(){
            this.classList.remove("show");
        }
    }
    // 搜索框,实现模糊查询
    let searchArr=['小米手机','华为手机','苹果手机','小米电视','小米平板','苹果12','苹果13','小米手表',]
    let keyword=document.querySelector('.keyword');
    let searchHelper=document.querySelector('.search-helper');
    keyword.oninput=function(){
        searchHelper.innerHTML ='';
        for(let i=0;i<searchArr.length;i++){
            if(searchArr[i].indexOf(keyword.value)!=-1){
                searchHelper.innerHTML += '<li>'+searchArr[i]+'</li>';
                searchHelper.style.display='block';
            }
        }
    }
    keyword.onblur=function(){
        searchHelper.style.display='none';
        keyword.value ='';
    }


    //轮播区域的js代码
    var carousel = document.getElementById("carousel");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var image = document.getElementById("image");
    var numList = document.getElementById("number").getElementsByTagName("li");

    //初始化准备
    var add=1;
    //添加图片
    image.src="./images/ad01.jpg";
    numList[0].style.background="#fff";

    //鼠标移入显示左右箭头
    carousel.onmouseover=function(){
        left.style.display="block";
        right.style.display="block";
        clearInterval(lun);
    }
    //鼠标移出隐藏左右箭头
    carousel.onmouseout=function(){
        left.style.display="none";
        right.style.display="none";
        carouselLb();
    }
    //轮播切换图片
    function carouselLb(){
        lun = setInterval(function(){
            add=add+1;
            if(add>6){
                add=1;
            }
            image.src="./images/ad0"+add+".jpg";
            var x =add-1;
            
            for(var i=0;i<numList.length;i++){
                numList[i].style.background="#3e3e3e";
                if(x==i){
                    numList[i].style.background="#fff";
                }
            }
        },3000);
    }
    carouselLb();
    //点击左右箭头切换图片
    left.onclick=function(){
        add=add-1;
        if(add<1){
            add=6;
        }
        image.src="./images/ad0"+add+".jpg";
        
        var x =add-1;
        for(var i=0;i<numList.length;i++){
            numList[i].style.background="#3e3e3e";
            if(x==i){
                numList[i].style.background="#fff";
             }
         }
    }
    right.onclick=function(){   
        add=add+1;
        if(add>6){
            add=1;
        }
        image.src="./images/ad0"+add+".jpg";
        
        var x =add-1;
        for(var i=0;i<numList.length;i++){
            numList[i].style.background="#3e3e3e";
            if(x==i){
                numList[i].style.background="#fff";
            }
        }
    }
    //鼠标滑过li的时候切换图片
    for(var i =0;i<numList.length;i++){
        numList[i].onmouseover=function(){
            add = parseInt(this.innerHTML)
            image.src="./images/ad0"+add+".jpg";
            
            var x =add-1;
            for(var i=0;i<numList.length;i++){
                numList[i].style.background="#3e3e3e";
                if(x==i){
                    numList[i].style.background="#fff";
                }
            }
        }
    }
let regist=document.querySelector(".bodyer-center-right-top")

    //实现登录成功效果
    function checking(){
    let uname=localStorage.getItem("uname");
    if(uname){
        regist.innerHTML=`<div></div>
        <p>
            Hi!你好
        </p>
        <div class="signout">
            <a href="javascript:void(0)">${uname}</a>
        </div>
        <div>
            <a href="javascript:void(0)">退出登录</a>
        </div>`;
        document.querySelector('.bodyer-center-right-top div:nth-child(3)').style.borderWidth='0px';
    }else{
        regist.innerHTML=`<div></div>
        <p>
            Hi!你好
        </p>
        <div>
            <a href="./register.html">注册</a>
        </div>
        <div>
            <a href="./login.html">立即登录</a>
        </div>`;
    }
    }
    checking()
    document.querySelector('.bodyer-center-right-top div:nth-child(4)').addEventListener('click',function(){
        localStorage.removeItem('uname');
        checking()
    })
   
    
    //猫眼电影特效

    //选项卡切换和三角形的显示隐藏
    var movieTab = document.getElementById("movie-tab");
    var movieTabLi = movieTab.getElementsByTagName("li");
    var movieTabTriangle = movieTab.getElementsByClassName("triangle ");
    var movieShow = document.getElementById("movie-show");
    var movieShowClass = movieShow.getElementsByClassName("moviehot");
    var movieLeft = document.getElementById("movieleft");
    var movieRight = document.getElementById("movieright");
    var nowhot = document.getElementById("nowhot");
    var quick = document.getElementById("quick");

    movieTabLi[1].onmouseover=function(){
        movieShowClass[0].style.display="block";
        movieShowClass[1].style.display="none";
        movieTabTriangle[0].style.display="block";
        movieTabTriangle[1].style.display="none";
    }
    movieTabLi[2].onmouseover=function(){
        movieShowClass[0].style.display="none";
        movieShowClass[1].style.display="block";
        movieTabTriangle[1].style.display="block";
        movieTabTriangle[0].style.display="none";
    }
    //左右箭头的显示隐藏
    movieShow.onmouseover=function(){
        movieLeft.style.display="block";
        movieRight.style.display="block";
    }
    movieShow.onmouseout=function(){
        movieLeft.style.display="none";
        movieRight.style.display="none";
    }
    //左右箭头被点击切换图片
    var num =0;
    movieright.onclick=function(){
        if(nowhot.style.display== "block"){
            // console.log(1);
            movielun = setInterval(function(){
                num-=20;
                nowhot.style.left=num+"px";
                if(num<=-1180){
                    clearInterval(movielun);
                    movieright.disabled="disabled";
                    movieleft.disabled=false;
                    movieright.innerHTML="x";
                    movieleft.innerHTML="&lt;";
                }
            },20)
        }else{
            movielun = setInterval(function(){
                num-=20;
                quick.style.left=num+"px";
                if(num<=-1180){
                    clearInterval(movielun);
                    movieright.disabled="disabled";
                    movieleft.disabled=false;
                    movieright.innerHTML="x";
                    movieleft.innerHTML="&lt;";
                }
            },20)
        }
    }
    movieleft.onclick=function(){
        if(nowhot.style.display== "block"){
            // console.log(1);
            movielun = setInterval(function(){
                num+=20;
                nowhot.style.left=num+"px";
                if(num>=0){
                    clearInterval(movielun);
                    movieright.disabled=false;
                    movieleft.disabled="disabled";
                    movieright.innerHTML="&gt;";
                    movieleft.innerHTML="x";
                }
            },20)
        }else{
            movielun = setInterval(function(){
                num+=20;
                quick.style.left=num+"px";
                if(num>=0){
                    clearInterval(movielun);
                    movieright.disabled=false;
                    movieleft.disabled="disabled";
                    movieright.innerHTML="&gt;";
                    movieleft.innerHTML="x";
                }
            },20)
        }
    }
    // 实现电梯导航
    // 实现楼层滚动，文字变色的效果
    let elevator=document.querySelector('.elevator');
    let nav1=document.querySelector('.nav');
    let header1=document.querySelector('.header');
    let bodyer1=document.querySelector('.bodyer');
    let base=nav1.offsetHeight+header1.offsetHeight+bodyer1.offsetHeight;

    let elevatorA=document.querySelectorAll('.elevator a');
    let movie1=document.querySelector('.movie');
    let hote11=document.querySelector('.hotel');
    let like1=document.querySelector('.like');
    
    function clearColor(){
        for(let i=0;i<elevatorA.length;i++){
            elevatorA[i].style.color='';
        }
    }
    document.onscroll=function(){
        let top =document.documentElement.scrollTop||document.body.scrollTop;
        if(top>=base){
            elevator.classList.add('elevator-fix')
        }else{
            elevator.classList.remove('elevator-fix')
        }

        if(top<base){
            clearColor();
        }
        if(top>=base&&top<base+movie1.offsetHeight){
            clearColor();
            elevatorA[0].style.color='red';
        }else if(top>=base+movie1.offsetHeight&&top<base+movie1.offsetHeight+hote11.offsetHeight){
            clearColor();
            elevatorA[1].style.color='red';
        }else if(top>=base+movie1.offsetHeight+hote11.offsetHeight+500&&top<base+movie1.offsetHeight+hote11.offsetHeight+like1.offsetHeight){
            clearColor();
            elevatorA[2].style.color='red';
        }else if(top>=base+movie1.offsetHeight+hote11.offsetHeight+like1.offsetHeight+500){
            clearColor();
            elevatorA[3].style.color='red';
        }
    }
    
    //推荐民宿的显示隐藏
    var hotelTab=document.getElementById('hotel-tab');
    var hotelTabLi=hotelTab.getElementsByTagName('li');

    var container=document.getElementById('container');
    var containerDiv=container.getElementsByClassName('tablist');
    for(var i=0;i<hotelTabLi.length;i++){
        hotelTabLi[i].index=i;
        hotelTabLi[i].onmouseover=function () {
            for(var i=0;i<hotelTabLi.length;i++){
                hotelTabLi[i].className='';
                containerDiv[i].style.display="none";
            }
            this.className='act';
            containerDiv[this.index].style.display="block"
        }
        for(var m=1;m<hotelTabLi.length;m++){
            hotelTabLi[m].className='';
            containerDiv[m].style.display="none";
            }
    }


 // 2. 初始化数据
 const goodsList = [
    {
        picture: './images/ll9.png',
        name: '宽板凳老灶火锅(古城店)',
        addr:'古城',
        price: '139.9',
      },
    {
      picture: './images/ll1.jpg',
      name: '晓寿司(望京soho店)',
      addr:'望京',
      price: '47.5',
    },
    {
        picture: './images/ll2.png',
        name: '蟹老宋香锅（方庄店）',
        addr:'方庄',
        price: '95.5',
      },
      {
        picture: './images/ll3.jpg',
        name: '分米鸡(喜隆多店)',
        addr:'喜隆多',
        price: '88.0',
      },
      {
        picture: './images/ll4.jpg',
        name: '便宜坊烤鸭店(富丰路店)',
        addr:'富丰路',
        price: '92.0',
      },
      {
        picture: './images/ll5.jpg',
        name: '铁木真自助城(西三旗店)',
        addr:'西三旗店',
        price: '182.9',
      },
      {
        picture: './images/ll6.jpg',
        name: '味多美(紫金数码店)',
        addr:'双榆树',
        price: '47.5',
      },
      {
        picture: './images/ll7.jpg',
        name: '农家铁锅炖(松原店)',
        addr:'松原',
        price: '288.5',
      },
      {
        picture: './images/ll8.jpeg',
        name: '芦月轩羊蝎子(杨闸店)',
        addr:'杨闸',
        price: '289.9',
      },
      {
        picture: './images/ll10.jpg',
        name: '华莱士(石油大学店)',
        addr:'常平镇',
        price: '20.9',
      },
      {
        picture: './images/ll11.jpeg',
        name: '吊炉烤鸭(城北店)',
        addr:'城北',
        price: '153.2',
      },
      {
        picture: './images/ll12.jpg',
        name: '巴西烤肉(回龙观店)',
        addr:'回龙观',
        price: '263.5',
      },
      {
        picture: './images/ll13.jpg',
        name: '火炉下(太庙店)',
        addr:'太庙',
        price: '255.2',
      },
      {
        picture: './images/ll14.jpg',
        name: '巴蜀大虾(莲花桥店)',
        addr:'莲花桥',
        price: '119.8',
      },
      {
        picture: './images/ll15.jpg',
        name: '老诚一锅(东大桥店)',
        addr:'东大桥',
        price: '190.0'
      }
  ]

  // 1. 渲染函数  封装
  function render(arr) {
    // 声明空字符串
    let str = ''
    // 遍历数组 
    arr.forEach(item => {
      // 解构
      const { name, picture, price,addr } = item
      str += `
      <div class="list" onclick="javascript:window.location.href='./details.html'">
            <img src=${picture} alt="美食">
            <div>${name}</div>
            <div></div>
            <div>${addr}</div>
            <div>&yen;${price}起</div>
       </div>
      `
    })
    // 追加给list 
    document.querySelector('.like-center-bottom').innerHTML = str
  }
  render(goodsList)  // 页面一打开就需要渲染
    
  // 2. 过滤筛选  
  document.querySelector('.filter').addEventListener('click', e => {
    // e.target.dataset.index   e.target.tagName
    const { tagName, dataset } = e.target
    // 判断 
    if (tagName === 'A') {
      // console.log(11) 
      // arr 返回的新数组
      let arr = goodsList
      if (dataset.index === '1') {
        arr = goodsList.filter(item => item.price > 0 && item.price <= 100)
      } else if (dataset.index === '2') {
        arr = goodsList.filter(item => item.price >= 100 && item.price <= 200)
      } else if (dataset.index === '3') {
        arr = goodsList.filter(item => item.price >= 200)
      }
      // 渲染函数
      render(arr)
    }
  })
}