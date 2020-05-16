export interface PressedKeys {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

interface Target {
  id: number;
}

interface GameState {
  incrX: number;
  incrY: number;
  targets: Target[];
}

export function computeGameState(pressedKeys: PressedKeys): GameState {
  const gameState: GameState = {
    incrX: 0,
    incrY: 0,
    targets: [],
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
