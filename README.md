# BeatFinger

Trying to develop an engine-agnostic rhythm game in TDD, powered by [Deno](https://deno.land/) and [Phazer3](https://phaser.io/phaser3) (for now).

Motivations:

- Develop a simple but fun game, inspired by BeatSaber and GuitarHero
- Experiment TDD in a game development project
- Try to keep the main game logic engine-agnostic and stateless
- Give a test-drive to Deno, with a minimal amount of dependencies and tooling

## Progress Status

So far, I've got a HTML file with:
- a logo that moves when pressing directional keys;
- an arrow that falls and can either turn to yellow or red, if the player has pressed the corresponding key at the right time.

Next steps:
- fix the "explode" particles effect on key press;
- write a sequence of keys to press;
- make sure that each target is hit whenever the player pressed the corresponding key at the right time.

## Usage

After installing [Deno 1.0](https://deno.land/#installation):

```
$ git clone https://github.com/adrienjoly/deno-beatfinger.git
$ cd deno-beatfinger
$ ./serve.sh # then open the URL in your web browser
```
