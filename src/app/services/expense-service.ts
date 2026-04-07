import { computed, signal } from "@angular/core";

export class expenseService {
    //expenses stored as a signal of Expense type
    expenses = signal<expense[]>([]);

    //categories
    categories = signal<string[]>(
        [
            'Work',
            'Personl',
            'Grocery',
            'Shopping',
            'Travel',
            'Food'
        ]
    );
    //computed signals
    totalExpense = computed(() => 
    this.expenses().reduce((sum,e) => sum + e.amount, 0));

    highestExpense = computed(() => 
    this.expenses().length === 0 ? 0 : Math.max( ... this.expenses().map(e => e.amount) ) );

    averageExpense = computed(() =>
        this.expenses().length === 0 ? 0 : this.totalExpense() / this.expenses().length );

    transactionCount = computed(() => this.expenses().length);

    //methods to add and delete expenses
    addExpense(expense: expense){
        this.expenses.update(list => [...list, expense]);
    }

    deleteExpense(id: string){
        this.expenses.update(list => list.filter(e => e.id !== id));    
    }

}