interface PressedKeys {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

interface GameState {
  incrX: number;
  incrY: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function computeGameState(pressedKeys: PressedKeys): GameState {
  const gameState: GameState = {
    incrX: 0,
    incrY: 0,
  };
  if (pressedKeys.right) {
    gameState.incrX += 3;
  } else if (pressedKeys.left) {
    gameState.incrX -= 3;
  }
  if (pressedKeys.down) {
    gameState.incrY += 3;
  } else if (pressedKeys.up) {
    gameState.incrY -= 3;
  }
  return gameState;
}
