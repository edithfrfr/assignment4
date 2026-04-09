import { Component, inject, Input, input } from '@angular/core';
import { expenseService } from '../services/expense-service';

@Component({
  selector: 'app-expense-item',
  imports: [],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
  standalone: true
})
export class ExpenseItemComponent {

  @Input() expense! : expense;

  private service = inject(expenseService);

  deleteExpense(){
    this.service.deleteExpense(this.expense.id);
  }

  editExpense(){
    //will do this later
  }

  //style 
  isHighAmount(){
    return this.expense.amount >= 100;
  }

  categoryClass(){
    return this.expense.category

  }

}
