'use strict';

function main() {
    try {
		console.log("try");
		throw new Error("Trow Error!");
        return 1;
    } catch(e) {
        console.log("name: " + e.name + "\nmessage: " + e.message + "\nstack: " + e.stack);
    } finally {
        console.log("finally");
    }
}

main();