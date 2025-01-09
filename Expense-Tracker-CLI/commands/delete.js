import FileManager from '../fileManger.js';
import List from './list.js';

export default class Delete {
  constructor(id) {
    this.id = id;
    this.list = new List();
    this.fileManager = new FileManager();
  }
  validateId(id) {
    this.list.getExpenses().then(() => {
      const expense = this.list.expenses.find((expense) => expense.id == id);
      if (!expense) {
        console.log('Expense for this id not found');
        return false;
      }
    });
    return true;
  }

  deleteExpense() {
    if (!this.validateId(this.id)) {
      return;
    } else {
      this.list.getExpenses().then(() => {
        this.list.expenses = this.list.expenses.filter(
          (expense) => expense.id != this.id
        );
        this.fileManager.writeFile(this.list.expenses);
        console.log('Expense deleted successfully');
      });
    }
  }
}
