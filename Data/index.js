var movePlayer = "";

function Game() {
    console.warn("The DOM is now loaded!");

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const Level1 = {
        "grid": [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ]
    }
    
    LevelAT = 1;

    const tileSize = 50;

    const Colors = {
        0: 'white', // Empty space
        1: 'grey', // Wall
        2: 'gold', // Coin
        3: 'blue', // Block
        4: 'green' // Finish
    }

    const player = {
        x: 1,
        y: 1,
        width: tileSize,
        height: tileSize,
        color: 'red',
        speed: 1
    }

    function DrawLevel(CurrentLevel) {
        CurrentLevel.grid.forEach((row, y) => {
            row.forEach((tile, x) => {
                ctx.fillStyle = Colors[tile];
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
                ctx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
            });
        });
    }

    if (LevelAT == 1) {
        DrawLevel(Level1);
    }

    function movePlayer(e) {
        switch(e.key) {
            case 'w':
                player.y -= player.speed;
                break;
            case 's':
                player.y += player.speed;
                break;
            case 's':
                player.x -= player.speed;
                break;
            case 'd':
                player.x += player.speed;
                break;
        }
    }

    window.addEventListener('keydown', movePlayer)

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x * tileSize, player.y * tileSize, player.width, player.height);
}

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    

    requestAnimationFrame(Game);
});