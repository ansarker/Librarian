var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  /* Task 2 */
  { title: "Man's Search for Meaning", year: "1946", author: "Viktor Frankl", publisher: "Beacon Press" }
];

/* Task 1 */
function getBookTitle( index ){
  if(index >= 0 && index < library.length) {
    return library[index].title;
  } else {
    return console.log("Not in list");
  }
}

console.log(getBookTitle(3));

/* Task 3 */
function addBook( book ){
  //add code
  library.push(book);
  return library;
}

var newBook = {
  title: "Following the Equation",
  year: "1897",
  author: "Mark Twain",
  publisher: "Sun-Times Media Group"
};

console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
  //add code
  var len = library.length;
  var temp;
  for(var i = 0; i <= len - 1; ++i) {
    for (var j = 0; j <= len - 1; ++j) {
      if(library[i].author < library[j].author) {
        temp = library[i];
        library[i] = library[j];
        library[j] = temp;
      }
    }
  }
  return library;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
  //add code
  var arrayFind = [];
  var key = new RegExp(title, 'i');
  
  for(var i = 0; i < library.length; ++i) {
    if(key.test(library[i].title)) {
      arrayFind.push(library[i]);
    }
  }
  return arrayFind;
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));