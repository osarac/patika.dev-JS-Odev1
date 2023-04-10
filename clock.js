let userName = prompt("Lütfen adinizi giriniz.") //Kullancıdan veri almak için
let myName = document.querySelector("#myName")  // Kullanıcının girdiği veriyi ekrana yazdırmak için html deki id girilir
myName.innerHTML=`${userName}` // Kullanıcının girdiği veri ekrana yazdırnak için

function showTime() {
    let myClock = document.getElementById("myClock"); 
    let now = new Date(); 
    let day = now.getDay();
    let month = now.getMonth() + 1; 
    let year = now.getFullYear(); 
    let hour = now.getHours(); 
    let minute = now.getMinutes(); 
    let second = now.getSeconds(); 
  
    let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    day = gunler[day]
  
    let time = `${hour}:${minute}:${second}, ${day}`;
  
    myClock.innerHTML = time 
   
    setTimeout(showTime, 1000); 
  }
  
  showTime(); 