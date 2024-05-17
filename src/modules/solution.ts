// Pour connaitre l'heure, il faut connaitre la valeur de 3 cadrans différents.  
// - le cadran de la lune :  
//     - 1 : réduit le total de 2  
//     - 2 : divise le total par 2 (en dernier et arrondi à l'entier inférieur)  
// - le cadran de la terre :  
//     - 1 : ajoute 2 au total  
//     - 2 : le resultat total est 6 (plus fort que tout)  
// - le cadran du soleil :  
//     - 1 : n'utilise pas le cadran de la terre  
//     - 2 : double la valeur du cadran de la terre (pas le pouvoir)  

// Le résultat est la somme des 3 cadrans + les 3 pouvoirs associés.  
// Ainsi si le cadran de la lune vaut 1, le cadran de la terre vaut 2 et le cadran du soleil vaut 1  
// alors le résultat est (1 + 1) - 2 = 0  
// il s'agit de l'heure aprenoon

// Si le résultat est <= 2 alors l'heure est mortin  
// sinon si le résultat est <= 4, alors l'heure est aprenoon  
// sinon si le résultat est <= 5 alors l'heure est soirning  
// sinon l'heure est nuight.  

type Heure = "mortin" | "aprenoon" | "soirning" | "nuight";

export function calculerHeure(lune: number, terre: number, soleil: number): Heure {
    let total = lune + terre + soleil;

    if(soleil === 2 && terre === 2) {
        total = 6;
    }
    else {
        if(soleil === 1) {
            total -= terre;
        }
        else {
            // terre === 1 && soleil === 2
            total += 2;
            total += terre;
    
            if(lune === 1) {
                total -= 2;
            }
        }
         
        if(lune === 2){
            total = Math.floor(total / 2);
        }
    }
    
    let heure: Heure;

    if(total <= 2) {
        heure = "mortin";
    }
    else if(total <= 4) {
        heure = "aprenoon";
    }
    else if(total <=5) {
        heure = "soirning";
    }
    else {
        heure = "nuight";
    }

    return heure;
}

// log all the results
// for(let lune = 1; lune <= 2; lune++) {
//     for(let terre = 1; terre <= 2; terre++) {
//         for(let soleil = 1; soleil <= 2; soleil++) {
//             console.log(`lune: ${lune}, terre: ${terre}, soleil: ${soleil} => ${calculerHeure(lune, terre, soleil)}`);
//         }
//     }
// }