const { CreateFood, UpdateFood, DeleteFood, AllFoods, ReadFood, SearchByCategory, SearchByTitle, FoodForPage, VisitorCount } = require('../controllers/FoodController');


const router = require('express').Router();

//!Food Crud Routes
router.post('/create-food', CreateFood);


router.get('/food/:id', ReadFood);


router.post('/update-food/:id', UpdateFood);

router.delete('/delete-food/:id', DeleteFood);

router.get('/foods', AllFoods);

router.get('/food', FoodForPage);



//!Search Food Routes
router.get('/search-food-by-category', SearchByCategory);

router.get('/search-food-by-title', SearchByTitle);



//!Visitors

router.get('/visitor-count', VisitorCount);


module.exports = router;