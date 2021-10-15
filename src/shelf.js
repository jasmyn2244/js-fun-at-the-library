function shelfBook(book, shelf) {
    //if (book.genre === "sciFi") {
    if (shelf.length < 3) {
      shelf.unshift(book)
    }
  //}
  return shelf
}

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};

//
// var book = {
//   title: title,
//   mainCharacter:
//   pageCount:
//   genre:
// }
