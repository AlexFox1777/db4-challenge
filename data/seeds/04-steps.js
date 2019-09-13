
exports.seed = function(knex) {
      return knex('steps').insert([
        {step_number: 1, instructions: 'Wash and dry', recipe_id: 1},
        {step_number: 2, instructions: 'Fry', recipe_id: 1},
        {step_number: 1, instructions: 'peel the potatoes', recipe_id: 2},
        {step_number: 2, instructions: 'grate the potatoes', recipe_id: 2},
        {step_number: 3, instructions: 'squeeze the liquid', recipe_id: 2},
        {step_number: 4, instructions: 'add sugar', recipe_id: 2},
        {step_number: 5, instructions: 'fry', recipe_id: 2},
        {step_number: 1, instructions: 'Cut potato', recipe_id: 3},
        {step_number: 2, instructions: 'Add salt and fry', recipe_id: 3},
        {step_number: 1, instructions: 'Boil water', recipe_id: 4},
        {step_number: 2, instructions: 'Add pasta and boil for 12 min', recipe_id: 4},
      ]);
};
