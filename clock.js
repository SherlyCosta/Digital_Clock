const clock=document.getElementById('clock');
// const clock=document.querySelector('#clock');

setInterval(function() {
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
// console.log(date.toLocaleTimeString());  //whenever you refresh the page the count will increase
},1000)         //using setInterval, the time will be automatically updated in seconds everytime you open the site without you refreshing the page.
 