import { Component, inject, model } from '@angular/core';
import { expenseService } from '../services/expense-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { expenseCategory } from '../models/expense'

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule, CommonModule ],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.css',
  standalone: true,
})
export class AddExpenseComponent {
  private service = inject(expenseService);
  private router = inject(Router);

  title = model('');
  amount = model(0);
  category = model<expenseCategory>('Work'); //Work as default value

  categories = this.service.categories;

  addExpense(){
    const newExpense = {
      id: Date.now().toString(),
      title: this.title(),
      amount: this.amount(),
      category: this.category(),
    };
    this.service.addExpense(newExpense);
    this.router.navigate(['/expenses']);
  }

}
