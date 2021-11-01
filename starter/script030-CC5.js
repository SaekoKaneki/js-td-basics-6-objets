/*****************************
* 030 - OBJETS + BOUCLES + TESTS + FONCTIONS - CODING CHALLENGE 5
*/

/*
Vous vous souvenez du challenge du caculateur de pourboire ?
Créons-en une version plus avancée en utilisant tout ce que nous avons appris !

Cette fois, John et sa famille sont allés dans 5 restaurants différents.
Les factures ont été de $124, $48, $268, $180 et $42.
John aime laisser un pourboire de 20% quand la facture est inférieure à $50,
15% quand la facture est entre $50 et $200, et 10% si la facture est plus de $200.

Implémente un calculateur de pourboire en utilisant les objets et les boucles.
1. Crée un objet avec un tableau pour les montants des factures
2. Ajoute une méthode pour calculer le pourboire
3. Cette méthode devrait inclure une boucle pour itérer à travers toutes les factures payées
    et faire le calcul du pourboire
4. En sortie, crée 
    1°) un nouveau tableau qui contient toutes les factures
    2°) un tableau qui contient les montants finaux payés (facture + pourboire).
AIDE : Commence avec deux tableaux vides en tant que propriétés 
        et remplis-les dans la boucle*/
let aFacture =[];
let aPourboires =[];
const aCalculateur ={
   Facture : [124, 48, 268, 180 , 42],
    calculer(){
       let iPourboires = 0;
       for (let i = 0; i< aCalculateur.Facture.length; i++) {
           if (this.Facture[i] < 50) {
               iPourboires = (this.Facture[i] * 0.2);
               aFacture.push(iPourboires + this.Facture[i]);
               aPourboires.push(iPourboires);
           } else if (this.Facture[i] >= 50 && this.Facture[i] < 200) {
               iPourboires = (this.Facture[i] * 0.15);
               aFacture.push(iPourboires + this.Facture[i]);
               aPourboires.push(iPourboires);
           } else {
               iPourboires = (this.Facture[i] * 0.1);
               aFacture.push(iPourboires + this.Facture[i]);
               aPourboires.push(iPourboires);
           }
       }
    }
}
aCalculateur.calculer();
console.log("John :")
console.table(aFacture);
console.table(aPourboires);
/*BONUS (EXTRA) APRÈS AVOIR FINI :

La famille de Mark est aussi partie en vacances, et est allée dans 4 restaurants differents.
Les factures ont été de $77, $375, $110, et $45.
Mark aime laisser un pourboire de 20% quand la facture est moins de $100,
10% pour une facture entre $100 et $300, et 25% pour une facture de plus de $300
(différent de John).

5. Implémente les mêmes fonctionnalités qu'avant, cette fois avec les règles de pourboire de Mark.
6. Crée une fonction (pas une méthode) pour calculer la moyenne d'un tableau de pourboires donné.
INDICE : Boucle sur le tableau et, à chaque itération, stocke la somme courante dans une varaible
(en commençant à 0). Une fois que tu as la somme du tableau, divise-la par le nombre d'éléments
du tableau (c'est comme cela qu'on calcule une moyenne).
7. Calcule le pourboire moyen pour chaque famille
8. Affiche qui a payé le pourboire le plus élevé en moyenne.

BONNE CHANCE 😀
*/
let aFactureM =[];
let aPourboiresM =[];
const aCalculateurM ={
    FactureM : [77, 375, 110, 45],
    calculerM(){
        let iPourboiresM = 0;
        for (let i = 0; i< aCalculateurM.FactureM.length; i++) {
            if (this.FactureM[i] < 100) {
                iPourboiresM = (this.FactureM[i] * 0.2);
                aFactureM.push(iPourboiresM + this.FactureM[i]);
                aPourboiresM.push(iPourboiresM);
            } else if (this.FactureM[i] >= 100 && this.FactureM[i] < 300) {
                iPourboiresM = (this.FactureM[i] * 0.1);
                aFactureM.push(iPourboiresM + this.FactureM[i]);
                aPourboiresM.push(iPourboiresM);
            } else {
                iPourboiresM = (this.FactureM[i] * 0.25);
                aFactureM.push(iPourboiresM + this.FactureM[i]);
                aPourboiresM.push(iPourboiresM);
            }
        }
    }
}
aCalculateurM.calculerM();
console.log("Mark :")
console.table(aFactureM);
console.table(aPourboiresM);

let SommeJ =0;
aPourboires.forEach(element =>{
    SommeJ+=element;
})

SommeJ/=(aPourboires.length);
/*-------------------------------*/
let SommeM=0;
aPourboiresM.forEach(element =>{
    SommeM+=element;
})

SommeM/=(aPourboiresM.length);

/*-----------------------------*/
if (SommeJ>SommeM){
    console.log('John a payé le pourboire moyen le plus élévé');
}else if (SommeJ===SommeM){
    console.log('Mark et John ont payé le même pourboire moyen ');
}else {
    console.log('Mark a payé le pourboire moyen le plus élévé') ;
}