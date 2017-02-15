$("#shareAll").click(function () {
    window.plugins.socialsharing.share('Message only');
});
$(function () {
    $("#comment").click(function () {
        $("#Message").toggle();
    });
    var con;
    $(".msg_but").click(function(){
        con=$(".editContent").html();//获取输入框内容
        if(con==""){
            $(".editContent").focus();
        }else{
            $(".main").append("<div class='msginfo'><dl><dt><img src='../img/1c0017fed3ad948738cb456289e960c9.jpg' /></dt><dd>男神千凡——技术总监</dd></dl><div class='con'>"+con+"</div></div>");
            $(".editContent").html("");
        }
    })
});