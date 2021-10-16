function createLibrary(libraryName) {
   return {
     name: libraryName,
     shelves: {
       fantasy: [],
       fiction: [],
       nonFiction: []
     }
  }
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

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
