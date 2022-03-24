import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransactionsPageComponent } from './components/transactions-page/transactions-page.component';
import { TransactionsRoutingModule } from './transactions-routing.module';

@NgModule({
  declarations: [TransactionsPageComponent],
  imports: [CommonModule, TransactionsRoutingModule],
})
export class TransactionsModule {}
