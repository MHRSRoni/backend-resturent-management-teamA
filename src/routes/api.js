const { CreateFood, UpdateFood, DeleteFood, AllFoods } = require('../controllers/FoodController');

const router = require('express').Router();

//!Food Crud Routes
router.post('/create-food', CreateFood);

router.post('/update-food/:slug', UpdateFood);

router.delete('/delete-food/:slug', DeleteFood);

router.get('/foods', AllFoods);







module.exports = router;