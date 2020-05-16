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
