// dijkstras algorithm
// resources used
// https://stackoverflow.com/questions/8238456/how-to-get-value-at-a-specific-index-of-array-in-javascript
// https://stackoverflow.com/questions/17077680/how-to-access-weight-property-of-a-node-in-a-force-layout
// https://www.w3schools.com/jsref/jsref_min.asp
// https://hackernoon.com/how-to-implement-dijkstras-algorithm-in-javascript-abdfd1702d04

// *** ERRORS KNOWN ***
// at some point within building this I broke the dist part
// after creating the while loop running over current the dist
// stopped updating from infinity to the value given.
// So dist just stays at infinity for everything.
// I think it is a problem with my if statement somewhere or perhaps how I am getting the weight
// I ran out of time to complete the assignment or I would have looked into this more.

// initialize the dist to infinity and the source to 0
// while there are unmarked vertices
// select the unmarked vertex v with the lowest dist
// mark v with the distance dist
// for each edge (v,w)
// dist(w) = min{dist(w), dist(v) + weight of (v,w)


// function to run dijkstra's algorithm where s is our starting vertex
// and graph is our graph
function dijsktra(graph, s)
{
    // get a variable to hold the weight of each edge
    // get an array for distance
    var dist = [];
    // get an array for visited
    var visited = [];
    // create an array to hold our current
    var current = [];
    // for loop around current to have a copy of the array to remove from
    for(var k = 0; k < graph.length; k++)
    {
        current.push(graph[k]);
    }
    // for loop to set everything to infinity except for s
    // we can set the dist for source out here and not in the loop
    // so our loop will start at 1
    dist[s] = 0;
    for (var i = 1; i < graph.length; i++)
    {
        dist[i] = Infinity;
    }

    // now we need to compare the distances between the two neighbors to know where to go next
    // this is where I will start my while loop
    // this will run while dist is not empty
    // I am going to get the dist of the node and then push it to visited in order and remove it from dist
    visited.push(s);
    current.splice(current.indexOf(s), 1);
    // while loop around the for loop to run over the length of the list
    while(current.empty === false)
    {
        // two variables to hold our left and right of s
        var neighborLeft = current[s-1];
        var neighborRight = current[s+1];
        for (var j = 1; j <= current.length; j++)
        {
            if(j === neighborLeft)
            {
                // put the weight of the graph edge into the dist
                var weightLeft = current[j];
                dist.push(weightLeft);

            }
            else // (j === neighborRight)
            {
                // out the weight of the graph edge into the dist
                var weightRight = current[j];
                dist.push(weightRight);
            }

            // get the minimum value from distance
            var minL = Math.min(dist[neighborLeft]);
            var minR = Math.min(dist[neighborRight]);
            // if the left is smaller than the right
            if(minL < minR)
            {
                // push the left vertex to visited
                visited.push(neighborLeft);
                // remove the left vertex from our current array
                current.splice(current.indexOf(neighborLeft), 1);
                // set our s = neighborLeft
                s = neighborLeft;
            }
            else // minL > minR
            {
                // push the right vertex to visited
                visited.push(neighborRight);
                // remove the right vertex from our current array
                current.splice(current.indexOf(neighborRight), 1);
                // set s = neighborRight
                s = neighborRight;
            }
        }
    }
    return dist;
}


// functions empty matrix and addEdge from the last lab
function emptyMatrix(num)
{
    // blank array for the matrix
    let matrix = [];
    let weight = 0;
    // row i for loop to create num i
    for (let i = 0; i < num; ++i)
    {
        matrix[i] = [];
        // j for loop for num j
        for (let j = 0; j < num; ++j)
        {
            matrix[i][j] = weight;
        }
    }
    return matrix;
}

function addEdge(matrix, sourceVertex, destinationVertex, weight)
{
    // add the weight in the matrix for the edge from source to dest
    matrix[sourceVertex][destinationVertex] = weight;
}

var graph = emptyMatrix(10);
addEdge(graph, 0, 2, 40);
addEdge(graph, 1, 3, 10);
addEdge(graph, 0, 4, 2);
var graph2 = emptyMatrix(10);
addEdge(graph2, 0, 1, 23);
addEdge(graph2, 1, 4, 67);
addEdge(graph2, 7, 1, 33);
addEdge(graph2, 9, 5, 3);
var graph3 = emptyMatrix(10);
addEdge(graph3, 1, 2, 4);
addEdge(graph3, 3, 2 ,9);
addEdge(graph3, 8, 9, 10000);
addEdge(graph3, 4, 5, 6);

function test(graph)
{
    console.log("Your matrix / graph is ");
    console.log(graph);
    console.log("And the dijkstra's algorithm of your matrix / graph is ")
    console.log(dijsktra(graph, 0));
}


test(graph);
test(graph3);
test(graph2);
