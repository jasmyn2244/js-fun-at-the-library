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

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
