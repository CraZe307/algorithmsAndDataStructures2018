// function for heldKarp



function heldKarp(cities, start)
{
    if(cities.length === 2)
    {
        return 
    }
}

function emptyMatrix(num) {
    // blank array for the matrix
    let matrix = [];
    // row i for loop to create num i
    for (let i = 0; i < num; ++i) {
        matrix[i] = [];
        // j for loop for num j
        for (let j = 0; j < num; ++j) {
            matrix[i][j] = 0;
        }
    }
    return matrix;
}



function addEdge(matrix, sourceVertex, destinationVertex, dist) {
    // add a 1 in the matrix for the edge from source to dest
    matrix[sourceVertex][destinationVertex] = dist;
    // add a 1 in the matrix for the edge from dest to source
    matrix[destinationVertex][sourceVertex] = dist;
}

// print test function
function print(graph) {
    console.log("The shortest path of your tour is: ");
    let result = heldKarp(graph, 0);
    console.log(result);
}


// testing

// each edge is going to represent a stop
let graph = emptyMatrix(10);
addEdge(graph, 0, 1, 10);
addEdge(graph, 1, 2, 4);
addEdge(graph, 2, 3, 1);
addEdge(graph, 4, 5, 54);
addEdge(graph, 5, 6, 22);
addEdge(graph, 6, 7, 5);
addEdge(graph, 7, 8, 3);
addEdge(graph, 8, 9, 67);

print(graph);


