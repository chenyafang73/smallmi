var bannerPic = document.getElementById("bannerPic");
var dis = 0;
var index;
bannerPlay();
var no;
function bannerPlay(){
    no = setInterval(bannerPlay,1000);
    if(dis<-6130){
        dis = 0;
    }
    console.log(dis);
    if(dis%-1226==0){
        clearInterval(no);
        no = setInterval(bannerPlay,1);
    }
    bannerPic.style.marginLeft = dis+"px";
    dis--;
}