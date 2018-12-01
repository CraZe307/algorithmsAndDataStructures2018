function heldKarp(cities, start)
{
    let cost = [];
    let dist = [];
    // start = 0
    let num2;
    let distance = 0;
    let distance1 = 0;

    for(let i = 0; i < cities.length; i++)
    {
        dist.push(cities[i]);
    }

    if(cities.length === 2)
    {
            start = dist[0];
            num2 = dist[1];
            cost = ((num2 - start) + (dist[0] + dist[1]) );
    }
    else if(cities.length > 2)
    {

        for(let j = 1; j <= cities.length - 1; j++)
        {
            for(let b = 0; b < j; b++) {

                start = dist[b];
                if (start < dist[j]) {
                    distance = dist[j] - start;
                }
                else if (dist[j] <= start)// if dist[j] < start
                {
                    distance1 = start - dist[j];
                }
                cost = Math.min(distance, distance1) + dist[j] + dist[b]
            }
        }
    }
    return cost;
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
    console.time('heldKarp');
    console.log("the optimal route length of the tour is ");
    console.log(heldKarp(arr,0));
    console.log("And it took ");
    console.timeEnd('heldKarp');
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