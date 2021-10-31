/*****************************
* 027 - OBJETS - CODING CHALLENGE 4
*/

/*
Souvenons-nous du premier challenge de code où Mark et John comparaeint leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus retroune-le à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé abev le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/
let john={
    Weight : 78,
    Height : 1.69,
    Name : 'John',
    BMI(){
       return this.Weight/[this.Height*this.Height];
    }
}
let mark={
    Weight : 92,
    Height : 1.95,
    Name : 'Mark',
    BMI(){
      return this.Weight/[this.Height*this.Height];
    }
}

if(mark.BMI>john.BMI){
    console.log(` ${mark.BMI} est plus élevé que ${john.BMI}`);
}
else if (mark.BMI<john.BMI){
    console.log(` ${john.BMI} est plus élevé que ${mark.BMI}`);
 }else{
    console.log(`${john.BMI}et ${mark.BMI} sont ex aequo`);
 }