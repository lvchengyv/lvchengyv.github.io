var loginSubmit = document.getElementById("submit");

//存储验证表单是否填写正确的变量
var phonecorrect=0;
var passwordcorrect=0;
 //判断用户和密码是否匹配
 
 //用户名是否匹配
 //用户名匹配判定
 var userName = document.getElementById("username");
 var userPass = document.getElementById("userpass");

 //取出用户信息,数组
 let information=JSON.parse(localStorage.getItem("register"))
 //获得焦点函数
 userName.onfocus=function(){	
     userPass.className="display-none";
     phonecorrect=0;
 }
 //存储数组下标
 let index1='';
 //失去焦点函数
 userName.onblur=function(){
     //判断手机号码是否正确
     for(let i=0;i<information.length;i++){
        if(userName.value==information[i].username){
        userPass.className="display-inline icon-check-circle";
         userPass.innerHTML = "手机号码正确！";
         index1=i
         phonecorrect=1;
         return 0
     }else{	
        userPass.className="display-inline icon-times-circle";
         userPass.innerHTML = "手机号码不正确！"; 
     }
     }
    
 }	
 //密码是否匹配
 var password1 = document.getElementById("password");
 var passTo = document.getElementById("passto");
 //获得焦点函数
 password1.onfocus=function(){	
     passTo.className="display-none";
     passwordcorrect=0;
 }
 //失去焦点函数
 password1.onblur=function(){
     //判断重复密码是否正确
     if(password1.value!=information[index1].password){
         passTo.className="display-inline icon-times-circle";
         passTo.innerHTML = "密码不正确！"; 
     }else{	
         passTo.className="display-inline icon-check-circle";
         passTo.innerHTML = "密码正确！";
         passwordcorrect=1;
     }
 }
 //点击后提交数据到index.html
 loginSubmit.onclick=function(){	
     //alert(1);
     if(password1.value=="" || userName.value==""){
         alert("请填写信息后登录");
     }
     else if(phonecorrect==1&&passwordcorrect==1){
       //跳转页面
       localStorage.setItem('uname',information[index1].username)
       window.location.href = "./index.html";
     }
 }
 