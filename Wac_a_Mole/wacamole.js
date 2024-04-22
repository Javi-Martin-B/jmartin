let imagenes=['topo1','topo2','topo3','topo4','topo5','topo6','topo7','topo8','topo9'];
let aleatori2=null;
let score=0;
function pam(index) {
   
    if (aleatori2-1===index) {
        score+=10;
        document.getElementById('score').innerHTML=score;
        var audio = document.getElementById("boing");
        audio.play();
        document.getElementById(imagenes[index]).src ="Pictures/topoNo.jpg";
    }else{
        score-=10;
        document.getElementById('score').innerHTML=score;
    }
    document.getElementById(imagenes[index]).src = 'Pictures/topoPam.jpg';
}

function camviaTopo() {

    for (let i=0;i<imagenes.length;i++){
        document.getElementById(imagenes[i]).src = 'Pictures/topoNo.jpg';
    }
    aleatori2 = Math.trunc((Math.random() * (9)) + 1);
    
    document.getElementById(imagenes[aleatori2-1]).src = "Pictures/topoSi.jpg";
    
}
setInterval(camviaTopo, 1000);

  
  setInterval(() => {
    const color = colors[Math.floor(Math.random()*colors.length)]
    document.body.style.setProperty("--background", color)
  }, 5000)