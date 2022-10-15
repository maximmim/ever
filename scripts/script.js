/*

      _    _                  .      _    _
     / \  / \      /\    \ /  |     / \  / \ 
    /   \/   \    /__\    /   |    /   \/   \
   /          \  /    \  / \  |   /          \

*/



function unblock() {
    document.getElementById("home").style.display = "block"
    document.getElementById("struktur1").style.display = "block"
    document.getElementById("dwa").style.display = "none"
    document.getElementById("add").style.display = "block"
    document.getElementById("close").style.display = "block"
    document.getElementById("te").style.display = "none"
    document.getElementById("baner").style.display = "none"
}
var gog = localStorage.you 

setTimeout(update,50000)
function update() {
if (gog = true) {
unblock()
}
else {

}


}

function daa() {
    

 
 /*
let response = await fetch("/php/ind.php", {
    method: "POST",
    body: document.getElementById("dw").value
});
*/



   

    $.ajax({
        type: "POST",
        url: "/php/ind.php",
        data: {
            body: document.getElementById("dw").value
        },
        success: function () {
            console.log("Все ок")
        }
    });

    
    
    document.getElementById("dc").style.display = "none";
    document.getElementById("aw").style.display = "block"
    
 

}
function df() {
    document.getElementById("dc").style.display = "block";
    document.getElementById("aw").style.display = "none"
}

function push() {
if (!"Notification" in window) {
    alert("Ваш браузер не подерживает увидомления :(")
}
else if (Notification.permission === "granted") {
    setTimeout(function () {
    let push = new Notification ("Гарного часу в Every", {
        tag : "ache-mail",
        body: "",
        icon: "/img/like.png"
})},3000)
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission( function (permission) {
        if (!("permission" in Notification)) {
            Notification.permission = permission;
            if (permission === "granted") {
                

            }
        }
    })
}
}


function notu() {
let notif = new Notification ("Every у новий пост", {
    tag : "ache-mail",
    body: "Every Просе вас відпочити",
    icon: "/img/da.jpg"
})
}




let hed1 = document.getElementById("hed1")

function d() {
    document.getElementById("aw").style.display = "block";
}

function afw() { 
    document.location.replace("chat.html")
 }

function dvf() {
    document.location.replace("/html/index.html")
}
function home() {
    if(localStorage.p  == -1) {
        document.location.replace("/users/homeg.html")
    }

    if (localStorage.p  == 1){
        document.location.replace("/users/homeann.html")
    }

    if(localStorage.p  == 2){
        document.location.replace("/users/home.html")
    }
    if(localStorage.p == 3){
        document.location.replace("/users/homevika.html")
    }
    if(localStorage.p == 4){
        document.location.replace("/users/homeart.html")
    }

}


/*$.ajax({
    type: "POST",
    url: "index.php",
    data: "name: inp",
    dataType: "json",
    success: function (_response) {
        console.log("Все ок")
    }
});*/


let homee = document.getElementById("home");
let struktur1 = document.getElementById("struktur1")
let daawd =  document.getElementById("dwa")
let add = document.getElementById("add")
let te = document.getElementById("te")





/*

if (localStorage.daw = true) {
    alert(123)
}

    document.getElementById("home").style.display = "block"
    struktur1.style.display = "block"
    daawd.style.display = "none"
    add.style.display = "block"
    te.style.display = "none"
    localStorage.daw = true;


ПРОЕРКА
setInterval(function () {
alert(p)
  },4000)






if(localStorage.daw = true) {
document.getElementById("awl").style.display = "block"
}

setInterval(function () {
    $("#fv").text(localStorage.dw)
},700)


*/


    





var p = 0;



function ceking() 

{
    
//document.getElementById("dwa").classList.add("animation1")
    

push()
    

    s = ' ';
s = s.replace(/^\s+|\s+$/g, '');
if(document.getElementById("daw").value == s) {
        alert("!!!")
    }
    else {
    dwv = true;
    
    let inp = document.getElementById("daw").value;
    localStorage.setItem('dw', inp);
    //alert("Привіт " + inp);
    unblock()
  
   
    localStorage.setItem('dw', inp);
  if (inp == "Анюта"){
       localStorage.p = 1;
       localStorage.you = true;

    }

  else if (inp == "Maxim"){
       localStorage.p = 2;
       localStorage.you = true;
    }

    else if (inp == "Vika"){
        localStorage.p = 3;
        localStorage.you = true;
    }
    else if (inp == "Artem") {
        localStorage.p = 4;
        localStorage.you = true;
    }
    else {
        localStorage.p = -1;
        localStorage.you = false;
    }

    }
}




function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(makeid());



function getRandomArrayElement(arr){
   return arr[Math.floor(Math.random()*arr.length)]
}

let svd = ["Привіт","Hi", "Hallo","Përshëndetje","Привет","Hola","Ahoj","Bonjour","أهلا","Χαίρετε","Ciao","добры дзень","Здравейте","Ndewo ebe ahụ","haai daar","Salaamu caleykum","Sveiki","안녕","ሃይ እንዴት ናችሁ","ሃይ እንዴት ናችሁ"]

setInterval(function () {
$("#te").text(getRandomArrayElement(svd))
  },3600)

function was() {
    document.getElementById("ew").style.display = "block"
    document.getElementById("struktur1").style.display = "none"
    document.getElementById("dwc").style.display = "none"
}

function d() {
    document.getElementById("Eror").style.display = "block"
    
}
function da() {

}
function cse() {
     
    if (confirm('Вы действительно хотите закрыть страницу?')) {
        window.close();
    }
    else {
        alert("Отмена")
    }
}