import express from 'express'
import { add,getAllRecipe,getRecipeById,getRecipeByUserId,savedRecipeById,getSavedRecipe} from '../controllers/recipe.js';


import { Authenticate } from '../middlewares/auth.js';
const router = express.Router();
router.get('/',getAllRecipe)
// create recipe
router.post('/add',Authenticate, add)

// get recipe by Id
// get all saved Recipe
router.get('/saved',getSavedRecipe)

router.get('/:id',getRecipeById)
// get recipe by userId
router.get('/user/:id',getRecipeByUserId)
// saved Recipe by Id

// get all saved Recipe
router.post('/:id',Authenticate,savedRecipeById)
export default router;