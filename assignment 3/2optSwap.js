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
    return cache;
}

let a = [0, 3, 1, 2, 4, 0];
let b = [1,3,4,6,7,3,7,8,1,2,5,6,7];
console.log(produceTwoOptSwap(a));
console.time('produceTwoOptSwap');
console.log(produceTwoOptSwap(b));
console.timeEnd('produceTwoOptSwap');