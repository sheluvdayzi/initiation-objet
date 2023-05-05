/*
    EXO Sac à dos
    Réaliser une classe Sac qui permettra de faire ses courses. Il ne peut contenir qu'un nombre limité d'articles.
    On peut y mettre des articles, chaque article ne peut être qu'en un seul exemplaire.
    On doit avoir les méthodes suivantes :
• Ajouter
• Contenu
• Taille
• Vide
-BONUS-
- je peux voir la liste de ce que le sac contient
- je peux retirer un objet du sac
*/


function Sac(brand){ 
    this.marque = brand;
    this.contenu = [];
    this.vide = true;
    this.taille = this.contenu.length;
    this.max = 5;
    this.alreadyIn = false;

    this.ajouter = function(obj){ // Fonction pour ajouter des choses dans mon sac
        // si le sac est vide
        if(this.vide){
            this.contenu.push(obj);
            this.vide = false;
            this.max--;
            console.log(`Dans le sac, il reste ${this.max} place`);
        } else{
            // si le sac n'est pas plein
            if(this.max !== 0){
                console.log('le sac nest pas plein');
                // on vérifie les doublons avant de rajouter (boucle)
                if(this.contenu.indexOf(obj) === -1){
                    this.contenu.push(obj);
                    this.max--;
                    console.log(`Dans le sac, il reste ${this.max} place`);
                } else{
                    // sinon (sac plein) on informe l'utilisateur
                    alert('il y a un doublon');
                }
            } else{
                alert('Tu ne peux rien ajouter dans le sac car il est plein...');
            }
        }
    }

    this.retirer = function(obj){ // Fonction pour retirer de choses dans mon sac
        if(this.vide){
            console.log("Il n'y à rien à enlever dans le sac...");
        } else{
            this.contenu.splice(this.contenu.length -1);
            this.max++;
            console.log(`Dans le sac, il reste ${this.max} place`);
        }
    }

    this.liste = function(){ // Fonction pour avoir la liste de ce qu'il y a dans mon sac
        if(this.vide){
            let ul = document.querySelector('ul');
            ul.innerText = "vide"
        } else{
            for(let j = 0; j < this.contenu.length; j++){
                let ul = document.querySelector('ul');
                let li = document.createElement('li');
                li.innerHTML = this.contenu[j];
                ul.appendChild(li);
            }
        }
    }
}

let valise = new Sac('nike');
valise.ajouter('cadeau');
valise.retirer();
valise.ajouter('sucre');
valise.ajouter('sel');
valise.ajouter('pomme');
valise.ajouter('tomate');
valise.ajouter('Mila');
valise.contenu;
valise.liste();
console.log(valise.contenu);