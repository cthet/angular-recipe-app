import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './components/auth/auth-interceptore.service';
import { RecipeService } from './components/recipes/recipe.service';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { AuthService } from './components/auth/auth.service';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    AuthService,
    AuthInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
