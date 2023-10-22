function convertToAdjList(adjMatrix) {
    dimensions = adjMatrix.length
    //console.log("Start: " + dimensions)
    adjList = []
    for(i=0; i < dimensions; i++)
    {
        //console.log("Row " + i)
        adjList.push([])
        //adjList.push(new Set([]))
        for(j=0; j < dimensions; j++)
        {
            //console.log(adjMatrix[i][j])
            if(adjMatrix[i][j] == 1)
            {
                adjList[i].push(j)
                //adjList[i].add(j+1)
            }
        }
    }
    //console.log(adjList)
    return adjList;
}

//console.log(convertToAdjList([[0,1,1],[0,1,0],[1,0,0]]))

function convertToAdjMatrix(adjList) {
    dimensions = adjList.length
    //console.log("Start: " + dimensions)
    adjMatrix = []
    stack = []
    for(i = 0; i < dimensions; i++)
    {
        adjMatrix.push([])
        for(j = 0; j < dimensions; j++)
        {
            if(j < adjList[i].length)
            {
                stack.push(adjList[i][j])
            }
            adjMatrix[i].push(0)
        }
        for(k = 0; k < stack.length; k++)
        {
            adjMatrix[i][stack[k]] = 1
        }
        stack = []
        //console.log(adjMatrix)
    }
    return adjMatrix
}

//console.log(convertToAdjMatrix([[1,2],[1],[0]]))