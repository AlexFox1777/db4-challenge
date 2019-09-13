
exports.seed = function(knex) {
      return knex('recipes_ingredients').insert([
        {recipes_id: 1, ingredients_id: 7, quantity: 2},
        {recipes_id: 1, ingredients_id: 5, quantity: 4},
        {recipes_id: 2, ingredients_id: 2, quantity: 5},
        {recipes_id: 2, ingredients_id: 5, quantity: 1},
        {recipes_id: 2, ingredients_id: 8, quantity: 3},
        {recipes_id: 3, ingredients_id: 2, quantity: 4},
        {recipes_id: 4, ingredients_id: 1, quantity: 6},
        {recipes_id: 4, ingredients_id: 4, quantity: 6},
        {recipes_id: 4, ingredients_id: 5, quantity: 4},
        {recipes_id: 4, ingredients_id: 6, quantity: 2},
      ]);
};
