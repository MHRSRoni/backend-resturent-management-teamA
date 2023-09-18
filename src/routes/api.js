const { CreateFood, UpdateFood, DeleteFood, AllFoods, ReadFood, SearchByCategory, SearchByTitle } = require('../controllers/FoodController');

const router = require('express').Router();

//!Food Crud Routes
router.post('/create-food', CreateFood);

router.get('/food/:slug', ReadFood);

router.post('/update-food/:slug', UpdateFood);

router.delete('/delete-food/:slug', DeleteFood);

router.get('/foods', AllFoods);



//!Search Food Routes
router.get('/search-food-by-category', SearchByCategory);

router.get('/search-food-by-title', SearchByTitle);







module.exports = router;