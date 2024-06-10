let imgbox=document.getElementById('imgbox')
let qrimage=document.getElementById('qrimage')
let qrtext=document.getElementById('qrtext')
let button=document.querySelector('#button')
let flag=0
button.addEventListener("click enter",function generateQr(){
    if(qrtext.value.length>0){
qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtext.value
imgbox.classList.add("show-img")  //it will add this clas after the function runs.

 }

 else {
    qrtext.classList.add('error')
    setTimeout(()=>{
        qrtext.classList.remove('error')
    },1000)
 }

});


