import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule) }, { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) }, { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) }, { path: 'payees', loadChildren: () => import('./payees/payees.module').then(m => m.PayeesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
