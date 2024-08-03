import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeComponent } from './components/recipe/recipe.component';

const routes: Routes = [
  { path: '', component: RecipeComponent },
  { path: 'recipes', loadChildren: () => import('../admin/components/recipe/recipe.module').then(m => m.RecipeModule) },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
