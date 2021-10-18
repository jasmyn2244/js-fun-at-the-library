function createTitle(bookIdea) {
  //console.log what I'm returning so that I can see if it matches what it's suppoed to.
  //If I put the console.log after the return, it won't print, because return stops the function.
  //console.log ("The " + bookIdea)
  return ("The " + bookIdea)
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character
}



function saveReview (newReview, reviews) {
//this is how I write this with a loop. I'm saying, if the review already exists, do nothing (aka just return my array, that reaturn will stop the function so it never gets to the second return in the function)
//but if it loops through the entire array, and my if statement never evaluated to true (aka my review didn't equal any other reviews, nothing happens, we get kicked out of the loop, and the last return is executed)
  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i] === newReview)
    return reviews
  }

  return reviews.push(newReview)
    // if (reviews.includes(newReview)) {
    //   return reviews
    // } else {
    //   reviews.push(newReview)
    // }
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
