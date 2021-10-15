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
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: "fantasy"

  }
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}
