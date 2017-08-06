const HORIZONTAL_BLOCKS = 160;
const VERTICAL_BLOCKS = 90;

function windowWidth() {
    return 1024;
    /*
    Getting ahead of myself, first with fixed width/height!
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
     */
}

function xGridBlockSize() {
    return Math.floor(windowWidth() / HORIZONTAL_BLOCKS)
}

function windowHeight() {
    return 768;
    /*
    Getting ahead of myself, first with fixed width/height!
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
     */
}

function yGridBlockSize() {
    return Math.floor(windowHeight() / VERTICAL_BLOCKS)
}