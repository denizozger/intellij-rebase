/**
 * My first function
 */

(function() {

    const faces = ['ʘ‿ʘ', 'ಠ_ಠ', 'ʕ•ᴥ•ʔ']

    for (const face of faces) {
        try {
            console.log(face);
        } catch (err) {
            console.error(err);
        }
    }
})();
