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


// -1表示无座位，0可选座位，1选中座位，2售出座位
let seatflag= [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 2, 2, 0, 0, 0, 0,
    0, 0, 0, 2, 2, 0, 2, 2, 0, 0,
    -1, 0, 0, 0, 0, 0, 0, 0, 0, -1,
    -1, -1, 0, 0, 0, 0, 0, 0, -1, -1
]


let seatlist=document.querySelectorAll(".filmLeft .seat")
//存储选中座位数组下标的数组
let curSeat=[]
// 存储当前选中的座位号
let curSeatDisp = []
function curSeatDis(){
    curSeatDisp = []
    for(let i=0;i<curSeat.length;i++){
         curSeatDisp.push((Math.floor(curSeat[i] /10) + 1) + '行' + (curSeat[i] % 10 + 1) + '列')
    }
    document.querySelector('#seatSelect').innerHTML=`座位：${curSeatDisp.join(',')}`
}
function rendering(){
    for(let i=0;i<seatflag.length;i++){
    seatlist[i].setAttribute('data-index1',i)
    if(seatflag[i]==-1){
        seatlist[i].className="seat noSeat";
    }else if(seatflag[i]==0){
        seatlist[i].className="seat seatSpace";
    }else if(seatflag[i]==1){
        seatlist[i].className="seat seatActive";
    }else if(seatflag[i]==2){
        seatlist[i].className="seat seatNoUse";
    }
    }
    curSeatDis()
    document.querySelector('#number').innerHTML=curSeat.length
    document.querySelector('#totalprice').innerHTML='￥'+curSeat.length*38+'.00'
}

rendering()
let seatul=document.querySelector(".filmLeft ul")
seatul.addEventListener('click',function(e){
    if (e.target.tagName === 'LI'){
        if(seatflag[e.target.dataset.index1]===1){
            seatflag[e.target.dataset.index1]=0
            for(let i=0;i<curSeat.length;i++){
                if(curSeat[i]==e.target.dataset.index1){
                    curSeat.splice(i,1)
                }
            }
            rendering()
        }else if(seatflag[e.target.dataset.index1]===0&&curSeat.length<5){
            seatflag[e.target.dataset.index1]=1
            curSeat.push(e.target.dataset.index1)
            rendering()
        }
    }
})


