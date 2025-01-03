import fs from 'fs';

export default class FileManager {
  constructor() {
    this.fs = fs;
    this.filePath = 'expeneseData.json';
  }

  readFile(callback) {
    this.fs.readFile(this.filePath, (err, data) => {
      if (err) {
        console.log('Error reading file');
        return;
      }
      const expenses = JSON.parse(data);
      if (callback) {
        callback(expenses);
      }
    });
  }

  writeFile(data) {
    this.fs.writeFile(this.filePath, JSON.stringify(data), (err) => {
      if (err) {
        console.log('Error writing file');
        return;
      }
    });
  }
}
