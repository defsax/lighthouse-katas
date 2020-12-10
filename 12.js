const ingredientCheck = function(bakery, ingredient){
  let inStock = false;
  //Loop through each ingredient in bakery
  for(let i of bakery){
    //If there's a match, bakery has ingredient in stock
    if(i === ingredient){
      inStock = true;
    }
  }
  return inStock;
};

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let bakeryAHasIngredient = false;
  let bakeryBHasIngredient = false;
  let chosenRecipe = '';

  //Loop through recipes
  for(let i of recipes){
    //Loop through each ingredient in each recipe
    for(let j of i.ingredients){
      //Check if bakeries contain current ingredient. If they do, set bool to true.
      if(ingredientCheck(bakeryA, j))
        bakeryAHasIngredient = true;
      if(ingredientCheck(bakeryB, j))
        bakeryBHasIngredient = true;

      //If both bakeries have an ingredient from the current recipe, this recipe is the winner!
      if(bakeryAHasIngredient && bakeryBHasIngredient)
        chosenRecipe = i.name;
    }
    //If we get through current recipe's ingredients and there is no match, reset bools.
    bakeryAHasIngredient = false;
    bakeryBHasIngredient = false;
  }
  return chosenRecipe;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

