const Input = require('./input');
const uuid = require('uuid');



// {
//   action: "add";
//   payload: "This is a really cool thing that I wanted to remember for later"
// }

Input.prototype.action = function (input) {
  if (this.action === 'add') {
    input.add();
  }
};

Input.prototype.add = function () {
  const addedNote = {
    id: uuid(),
    note: this.payload,

  };
  console.log(addedNote.note);

};


module.exports = Input;