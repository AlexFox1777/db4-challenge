const db = require('./recipesDB');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.getRecipes()
        .then(recipes => res.status(200).json(recipes))
        .catch(error => res.status(500).json({error: 'Server error, can not retrieve recipes'}))
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    if(id){
        db.getShoppingList(id)
            .then(recipes => res.status(200).json(recipes))
            .catch(error => res.status(500).json({error: 'Server error, can not retrieve ingredients and quantities of the recipe'}))
    }
});

router.get('/:id/instructions', (req, res) =>{
    const id = req.params.id;
    if(id){
        db.getInstructions(id)
            .then(recipes => res.status(200).json(recipes))
            .catch(error => res.status(500).json({error: 'Server error, can not retrieve ingredients and quantities of the recipe'}))
    }
});


module.exports = router;