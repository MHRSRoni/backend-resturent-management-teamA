const { CreateFood, UpdateFood, DeleteFood, AllFoods, ReadFood, SearchByCategory, SearchByTitle } = require('../controllers/FoodController');


const router = require('express').Router();

//!Food Crud Routes
router.post('/create-food', CreateFood);


router.get('/food/:id', ReadFood);


router.post('/update-food/:id', UpdateFood);

router.delete('/delete-food/:id', DeleteFood);

router.get('/foods', AllFoods);



//!Search Food Routes
router.get('/search-food-by-category', SearchByCategory);

router.get('/search-food-by-title', SearchByTitle);





module.exports = router;