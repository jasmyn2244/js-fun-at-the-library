function shelfBook(book, shelf) {
    //if (book.genre === "sciFi") {
    if (shelf.length < 3) {
      shelf.unshift(book)
    }
  //}
  return shelf
}

function unshelfBook() {

}

module.exports = {
  shelfBook,
  unshelfBook,
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
