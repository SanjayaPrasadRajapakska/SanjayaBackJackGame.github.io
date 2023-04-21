function main() {

let confirm = document.getElementById('mainResult').innerHTML;
if (confirm=='You lost..!!' ){
    alert("Game over..please restart the game..");
} else {


    let x ;
    do {
   
   x =Math.floor(Math.random()*13);
} while(x==0);



let curentt =parseInt(document.getElementById('result').innerHTML);
let total = curentt + x;
document.getElementById('result').innerHTML= total;

if (total < 21) {
    document.getElementById('mainResult').innerHTML= "Generate another card..";

}
else if (total==21){
    document.getElementById('mainResult').innerHTML= "You've Won..!!";
    alert("Cogratulation..!");
    document.getElementById('rese').style.display= "block";


}
else if (total>21){
    document.getElementById('mainResult').innerHTML= "You lost..!!";
    alert("Lost..!! Click restart to play again..");
    document.getElementById('rese').style.display= "block";
}
var img = document.createElement("img");
img.src="images/"+ x + ".png";
img.height=160;

document.body.appendChild(img);
}
}

function rest () {

    location.reload();
}