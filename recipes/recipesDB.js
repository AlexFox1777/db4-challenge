const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};
//should return a list of all recipes in the database.
function getRecipes() {
    return db('recipes')
}
// should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
    return db('recipes_ingredients as ri')
        .join('ingredients as i', 'ri.ingredients_id', 'i.id')
        .where('recipes_id', recipe_id)
        .select('i.ingredients_name', 'ri.quantity')
}
//should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
 return db('steps')
     .where('recipe_id', recipe_id)
     .select('step_number', 'instructions')
}
