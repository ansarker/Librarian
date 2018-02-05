var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  /* Task 2 */
  { title: "Following the Equator", year: "1897", author: "Mark Twain", publisher: "Sun-Times Media Group"}
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

var newBook = {};
console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
  //add code
  var sortable = [];
  for(var key in library)
    if(library.hasOwnProperty(key))
      sortable.push([key, library[key]]); // each item is an array in format [key, value]
  
  // sort items by value
  sortable.sort(function(a, b)
  {
    var x=a[1].toLowerCase(),
      y=b[1].toLowerCase();
    return x<y ? -1 : x>y ? 1 : 0;
  });
  return sortable;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
  //add code
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
