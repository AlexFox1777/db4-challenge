exports.seed = function (knex) {
    return knex('recipes').insert([
        {recipes_name: 'Asparagus Spears'},
        {recipes_name: 'Potato Pancakes'},
        {recipes_name: 'Spicy French Fries'},
        {recipes_name: 'Pasta With White Beans'},
    ]);
};
