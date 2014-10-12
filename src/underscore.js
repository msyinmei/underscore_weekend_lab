var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    var results = [];
    if (n > 0 && n !== undefined){
      for (var i = 0; i < n; i++) {
        results.push(array[i]);
      }
      return results;
    } else if( n <= 0 && n !== undefined){
        return null;
    } else {
      return array[0];
    }
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    var results = [];
    if (n !== undefined){
      if (n <= 0) {
        return null;
      }else if (n > array.length){
        return array;
      }else {
        for (var i = array.length-(n); i < array.length; i++) {
          results.push(array[i]);
        }
        return results;
      }
    } else {
      return array[array.length-1];
    }
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var results = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i])
        return results[i];
      }
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {

  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {

  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {

  }
};
module.exports = myFunctions;
