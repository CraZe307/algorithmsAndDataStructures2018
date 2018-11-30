// 2optSwap function
// resources used









function twoOptSwap(route, i, k)
{
    // return the given route
    // route.slice(0,i - 1) will cut the routes input cities from 1 to i -1
    // the first piece will be from 0 to i - 1
    // the second piece from i - 1 to routes.length
    // this is where it stays the same
    // route.slice(i - 1, k).reverse() will cut the input cities from i to k
    // this is the second condition in our tasks from above which is why we are reversing
    // route.slice(k) will just cut the routes input cities from k to n
    // these stay in order as they are the last of the 3 conditions
    return route.slice(0, i - 1).concat(route.slice(i - 1, k).reverse(), route.slice(k));
}



// input is the route or array of stops
function produceTwoOptSwap(route)
{
    // holder array for our the swaps that we make throughout the 2optswap
    let cache = [];
    // value for the while loop later
    let loop = 0;
    // return array
    let value = [];


    // these for loops will get us the i, k we are after for the actual twoOptSwap below
    // we want the cities 1 to i -1 to be in the same order
    // and the cities i to k to be reversed
    // and the cities k + 1 to n to be in the same order
    // with i = 2 and k = i + 1 we are setup with the correct order to accomplish the above 3 tasks
    // i = 2 < routes.length - 1 will run until one before the end of the tour
    // while the inner loop k will always be one ahead and run until the actual end of the tour
    for (let i = 2; i < route.length - 1; i++)
    {
        for (let k = i + 1; k < route.length; k++)
        {
            // this is where we swap the two with k being one ahead
            cache.push(twoOptSwap(route, i, k));
        }
    }
    // we can now pop arrays off the end of cache and check their values to find the smallest
    // pop off 2 routes from the array, check them and set value to the smallest of the two, repeat until
    // we are out of the loop and then return value and we will have the smallest array or the shortest route
    while(loop < cache.length)
    {
        // first value off the end of the array
        let firstPop = cache.pop();
        // next value off the end of the array
        let nextPop = cache.pop();
        // check whether the first value or the next value is smaller
        if(firstPop < nextPop)
            value = firstPop;
        else // if nextPop < firstPop
            value = nextPop;


        loop++;
    }
    return value;
}


// function taken from
// https://stackoverflow.com/questions/5836833/create-a-array-with-random-values-in-javascript
// just to create random arrays
function makeArray(n)
{
    let arr = [];
    for(let i = 0; i < n; i++)
    {
        arr.push(Math.round(Math.random() * n));
    }
    return arr;
}

function print(arr)
{
    //console.log("The shortest route for a route of " + arr.length + " is: ");
    console.log("input size: " + arr.length);
    console.time('produceTwoOptSwap');
    //console.log(produceTwoOptSwap(arr));
    produceTwoOptSwap(arr);
    //console.log("And it took ");
    console.timeEnd('produceTwoOptSwap');
    // console.log("To complete");
}

// testing area
let a = makeArray(10);
let b = makeArray(50);
let c = makeArray(100);
let d = makeArray(200);
let e = makeArray(300);
let f = makeArray(400);
let g = makeArray(500);
let h = makeArray(600);
let i = makeArray(700);


// these break the stack trace
let j = makeArray(800);
//let k = makeArray(900);


print(a);
print(b);
print(c);
print(d);
print(e);
print(f);
print(g);
print(h);
print(i);
print(j);
//print(k);
