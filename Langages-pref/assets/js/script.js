/**
 * /* tableaux multidimensionnels
    EXO - Langages préférés
 */
let matrix = [['Keanu', 'Reaees', 'Javascript'], ['Laurence', 'Fishburne', 'PHP'], ['Carrie-Anne', 'Moss', 'POO'], ['Hugo', 'Weaving', 'CSS'], ['Gloria', 'Foster', 'HTML']];
    /**
  * CONSIGNE : Grâce à une boucle FOR  ou autre..., affichez la liste des élèves et de leur préférence en programmation qui sont stockées dans le tableau multi-dimensionnel ci
    -dessus. L'affichage se fera sous forme de liste dans la page.
  */
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            let ul = document.querySelector('ul');
            let li = document.createElement('li');
            li.innerHTML = matrix[i][j] + ' ' + matrix[i][j+1] + ' prefere ' + matrix[i][j+2];
            ul.appendChild(li);
            break;
        }
    }