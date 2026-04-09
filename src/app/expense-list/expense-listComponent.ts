import { Component, inject } from '@angular/core';
import { expenseService } from '../services/expense-service';
import { NgIf } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { ExpenseItemComponent } from '../expense-item/expense-itemComponent';

@Component({
  selector: 'app-expense-list',
  imports: [NgIf, ExpenseItemComponent],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseListComponent {

  private service = inject(expenseService);

  expenses = this.service.expenses;
}
