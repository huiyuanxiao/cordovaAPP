$(".addPhoto").click(function () {
    $(".photoShow").toggle();
});
function loadImage() {
    //拍照并显示在屏幕
    navigator.camera.getPicture(onLoadImageSuccess, onLoadImageFail, {destinationType: Camera.DestinationType.DATA_URL});
}
//拍照成功后回调
function onLoadImageSuccess(imageURI) {
    //这里的图片经过了base64编码
    var src = "data:image/jpeg;base64," + imageURI;
    $("#getImage").attr("src", src);
    $("#getImage").show();
}
//所有获取图片失败都回调此函数
function onLoadImageFail(message) {
    navigator.notification.alert("操作失败，原因：" + message, null, "警告");
}
function loadImageLocal() {
    //获取本地图片并显示在屏幕
    navigator.camera.getPicture(onLoadImageLocalSuccess, onLoadImageFail, {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });
}
//本地图片选择成功后回调此函数
function onLoadImageLocalSuccess(imageURI) {
    $("#getImageLocal").attr("src", imageURI);
    $("#getImageLocal").show();
}
