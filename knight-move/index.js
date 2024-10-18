function knightMoves(start, target){
    const directions = [
        [2,1], [2,-1],[-2, 1], [-2, -1],
        [1, 2],[1, -2],[-1, 2], [-1, -2]
    ]

    const boardSize = 8 //assuming an 8*8 chessboard
      
    // Helper function to check if the move is within bound
    function isWithinBounds([x,y]){
        return x >= 0 && x < boardSize && y >=0 && y < boardSize
    }

    // Helper function to reconstruct the path from a given node
    function reconstructpath(cameFrom, current){
        const path =[]
        while(current){
            path.unshift(current.position)
            current = cameFrom[current.position]
        }
        return path
    }

    // BFS setup
    const queue = [{position: start, moves: 0}] //each queue entry holds a position and number of moves
    const cameFrom = {} // Track tje previous position for each visited position
    cameFrom[start] = null //starting point has no previous position
    const visited = new Set()//set to track visited positions
    visited.add(start.toString())


    while (queue.length > 0){
        const {position, moves} = queue.shift()
        const [x, y] = position

        // if we reach the target, reconstruct and return the path
        if (x === target[0] && y === target[1]){
            const path = reconstructpath(cameFrom, {position})
            console.log(`You made it ${moves} moves! Here's your path:`)
            path.forEach(pos => console.log(pos))
            return path
        }

        // Explore all possible knight moves from the current position
        for(let [dx, dy] of directions){
            const newPos = [x + dx, y + dy]

            if (isWithinBounds(newPos)  && !visited.has(newPos.toString())){
                queue.push({position: newPos, moves: moves +1})
                cameFrom[newPos] = {position} // store the current position as the came 
                visited.add(newPos.toString()) // mark the new position as visited
            }
        }
    }
    return null

    
}
knightMoves([0, 0], [7, 7]);
