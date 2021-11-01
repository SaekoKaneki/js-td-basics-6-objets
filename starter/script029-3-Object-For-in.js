/*****************************
* 029-2 - Boucles pour parcourir des objets
*/

// 2. Boucle for/in pour parcourir des objets

/*
for(const prop in objet) {
  console.log(prop + " : " + objet[prop]);
}   
*/

/*
EXERCICE 1 : 
Parcours l'objet mesFruits pour afficher, pour chacun des fruits, "Le fruit … coûte … €"
*/
const mesFruits = { 
  "Pomme": 1.3,
  "Poire": .5,
  "Ananas": 3
};
for (const propMesFruits in mesFruits){
  console.log("Le fruit " + propMesFruits + " coûte " + mesFruits[propMesFruits]+" €");
}


/*
EXERCICE 2 : 
Parcours l'objet fruit pour afficher chacune de ses propriétés avec, pour chacune, sa valeur
*/
const fruit = {
  "Nom": "Pomme",
  "Prix": 0.3,
  "Couleur": "Verte",
  "Variété": "Golden"
};

for (const propFruit in fruit){
  console.log(propFruit +" : "+ fruit[propFruit]);
}

// Un mot est un objet de type String => ceci fonctionne également…
/*
EXERCICE 3 : 
Parcours le mot "Bonjour" pour afficher séparément chacune de ses lettres
*/
const Bonjour = {
  Lettre1: "B",
  Lettre2: "o",
  Lettre3: "n",
  Lettre4: "j",
  Lettre5: "o",
  Lettre6: "u",
  Lettre7: "r"
}
for (const propLettre in Bonjour ){
  console.log(Bonjour[propLettre]);
}