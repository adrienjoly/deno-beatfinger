#!/bin/bash

deno bundle beatfinger.ts >bundle.js
deno run --allow-net --allow-read https://deno.land/std/http/file_server.ts
