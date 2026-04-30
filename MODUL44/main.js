// function printname(){
//     document.write("detjon");
//     document.write("<br>");
//     setTimeout(
//         function(){
//             document.write("<h1>EDLIR KOPJAQJA<h1>");
//         }, 3000
//     );
//      document.write("lendrit");
// }

// printname();

var color = ['red','green','purple','blacke','yellow','orange'];

var  names = ['omer','rigon','patris','detjon','lendrit'];

function changeColor(){
    document.querySelector('body').style.background = color[Math.floor(Math.random()*color.length)]
}

function changeName(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)]
}

setInterval(changeColor, 10000);
setInterval(changeName, 100000);