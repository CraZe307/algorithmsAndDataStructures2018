function heldKarp(cities, start)
{
    console.log("cities: " + cities);
    console.log("cities length: " + cities.length);
    let cache = [];
    let cityLength = cities.length;

        for(let i = 0; i <= cities.length - 1; i++)
        {
            for(let j = 1; j < cities.length; j++)
            {
              if(cityLength === 2)
              {
                  // set the cache to be equal to the edge between 0 and 1
                  cache = cities[j][start];
                  // setting city length to 0 to get out of the loop
                  cityLength = 0;
                  break;
              }
              else if(cityLength > 2) // there are more than 2 cities
              {
                  let c = start + j;
                  // return the minimum of each city in cities unless its start
                  // reduce the total number of cities by adding the weight of the edge and then incrementing start
                  // TODO cities - start is not working because its an array minus a value
                  cache += Math.min((heldKarp((cities - start), c)) + cities[j][c]);
              }

            }

        }

        return cache; // length of the edge between the two cities
}

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
            matrix[i][j] = 0;
        }
    }
    return matrix;
}


function addEdge(matrix, sourceVertex, destinationVertex, weight)
{
    // add a 1 in the matrix for the edge from source to dest
    matrix[sourceVertex][destinationVertex] = weight;
    // add a 1 in the matrix for the edge from dest to source
    matrix[destinationVertex][sourceVertex] = weight;
}

let graph = emptyMatrix(2);
let graph2 = emptyMatrix(3);
addEdge(graph, 0, 1, 5);
addEdge(graph2, 1, 2, 6);
addEdge(graph2, 0, 1, 5);
console.log("2");
console.log(heldKarp(graph, 0));
console.log("3");
console.log(heldKarp(graph2, 0));