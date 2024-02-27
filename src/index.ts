export {};

// Tuple type of length has no element at index X in TS

// EXAMPLE 1 - Declaring an array instead of a tuple

const arr: string[] = ['bobbyhadz.com'];

console.log(arr[1]); // 👉️ undefined

// ---------------------------------------------------

// // EXAMPLE 2 - Declaring an array of multiple types

// // ✅ Array of mixed types
// const mixedArr: (string | number)[] = ['hello', 100];

// // ✅ Array of objects
// const arrOfObjects: { id: number; name: string }[] = [
//   {
//     id: 1,
//     name: 'Bobby',
//   },
//   {
//     id: 2,
//     name: 'Hadz',
//   },
// ];

// ---------------------------------------------------

// // EXAMPLE 3 - Adjust the tuple's length or correct the index

// const arr: [string, string] = ['bobby', 'hadz'];

// console.log(arr[1]); // 👉️ "hadz"
