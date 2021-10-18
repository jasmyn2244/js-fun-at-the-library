function createLibrary(libraryName) {
   var library = {
     name: libraryName,
     shelves: {
       fantasy: [],
       fiction: [],
       nonFiction: []
     }
  }
  return library
}

function addBook(library, book) {
  var genre = book.genre
  if (genre === "fantasy") {
    library.shelves.fantasy.push(book)
  } else if (genre === "fiction") {
    library.shelves.fiction.push(book)
  } else if (genre === "nonFiction") {
    library.shelves.nonFiction.push(book)
  }
}

function checkoutBook(library, bookTitle, genre) {

//convert "genre" into a specific book shelf
//appearantly this is unnecessary becuase genre automatically converts to shelf
var shelfOfBook

if (genre === "fantasy") {
  shelfOfBook = library.shelves.fantasy
} else if (genre === "fiction") {
  shelfOfBook = library.shelves.fiction
} else {
  shelfOfBook = library.shelves.nonFiction
}

//use the bookTitle to find the index number of the book
//Array.prototype.findIndex()
// var indexofBook = library.shelves.shelfOfBook.indexOf(bookTitle)

var indexofBook = shelfOfBook.indexOf(bookTitle)

//use splice to remove book from it's position in the array given the condiditon that the book is already on the shelf

for (var i = 0; i < shelfOfBook.length; i++) {
  if (shelfOfBook[i].title === bookTitle) {
    var checkoutBook = shelfOfBook.splice(indexofBook, 1)
    return `You have now checked out ${bookTitle} from the ${library.name}`
 }
}
return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
//
}


// if (shelfOfBook.title.includes(bookTitle)) {
//     shelfOfBook.splice(indexofBook, 1)
//     return (`You have now checked out ${bookTitle} from the ${library.name}`)
// }
// return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
//
// }


//checkOutBook = shelfOfBook.splice(indexofBook, 1)


//shelfOfBook.splice(indexofBook, 1)

//print message


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
