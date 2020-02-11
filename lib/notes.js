class Notes {
  constructor(options) {
    this.action = options.command.action;
    this.payload = options.command.payload;
  }

  execute() {
    switch (this.action) {
      case 'add':
        this.add(this.payload);
        break;
      default: break;
    }
  }

  add() {
    console.log(`adding note: ${this.payload}`);
  }

  valid() {

  }
}


module.exports = Notes;