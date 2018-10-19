// Assignment 2 part 3
// Implement mergesort but it is iterative (no recursion) and in place
// *** RECOURCES USED ***
// https://stackoverflow.com/questions/1557894/non-recursive-merge-sort
// https://www.w3schools.com/jsref/jsref_unshift.asp
// https://www.w3schools.com/jsref/jsref_obj_array.asp
// https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript



// mergesort function
function mergesort(x)
{
    // holder
    let tmp = [];
    // iterate over x unshifting to the front
    // inserting elements at the front and not the back
    for (let i = 0; i < x.length; ++i)
    {
        // adds to the front of tmp
        tmp.unshift([i, i]);
    }

    // every cycle of mergesort will increase size by 2 so if
    // it is greater than or equal to 2 it will terminate
    // when it gets small enough
    while (tmp.length >= 2) {
        // aLo is the lowest index of the left most divide
        // aHi is the greatest index of the left most divide
        // bLo is the lowest index of the right most divide
        // bHi is the greatest index of the right most divide
        // set the left most split (aLo, aHi) to the last element of the tmp array
        // pop removes the last element of an array
        let [[aLo, aHi], [bLo, bHi]] = [tmp.pop(), tmp.pop()];
        // if the left most lowest index is the same as the right most lowest index
        // same for greatest index with respects to a and b
        if (aLo === bLo && aHi === bHi)
        {
            // unshift the aLo, aHi to the tmp array
            tmp.unshift([aLo, aHi]);
            // step forward an iteration
            continue;
        }
        // this will set lo to our ABSOLUTE low, the lowest between aLo and bLo
        let lo = Math.min(aLo, bLo);
        // ?: is like an if else statement
        // set mid to aHi if aLo < bLo
        // if aLo > bLo set mid to bHi
        let mid = aLo < bLo ? aHi : bHi;
        // set hi to the ABSOLUTE maximum between the two
        let hi = Math.max(aHi, bHi);
        // if lo is less than or equal to hi continue one iteration
        if (lo >= hi)
        {
            continue;
        }
        // call the merge function on our mid abs(lo) and abs(hi)
        merge(x, lo, mid, hi);
        // unshift to the front of tmp lo, hi
        tmp.unshift([lo, hi]);
    }
    return x;
}


// helper function to merge the arrays
// same from lab 03 and the slides
function merge(x, lo, mid, hi)
{
    let tmp = [];
    var a = lo,
        b = mid + 1;
    for (var k = lo; k <= hi; k++) {
        if (a <= mid && (b > hi || x[a] < x[b])) {
            tmp[k] = x[a++];
        } else {
            tmp[k] = x[b++];
        }
    }
    for (var k = lo; k <= hi; k++) {
        x[k] = tmp[k];
    }
}


// testing area
function printTest(arr)
{
    // output the arr before mergesorting
    console.log("The original array is " + arr);
    // and the mergesorted array is
    mergesort(arr);
    console.log("The sorted array is " + arr);
}
var arr = [3, 1, 7, 9, 4];
printTest(arr);


