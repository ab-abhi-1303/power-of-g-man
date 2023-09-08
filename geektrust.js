const fs = require('fs');

class Point {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}

const directions = ['N', 'E', 'S', 'W'];
const noDirection = 'Z';

function getDistancePower(source, destination) {
    const xDifference = Math.abs(source.x - destination.x);
    const yDifference = Math.abs(source.y - destination.y);

    return (xDifference + yDifference) * 10;
}

function getDirectiontoMove(source, destination) {
    let x, y;

    if (destination.x > source.x) {
        x = directions[1];
    } else if (destination.x < source.x) {
        x = directions[3];
    } else {
        x = noDirection;
    }

    if (destination.y > source.y) {
        y = directions[0];
    } else if (destination.y < source.y) {
        y = directions[2];
    } else {
        y = noDirection;
    }

    return [x, y];
}

function getDirectionPower(currentDirection, directionToMove) {
    if (directionToMove[0] === noDirection && directionToMove[1] === noDirection) {
        return 0;
    } else if (directionToMove[0] === noDirection) {
        if (currentDirection === directionToMove[1]) return 0;
        else if (currentDirection === directions[3] || currentDirection === directions[1])
            return 1;
        else return 2;
    } else if (directionToMove[1] === noDirection) {
        if (currentDirection === directionToMove[0]) return 0;
        else if (currentDirection === directions[0] || currentDirection === directions[2])
            return 1;
        else return 2;
    } else {
        if (currentDirection === directionToMove[0] || currentDirection === directionToMove[1])
            return 1;
        else return 2;
    }
}

function main(data) {
    const lines = data.trim().split('\n');
    const sourceLine = lines[0].split(' ');
    const destLine = lines[1].split(' ');

    const srcX = parseInt(sourceLine[1]);
    const srcY = parseInt(sourceLine[2]);
    const srcDirection = sourceLine[3];
    const destX = parseInt(destLine[1]);
    const destY = parseInt(destLine[2]);

    const src = new Point(srcX, srcY, srcDirection);
    const dest = new Point(destX, destY);

    const distancePower = getDistancePower(src, dest);
    const movableDirection = getDirectiontoMove(src, dest);
    const directionPower = getDirectionPower(src.direction, movableDirection) * 5;

    const powerRemaining = 200 - (distancePower + directionPower);
    console.log('POWER ', powerRemaining);
    return 'POWER ' + powerRemaining;
}

const filename = process.argv[2];
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }
    main(data);
});

module.exports = main;