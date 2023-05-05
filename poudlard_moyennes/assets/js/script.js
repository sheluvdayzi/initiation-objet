/**
* EXO Poudlard_Moyennes/array3D
*/
/*
    I. Créer un tableau "Poudlard" contenant la moyenne des élèves pour plusieurs matières, tous les élèves n'ayant pas les mêmes cours.
    Un tableau 3D est un tableau multi-dimensionnel contenant des objets, eux-même contenant des objets
    Nous auront donc pour un élève, sa moyenne à plusieurs matières.
    Par exemple : var Poudlard = [
        {
            prenom: "Harry",
            nom: "POTTER",
            moyenne: {
                transfiguration: 14,
                potions: 7,
                defense: 18,
                divination: 11,
                quidditch: 19
            }
        }, ...
    **** Vous allez créer au minimum 5 étudiants ****
    II. Afficher sur la page (à l'aide de document.write) pour chaque élève, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale.
    III-Bonus : gérer l'affichage de la moyenne avec 2 chiffres après la virgule. Rechercher toFixed() dans la documentation MDN.
*/

let Poudlard = [
    {
        prenom: "Harry",
        nom: "POTTER",
        moyenne: {
            transfiguration: 14,
            potions: 7,
            defense: 18,
            divination: 11,
            quidditch: 19
        }
    },
    {
        prenom: "Hermione",
        nom: "GRANGER",
        moyenne: {
            transfiguration: 18,
            potions: 15,
            defense: 16,
            histoire: 19,
            arithmancie: 17,
            moldu: 18,
            runes: 16,
            herbologie: 17.66,
        }
    },
    {
        prenom: "Ron",
        nom: "WEASLEY",
        moyenne: {
            transfiguration: 12,
            potions: 5,
            defense: 12,
            divination: 16,
            moldu: 7,
            vol: 15,
            quidditch: 13,
        }
    },
    {
        prenom: "Neville",
        nom: "LONGBOTTOM",
        moyenne: {
            transfiguration: 13,
            potions: 2,
            defense: 13,
            arithmancie: 6,
            histoire: 16,
            maths: 4
        }
    },
    {
        prenom: "Draco",
        nom: "MALFOY",
        moyenne: {
            transfiguration: 15,
            potions: 18,
            defense: 13,
            divination: 12,
            histoire: 16
        }
    },
];


for(const {nom, prenom, moyenne} of Poudlard){
    console.log(`${prenom} ${nom}`);

    for(const [matiere, note] of Object.entries(moyenne)){
        console.log(`\t ${matiere}: ${note} `);
    }

    let allNote = Object.values(moyenne);
    console.log(`\tmoyenne générale: ` + (allNote.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / allNote.length).toFixed(2));
}

