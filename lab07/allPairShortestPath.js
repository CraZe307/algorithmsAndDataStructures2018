
// Lab 07 All Pair Shortest Path
// Resources Used
// Programming Discussions (Discord Server)
// https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/
// https://www.tutorialspoint.com/The-Floyd-Warshall-algorithm-in-Javascript




// create a function that takes input and returns a matrix with the shortest paths between all pairs of vertexes
function allPairShortestPath(graph)
{
    // create a dist variable for holding our distance value
    let dist = [];

    // loop over the length of the graph twice and put the values from the graph at that edge into our dist
    for(let i = 0; i < graph.length; i++)
    {
        for (let j = 0; j < graph.length; j++)
        {
            // push the values at graphs indexes to the distance array
            dist.push(graph[i][j]);
        }
    }
    //  we are going to do the same thing as before except we will loop over i, j, and k
    // to use the k to verify at which index is greater
    // dist [i][k] or [i][j]
    for(let i = 0; i < graph.length -1; i++)
    {
        for(let j = 0; j < graph.length -1; j++)
        {
            for(let k = 0; k < graph.length - 1; k++)
            {
                // after looping through the three times we are going to check at which
                // specific index is dist the greatest, and we will set the lower value to the value at the index
                if(dist[i][k] + dist[k][j] < dist[i][j])
                {
                    dist[i][j] = ((dist[i][k]) + dist[k][j]);
                }
            }
        }
    }
    // return the distance matrix
    return(dist);
}


// create an empty matrix function with a few modifications
function emptyMatrix(num)
{
    // blank array for the matrix
    let matrix = [];
    // row i for loop to create num i
    for (let i = 0; i < num; ++i)
    {
        matrix[i] = [];
        // j for loop for num j
        for (let j = 0; j < num; ++j)
        {
            for(let k = 0; k < num; ++k)
            {
                matrix[i][j] = 0;
                matrix[i][k] = 0;
            }
        }
    }
    return matrix;
}

// addEdge function directed instead of undirected
function addEdge(matrix, sourceVertex, destinationVertex, weight)
{
    // add a 1 in the matrix for the edge from source to dest
    matrix[sourceVertex][destinationVertex] = weight;
}


// simple print function
function printTest(graph)
{
    allPairShortestPath(graph);
    console.log("Your matrix with the shortest paths is " + graph);
    allPairShortestPath(graph);
    console.log(graph);


}



// testing area


// this is a messy way to go about adding the edges into the graph but basically it will work if [i][k] + [k][j] < [i][j]
// by assigning the smaller sides based upon the edges input below.  I could have just not made it 10 x 10 but I already
// put all the edges in so I wont change it now.

let graph2 = emptyMatrix(10);

addEdge(graph2, 0, 1, 50);
addEdge(graph2, 0, 2, 10);
addEdge(graph2, 0, 3, 4);
addEdge(graph2, 0, 4, 10);
addEdge(graph2, 0, 5, 70);
addEdge(graph2, 0, 6, 33);
addEdge(graph2, 0, 7, 44);
addEdge(graph2, 0, 8, 66);
addEdge(graph2, 0, 9, 33);

addEdge(graph2, 1, 0, 23);
addEdge(graph2, 1, 2, 14);
addEdge(graph2, 1, 3, 1);
addEdge(graph2, 1, 4, 11);
addEdge(graph2, 1, 5, 75);
addEdge(graph2, 1, 6, 39);
addEdge(graph2, 1, 7, 46);
addEdge(graph2, 1, 8, 96);
addEdge(graph2, 1, 9, 3);

addEdge(graph2, 2, 0, 5);
addEdge(graph2, 2, 1, 13);
addEdge(graph2, 2, 3, 47);
addEdge(graph2, 2, 4, 16);
addEdge(graph2, 2, 5, 30);
addEdge(graph2, 2, 6, 63);
addEdge(graph2, 2, 7, 84);
addEdge(graph2, 2, 8, 56);
addEdge(graph2, 2, 9, 25);

addEdge(graph2, 3, 0, 59);
addEdge(graph2, 3, 1, 12);
addEdge(graph2, 3, 2, 32);
addEdge(graph2, 3, 4, 80);
addEdge(graph2, 3, 5, 92);
addEdge(graph2, 3, 6, 36);
addEdge(graph2, 3, 7, 14);
addEdge(graph2, 3, 8, 66);
addEdge(graph2, 3, 9, 13);

addEdge(graph2, 4, 1, 58);
addEdge(graph2, 4, 2, 89);
addEdge(graph2, 4, 3, 45);
addEdge(graph2, 4, 0, 19);
addEdge(graph2, 4, 5, 79);
addEdge(graph2, 4, 6, 33);
addEdge(graph2, 4, 7, 54);
addEdge(graph2, 4, 8, 96);
addEdge(graph2, 4, 9, 38);

addEdge(graph2, 5, 1, 53);
addEdge(graph2, 5, 2, 11);
addEdge(graph2, 5, 3, 42);
addEdge(graph2, 5, 4, 10);
addEdge(graph2, 5, 0, 73);
addEdge(graph2, 5, 6, 53);
addEdge(graph2, 5, 7, 44);
addEdge(graph2, 5, 8, 90);
addEdge(graph2, 5, 9, 39);

addEdge(graph2, 6, 1, 55);
addEdge(graph2, 6, 2, 13);
addEdge(graph2, 6, 3, 14);
addEdge(graph2, 6, 4, 17);
addEdge(graph2, 6, 5, 73);
addEdge(graph2, 6, 0, 53);
addEdge(graph2, 6, 7, 47);
addEdge(graph2, 6, 8, 87);
addEdge(graph2, 6, 9, 69);

addEdge(graph2, 7, 1, 65);
addEdge(graph2, 7, 2, 43);
addEdge(graph2, 7, 3, 34);
addEdge(graph2, 7, 4, 27);
addEdge(graph2, 7, 5, 79);
addEdge(graph2, 7, 6, 55);
addEdge(graph2, 7, 0, 44);
addEdge(graph2, 7, 8, 62);
addEdge(graph2, 7, 9, 37);

addEdge(graph2, 8, 1, 45);
addEdge(graph2, 8, 2, 73);
addEdge(graph2, 8, 3, 57);
addEdge(graph2, 8, 4, 10);
addEdge(graph2, 8, 5, 78);
addEdge(graph2, 8, 6, 51);
addEdge(graph2, 8, 7, 45);
addEdge(graph2, 8, 0, 89);
addEdge(graph2, 8, 9, 32);

addEdge(graph2, 9, 1, 35);
addEdge(graph2, 9, 2, 63);
addEdge(graph2, 9, 3, 54);
addEdge(graph2, 9, 4, 97);
addEdge(graph2, 9, 5, 71);
addEdge(graph2, 9, 6, 59);
addEdge(graph2, 9, 7, 43);
addEdge(graph2, 9, 8, 23);
addEdge(graph2, 9, 0, 35);


let graph = emptyMatrix(5);
addEdge(graph, 0, 1, 23);
addEdge(graph, 0, 2, 40);
addEdge(graph, 0, 3, 47);
addEdge(graph, 0, 4, 12);

addEdge(graph, 1, 0, 20);
addEdge(graph, 1, 2, 15);
addEdge(graph, 1, 3, 11);
addEdge(graph, 1, 4, 21);

addEdge(graph, 2, 0, 53);
addEdge(graph, 2, 1, 63);
addEdge(graph, 2, 3, 97);
addEdge(graph, 2, 4, 86);

addEdge(graph, 3, 0, 48);
addEdge(graph, 3, 1, 21);
addEdge(graph, 3, 2, 34);
addEdge(graph, 3, 4, 99);

addEdge(graph, 4, 1, 23);
addEdge(graph, 4, 2, 41);
addEdge(graph, 4, 3, 46);
addEdge(graph, 4, 0, 94);


let graph3 = emptyMatrix(3);
addEdge(graph3, 0, 1, 12);
addEdge(graph3, 0, 2, 13);
addEdge(graph3, 0, 3, 14);

addEdge(graph3, 1, 0, 16);
addEdge(graph3, 1, 2, 18);
addEdge(graph3, 1, 3, 19);


addEdge(graph3, 2, 0, 20);
addEdge(graph3, 2, 1, 21);
addEdge(graph3, 2, 3, 23);



printTest(graph2);
printTest(graph);
printTest(graph3);
