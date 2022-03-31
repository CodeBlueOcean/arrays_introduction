const strings = 
['x','a', 'alien', 'b','c','d'];
//   0   1   2      3   4   5
//4(4 items above)*4(if on a 32 bit system as 8 bit in one row, 4 shelfs) = 16 bytes of storage

strings[2] // O(1)


//push
strings.push('e'); //O(1)

//pop
strings.pop(); //Remove e
strings.pop(); //Remove d, time complexity O(1)

//unshift
strings.unshift('x'); // time complexity O(n) because you add an item 

//splice
strings.splice(2, 0, 'alien') // O(n/2) because we did half of the operation, our rule of bigO is O(n)

console.log(strings) // to be left with ['a','b','c']



