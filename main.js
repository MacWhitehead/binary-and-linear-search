//linear search is good for less data and data that is not sorted. 
//has to go through each item in an array. Most basic search alg. 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function linearSearch(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === element) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch(arr, 5))
console.log(linearSearch(arr, -5))


//Binary search:
// BASE CONDITION: If starting index is greater than ending 
// index return false.
// Compute the middle index.
// Compare the middle element with number x. If equal return true.
// If greater, call the same function with ending index = middle-1 
// and repeat step 1.
// If smaller, call the same function with starting index = middle+1 
// and repeat step 1.

function binarySearch(arr, element) {
    let start = 0; 
    let end = arr.length - 1; 
    let middle = (end / 2);

    while(arr[middle] !== element && start <= end) {
        if(arr[middle] < element) {
            start = middle + 1
        } else {
            end = middle - 1;
        } middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === element ? middle : -1;
}
console.log(binarySearch(arr, 7));
console.log(binarySearch(arr, 3))

//Set start to 0, end to the array length -1 (since zero based)
//middle is half of the array. While the array middle is not equal 
//to the element, and the start is less than or equal to end, 
//check to see if the array middle is less than the element we're 
//searching for. If it is less than it, update the starting point to 
//the middle point plus one (if middle is 5, change it to 6 so 
//we don't check 5 again). Else, we're going to move the end point 
//to the middle and - 1 (if middle is 5, change it to 4). 
// Make sure the middle is rounded up correctly. Finally, return 
//based on a ternary. If the element is found, it's going to be
// the middle since it cuts the search in half each time until it 
//finds what it's searching for. If it doesn't find it, return -1.