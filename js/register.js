window.onload=function(){
    //存储验证表单是否填写正确的变量
    var phonecorrect=0;
    var codecorrect=0;
    var passwordcorrect=0;
    var passrepeatcorrect=0;
    //禁用提交按钮
    var frmContact =document.getElementById("frmContact");
    //手机号码验证
    var phone = document.getElementsByName("phone");
    var span = document.getElementsByTagName("span");

    //获取焦点函数
    phone[0].onfocus=function(){
        phone[0].style.border="1px solid #FFBE00";
        phonecorrect=0;
    }
    phone[0].onblur=function(){
        phone[0].style.border="1px solid #aaa";
        //判断手机号码不能为空
        var phoneValue = phone[0].value;
        if(phoneValue==''){
            span[0].className="display-inline icon-times-circle";
            span[0].innerHTML="手机号码不能为空";
        }
        //判断手机号码是否正确
        if(phoneValue!=""){
            if(!(/^1[3456789]\d{9}$/.test(phoneValue))){
                span[0].className="display-inline icon-times-circle";
                span[0].innerHTML="请填写正确的手机号码！";
            }else{
                span[0].className="display-inline icon-check-circle";
                span[0].innerHTML="手机号码可以使用！";
                phonecorrect=1;
            }
        }
    }
    //手机验证码验证
    var button = document.getElementsByTagName("button");
    button[0].onclick=function(){
        //获取用户手机号
        //生成四位随机数
        function randomf(){
            var randomfour = Math.floor(Math.random()*(9999-1000+1)+1000);
            return randomfour;
        }
        var randomf  = randomf();
        span[1].className="display-inline ";
        span[1].innerHTML=randomf;
    }
    //获取code节点
    var code =document.getElementById("code");
    code.onfocus=function(){    
        code.style.border="1px solid #FFBE00";
        codecorrect=0;
    }
    code.onblur=function(){    
        code.style.border="1px solid #aaa";
        var codeValue = code.value;
        //获取生成的验证码的值
        var spanValue = span[1].innerHTML;
        //判断验证号码不能为空
	    if(codeValue==""){
		    span[2].className="display-inline icon-times-circle";
		    span[2].innerHTML = "验证码不能为空！";
            return false;
	    }
        //判断验证号码是否正确
        if(codeValue!=spanValue){
            span[2].className="display-inline icon-times-circle";
            span[2].innerHTML="验证码不匹配！";
        }else{
            span[2].className="display-inline icon-check-circle";
                span[2].innerHTML="验证码匹配成功！";
                codecorrect=1;
        }
    }
    //密码强度判定
    var tips=document.getElementById("tips");
    var aStr = ["弱","中","强"];
    //用户输入内容检测函数
    function checkStrong(val){
        var modes = 0;
        if(val.length<6||val.length>15) {  tips.innerHTML='密码长度为6-15位';  return 0;}
        if(val.length>6||val.length<=15) {  tips.innerHTML='<b></b><b></b><b></b>';}
        if(/\d/.test(val)) modes++; //判断数字
        if(/[a-zA-Z]/.test(val))modes++; //判断大小写字母
        if(/\W/.test(val))modes++; //判断特殊字符
        return modes;
    }
    //获取密码框节点
    var password = document.getElementById("password");
    //焦点的获取
    password.onfocus=function(){
        password.style.border="1px solid #FFBE00";
        passwordcorrect=0;
    }
    password.onblur=function(){
        password.style.border="1px solid #aaa";
        if( password.value.length>6|| password.value.length<=15) passwordcorrect=1;
    }
    
    //键盘的监听
    password.onkeyup=function(){
        //获取用户输入的内容
        var passVal = password.value;
        //执行函数判断用户输入的内容
        var num = checkStrong(passVal);
        //console.log(num);
        //获取span
        var tipsB = tips.getElementsByTagName("b");
        
        //根据返回值给b标签添加颜色
        switch(num){
            case 0:
                tips.style.color='red';
                tips.style.backgroundColor= '#EEEEEE';
                break;
            case 1:
                tipsB[0].style.backgroundColor="red";
                tipsB[0].innerHTML=aStr[0];
                tipsB[1].innerHTML=aStr[1];
                tipsB[2].innerHTML=aStr[2];
                break;
            case 2:
                tipsB[0].style.backgroundColor="#eee30d";
                tipsB[1].style.backgroundColor="#eee30d";
                tipsB[0].innerHTML=aStr[0];
                tipsB[1].innerHTML=aStr[1];
                tipsB[2].innerHTML=aStr[2];
                break;
            case 3:
                    for(var i=0;i<3;i++){
                        tipsB[i].style.backgroundColor="green";
                    } 
                    tipsB[0].innerHTML=aStr[0];
                    tipsB[1].innerHTML=aStr[1];
                    tipsB[2].innerHTML=aStr[2];
                break;
        }
    }
    //密码匹配判定
    var passRepeat = document.getElementById("passrepeat");
    passRepeat.onfocus=function(){
        passrepeat.style.border="1px solid #FFBE00";
        passrepeatcorrect=0;
        
    }
    passRepeat.onblur=function(){
        passrepeat.style.border="1px solid #aaa";
        var passRepeatValue = passRepeat.value;
        var passWordValue = password.value;
        if(passRepeatValue!=passWordValue){
            span[3].className="display-inline icon-times-circle";
            span[3].innerHTML="两次填写的密码不匹配！";
        }else{
            span[3].className="display-inline icon-check-circle";
            span[3].innerHTML="两次填写的密码匹配！";
            passrepeatcorrect=1;
        }
    }
        
    //监听按钮被点击
    frmContact.onclick=function(){
        if(phonecorrect==1&&codecorrect==1&&passwordcorrect==1&&passrepeatcorrect==1){
            //存储用户账号和密码信息
           let information=JSON.parse(localStorage.getItem("register"))
            if(information){
                information.push({username:phone[0].value,password:passRepeat.value})
                localStorage.setItem("register",JSON.stringify(information))
            }else{
                let information1=JSON.stringify([{username:phone[0].value,password:passRepeat.value}])
            localStorage.setItem("register",information1)
            }
            
            //跳转到登录页面
            window.location.href="./login.html";
        }else{
            alert("请填写信息后在注册");
        }
    }
}