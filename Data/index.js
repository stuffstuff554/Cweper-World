function Game() {
    console.warn("The DOM is now loaded!");

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const LevelMiddle = {
        "grid": [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    }

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
        speed: 1,
        Level: LevelMiddle
    }

    function drawLevel(CurrentLevel) {
        CurrentLevel.grid.forEach((row, y) => {
            row.forEach((tile, x) => {
                ctx.fillStyle = Colors[tile];
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
                ctx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
            });
        });
    }

    function getCurrentBlockType(player, level) {
        const playerGridX = Math.floor(player.x);
        const playerGridY = Math.floor(player.y);
    
        const blockType = level.grid[playerGridY][playerGridX];
        
        return blockType;
    }
    

    function drawPlayer() {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x * tileSize, player.y * tileSize, player.width, player.height);
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawLevel(LevelMiddle);
        drawPlayer();

        if (getCurrentBlockType(player, player.Level) == 2) {
            // Set the text properties (font, size, color)
            ctx.font = "30px Arial";
            ctx.fillStyle = "black"; // Text color
            ctx.textAlign = "center"; // Aligns text to the center of the specified position

            // Render filled text at position (x, y)
            ctx.fillText("Hit 'Q' to loot.", canvas.width / 2, canvas.height / 2);
        }
    }

    function movePlayer(e) {
        switch (e.key) {
            case 'w':
                player.y -= player.speed;
                break;
            case 's':
                player.y += player.speed;
                break;
            case 'a':
                player.x -= player.speed;
                break;
            case 'd':
                player.x += player.speed;
                break;
        }
        update(); // Redraw the canvas after moving the player
    }

    window.addEventListener('keydown', movePlayer);

    // Initial draw
    update();
}

document.addEventListener('DOMContentLoaded', function () {
    requestAnimationFrame(Game);
});
