function creerPersonne(prenom,nom){
	return{
		nom:nom,
		prenom:prenom,
		afficherPersonne: ()=>{
			return "Je suis "+nom+" "+prenom;
		},
	}
}

function displayNight(b){
    if(b){
        document.body.style.background = 'black';
        document.getElementById('title').style.color = 'white';
        document.getElementById("first_img").src = "img/Nuit.png";
    }else{
        document.body.style.background = 'white';
        document.getElementById('title').style.color = 'black';
        document.getElementById("first_img").src = "img/Jour.png";
    }
}

const p = creerPersonne("Dorian","LANSEL");

console.log(p.afficherPersonne());
