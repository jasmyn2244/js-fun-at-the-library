function createTitle(bookIdea) {
  return ("The " + bookIdea)
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
}



function saveReview (newReview, reviews) {
    if (reviews.includes(newReview)) {
      return reviews
    } else {
      reviews.push(newReview)
    }
  }

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function writeBook (bookTitle, bookCharacter) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: "fantasy"
/* this can also be written like this. It's probably better to assign the object to a variable
var book = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: "fantasy"
}
return book
*/

  }
  return book
}

function editBook (book) {
  book.pageCount = book.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
