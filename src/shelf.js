function shelfBook(book, shelf) {
    //if (book.genre === "sciFi") {
    if (shelf.length < 3) {
      shelf.unshift(book)
    }
  //}
  return shelf
}

function unshelfBook(title, shelf) {
  // find index # of book we want to remove
 //  var bookIndex = shelf.indexOf(book)
 // //use splice method to remove book from shelf
 //  shelf.splice(bookIndex, 1)
 //  //return the array so we can see if it worked
 //  return shelf


 //or try looping through
 //for each iteration, access the element
 //compare if equals the book in the argument
 //if it does, remove it

 for (var i = 0; i < shelf.length; i++) {
   if (shelf[i].title === title) {
     shelf.splice(i, 1)
   }
 }
}

function listTitles (shelf) {
  var titles = []
  for (var i = 0; i < shelf.length; i++) {
     titles.push(shelf[i].title)
  }
  var finalList = `${titles[0]}, ${titles[1]}, ${titles[2]}`
  return finalList
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};

//
// var book = {
//   title: title,
//   mainCharacter:
//   pageCount:
//   genre:
// }
