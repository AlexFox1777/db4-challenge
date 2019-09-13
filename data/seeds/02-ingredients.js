
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredients_name: 'beans'},
        {ingredients_name: 'potato'},
        {ingredients_name: 'sugar'},
        {ingredients_name: 'garlic'},
        {ingredients_name: 'lemon'},
        {ingredients_name: 'tofu'},
        {ingredients_name: 'asparagus'},
        {ingredients_name: 'paprika'},
      ]);
};
