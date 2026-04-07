import { Component, inject } from '@angular/core';
import { expenseService } from '../services/expense-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
private expenseService = inject(expenseService);

total = this.expenseService.totalExpense;
highest = this.expenseService.highestExpense;
average = this.expenseService.averageExpense;
count = this.expenseService.transactionCount;



}
