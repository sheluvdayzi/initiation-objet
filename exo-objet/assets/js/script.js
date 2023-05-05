function Stylo(color){ // constructeur
    // L=le stylo a son bouchon fermé
    this.ouvert = false;
    this.couleur = color;
    this.niveauEncre = 100;

    this.ouvrir = function(){ this.ouvert = true; }
    this.fermer = function(){ this.ouvert = false; }

    this.ecrire = function(arg){
        if(this.ouvert){
            console.log(arg);
            document.write(`<p style="color: ${this.couleur}"> ${arg} </p>`);
            this.niveauEncre -= arg.length;
            document.write(this.niveauEncre);
        } else{
            console.log('Je ne peux pas écrire avec le bouchon');
        }
    }
}
// une instance
let bic = new Stylo('red');
bic.ouvrir();
bic.ecrire('Hello Matis');