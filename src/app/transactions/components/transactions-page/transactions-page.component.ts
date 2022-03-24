import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Transaction } from '../../interfaces/transaction';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss'],
})
export class TransactionsPageComponent implements OnInit {
  transactions$!: Observable<Transaction[]>;
  transactionId$!: Observable<string | null>;
  constructor(private transactionsService: TransactionsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.transactionId$ = this.route.paramMap.pipe(map((paramMap) => paramMap.get('id')));
    this.transactions$ = this.transactionsService.getTransactions();
  }
}
