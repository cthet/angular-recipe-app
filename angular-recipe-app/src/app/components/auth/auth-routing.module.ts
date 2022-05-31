import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


const routes:({
  
  { path: 'auth', component: AuthComponent },
})


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
