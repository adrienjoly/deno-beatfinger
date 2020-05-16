// $ deno test

import {
  assertEquals,
  assertArrayContains,
} from "https://deno.land/std/testing/asserts.ts";
import { computeGameState, PressedKeys } from "./beatfinger.ts";

Deno.test({
  name: "computeGameState exists",
  fn(): void {
    assertEquals(typeof computeGameState, "function");
  },
});

Deno.test({
  name: "computeGameState returns a target at the beginning of a game",
  fn(): void {
    const pressedKeys: PressedKeys = {
      down: false,
      up: false,
      left: false,
      right: false,
    }
    const state = computeGameState(pressedKeys);
    assertArrayContains(state.targets, [{ id: 0 }]);
  },
});

Deno.test({
  name: "computeGameState can mark the target as hit",
  fn(): void {
    const pressedKeys: PressedKeys = {
      down: false,
      up: false,
      left: false,
      right: false,
    }
    const { id, key, timestamp } = computeGameState(pressedKeys).targets[0];
    pressedKeys[key] = true;
    const state = computeGameState(pressedKeys).targets[0];
    assertArrayContains(state.targets, [{ id: 0, hit: true }]);
  },
});

Deno.test({
  name: "computeGameState returns another target, later in the game",
  fn(): void {
    const pressedKeys: PressedKeys = {
      down: false,
      up: false,
      left: false,
      right: false,
    }
    const state = computeGameState(pressedKeys);
    assertArrayContains(state.targets, [{ id: 1 }]);
  },
});

// TODO: computeGameState returns another target, later in the game
