import FileManager from '../fileManger.js';
import List from './list.js';

export default class Update {
  constructor(id) {
    this.id = id;
    this.fileManager = new FileManager();
    this.list = new List();
    this.date = new Date();
  }

  updateExpense(desc, amount) {
    this.list.getExpenses().then(() => {
      const expense = this.list.expenses.find(
        (expense) => expense.id === this.id
      );
      if (!expense) {
        console.log('Expense not found');
        return;
      }
      if (desc) {
        expense.description = desc;
      }
      if (amount) {
        expense.amount = amount;
      }
      expense.date = `${this.date.getDate()}-${
        this.date.getMonth() + 1
      }-${this.date.getFullYear()}`;

      this.fileManager.writeFile(this.list.expenses);
      console.log('Expense updated');
    });
  }
}
