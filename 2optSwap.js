// 2optSwap function
// resources used
// https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
// https://www.w3schools.com/jsref/jsref_reduce.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://www.w3schools.com/js/js_arrays.asp
// https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
// https://stackoverflow.com/questions/14202601/array-size-vs-array-length
// https://www.w3schools.com/jsref/jsref_length_array.asp
// https://www.w3schools.com/js/js_break.asp
// https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec
// https://stackoverflow.com/questions/5836833/create-a-array-with-random-values-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// https://stackoverflow.com/questions/15743805/how-to-decrement-work-in-java-script-for-loop
// https://www.le.ac.uk/users/rjm1/cotter/page_38.htm
// https://github.com/chriski777/TSP_Solver
// https://pathtogeek.com/traveling-salesman-problem-dynamic-programming-held-karp-youtube
// https://stackoverflow.com/questions/5038640/solver-for-tsp-like-puzzle-perhaps-in-javascript
// https://github.com/corbos/WillyLoman
// https://gist.github.com/jgcoded/d7ecba7aa3e210419471
// https://www.thecrazyprogrammer.com/2017/05/travelling-salesman-problem.html
// https://stackoverflow.com/questions/24144478/finding-shortest-circuit-in-a-graph-that-visits-x-nodes-at-least-once
// https://web.stanford.edu/class/cs97si/04-dynamic-programming.pdf
// https://www.geeksforgeeks.org/traveling-salesman-problem-tsp-implementation/
// https://github.com/AwardOfSky/Held-Karp/blob/master/src/karp/HeldKarp.java
// https://github.com/pedrohfsd/tsp/tree/develop
// https://www.quora.com/Are-there-any-good-examples-of-the-Held-Karp-algorithm-in-C++-Hard-to-find-example-code-to-solve-the-traveling-salesman-problem-Everyone-wants-to-just-talk-about-theory-and-not-show-how-to-actually-do-it-What-is-the-big-secret
// https://stackoverflow.com/questions/40708916/for-tsp-how-does-held-karp-algorithm-reduce-the-time-complexity-from-brute-forc
// https://stackoverflow.com/questions/3510519/variation-on-travelling-salesman-problem-pick-a-good-subroute-from-many-nodes
// https://stackoverflow.com/questions/7736674/what-is-a-practical-solution-to-the-travelling-salesman-prblem-using-google-map
// https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js
// https://www.codeproject.com/Articles/762581/%2FArticles%2F762581%2FHeld-Karp-algorithm-implementation-in-Csharp
// https://github.com/Sinclert/Heuristics-TSP/blob/master/HK_Optimal.java
// https://github.com/topics/travelling-salesman?o=desc&s=
// https://cs.stackexchange.com/questions/71802/is-a-two-opt-move-guaranteed-to-produce-a-non-worse-tour








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
    // the optimal path
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
    console.log("The optimal path is");
    console.log(produceTwoOptSwap(arr));
    console.log("And it took ");
    console.timeEnd('produceTwoOptSwap');
    console.log("To compute");
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
/*
these input sizes overflow the heap even on the AWS
let j = makeArray(800);
let k = makeArray(900);
let l = makeArray(1000);
let m = makeArray(2000);
let n = makeArray(3000);
let o = makeArray(5000);
let p = makeArray(10000);
let q = makeArray(100000);
let r = makeArray(500000);
let s = makeArray(750000);
let t = makeArray(1000000);
*/

print(a);
print(b);
print(c);
print(d);
print(e);
print(f);
print(g);
print(h);
print(i);
/*
print(j);
print(k);
print(l);
print(m);
print(n);
print(o);
print(p);
print(q);
print(r);
print(s);
print(t);
*/

