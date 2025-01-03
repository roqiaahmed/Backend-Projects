import FileManager from '../fileManger.js';

export default class Add {
  constructor(description, amount) {
    this.description = description;
    this.amount = amount;
    Add.count = Add.count + 1;
    this.id;
    this.date = new Date();
    this.fileManager = new FileManager();
  }

  isValid() {
    if (
      !this.description ||
      !this.amount ||
      isNaN(this.amount) ||
      this.amount <= 0
    ) {
      return false;
    }
    return true;
  }

  addExpense() {
    if (!this.isValid()) {
      console.log('Please provide a vaild description and vaild amount');
      return;
    }
    try {
      this.fileManager.readFile((data) => {
        this.id = data.length + 1;
        data.push({
          id: this.id,
          description: this.description,
          amount: this.amount,
          date: this.date,
        });
        this.fileManager.writeFile(data);
        console.log(`Expense added successfully (ID: ${this.id})`);
      });
    } catch (err) {
      console.log('Error reading file');
    }
  }
}
