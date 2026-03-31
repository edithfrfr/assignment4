interface expense {
    id: string;
    title: string;
    amount: number;
    category: expenseCategory;
}
type expenseCategory = 'Work' | 'Personl' | 'Grocery' | 'Shopping' | 'Travel' | 'Food';