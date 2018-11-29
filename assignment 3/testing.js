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
function addEdge(matrix, sourceVertex, destinationVertex, dist)
{
    // add a 1 in the matrix for the edge from source to dest
    matrix[sourceVertex][destinationVertex] = dist;
    // add a 1 in the matrix for the edge from dest to source
    matrix[destinationVertex][sourceVertex] = dist;
}

let graph = emptyMatrix(5);
addEdge(graph, 0, 1, 5);


let cache = [];
let cityLength = cities.length;

for (let i = 0; i < cities.length - 1; i++)
{
    for (let j = 1; j < cities.length; j++)
    {
        if (cityLength === 2) {
            cache = cities[j][i];
            cityLength++
        }
    }
}