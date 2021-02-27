function bfs(rootNode, vertices, edges){
    // rootNode = vertices[0]
    // let queue = []
    // vertices.shift()
    // while(vertices.length != 0) {
        
    // }
}

function findAdjacent(vertices, edges, nodeName){
    return edges.filter(edge => {
        return edge.includes(nodeName)
    }).map( edge => {
        return edge.filter(node => {
            return (node != nodeName)
        })[0]
    }).map(name => {
        return findNode(name, vertices)
    }).filter(node => node.distance == null)  
}

function findNode(nodeName, vertices){
    return vertices.find(vertex => vertex.name == nodeName)
}