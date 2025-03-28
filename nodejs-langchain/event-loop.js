import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

console.log("1. Início");

fs.readFile(__filename, () => {
    console.log("2. I/O callback");

    process.nextTick(() => {
        console.log("3. process.nextTick dentro do I/O");
    });

    setImmediate(() => {
        console.log("4. setImmediate dentro do I/O");
    });
});

process.nextTick(() => {
    console.log("5. process.nextTick fora do I/O");
});

setImmediate(() => {
    console.log("6. setImmediate fora do I/O");
});

console.log("7. Fim");
