import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'A test recipe',
  //     'this is a test',
  //     'https://keeprecipes.com/sites/keeprecipes/files/cauliflower-tots-2.jpg',
  //     [new Ingredient('meat', 1), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Another test recipe',
  //     'this is a test',
  //     'https://keeprecipes.com/sites/keeprecipes/files/cauliflower-tots-2.jpg',
  //     [new Ingredient('Buns', 2), new Ingredient('meat', 1)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
