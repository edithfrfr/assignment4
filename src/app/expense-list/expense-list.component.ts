import { Component, inject } from '@angular/core';
import { expenseService } from '../services/expense-service';
import { CommonModule } from '@angular/common';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule,ExpenseItemComponent],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css',
})
export class ExpenseListComponent {

  private service = inject(expenseService);

  expenses = this.service.expenses;

  deleteExpense(id: string) {
    this.service.deleteExpense(id);
  }
}
