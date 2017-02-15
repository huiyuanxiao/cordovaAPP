$("#phone_reg").click(function () {
    var phoneNumber = $("#mobile_user").val();
    var password =$("#mobile_password").val();
    var passwordAgain=$("#mobile_password_again").val();
    if(phoneNumber == "" || !phoneNumber.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
        alert("用户名错误");
    }
    if(password != passwordAgain || password == "" || passwordAgain ==""){
        alert("密码输入错误");
    }else{
        window.open("login.html");
    }
});