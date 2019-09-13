exports.up = function (knex) {
    return knex.schema
        .createTable('ingredients', ingredientsTable => {
            ingredientsTable.increments();
            ingredientsTable
                .string('ingredients_name', 128)
                .notNullable()
                .unique();
        })

        .createTable('recipes', recipesTable => {
            recipesTable.increments();
            recipesTable
                .string('recipes_name', 128)
                .notNullable()
                .unique();
        })

        .createTable('steps', stepsTable => {
            stepsTable.increments();
            stepsTable.integer('step_number')
                .unsigned()
                .notNullable();
            stepsTable.text('instructions')
                .notNullable();
            stepsTable.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })


        .createTable('recipes_ingredients', recipes_ingredients => {
            recipes_ingredients
                .integer('recipes_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            recipes_ingredients
                .integer('ingredients_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            recipes_ingredients
                .float('quantity')
                .notNullable();

            recipes_ingredients.primary([' recipes_id', ' ingredients_id']);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients');
};
