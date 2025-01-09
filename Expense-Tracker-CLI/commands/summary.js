import List from './list.js';

export default class Summary {
  constructor(month) {
    this.month = month;
    this.list = new List();
  }
  getSummary() {
    this.list.getExpenses().then(() => {
      if (this.month) {
        this.list.expenses = this.list.expenses.filter(
          (exprnse) => exprnse.date.split('-')[1] == this.month // exprnse.date.split('-')[1] == this.month
        );
      }
      const total = this.list.expenses.reduce((acc, curr) => {
        return Number(acc) + Number(curr.amount);
      }, 0);
      console.log(
        `Total expense:${this.month ? `for month ${this.month}` : ''} $${total}`
      );
    });
  }
}
