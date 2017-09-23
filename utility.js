const BLOCK_SIZE = 10;

function horizontalBlocks() {
    return windowWidth() / BLOCK_SIZE;
}

function verticalBlocks() {
    return windowHeight() / BLOCK_SIZE;
}

function windowWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

function xGridBlockSize() {
    return Math.floor(windowWidth() / horizontalBlocks())
}

function windowHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function yGridBlockSize() {
    return Math.floor(windowHeight() / verticalBlocks())
}

function initialize() {
    setCanvasSize();

    // make sure the keyHandler exists
    keyHandler.getInstance().startListening();
}

function setCanvasSize() {
    // set up our canvas width and height
    const canvas = document.getElementById('playingField');
    
    // get our sidebarwidth from the css variable. We need to get rid of the 'px' so replace all non-digit chars
    const cssStyle = getComputedStyle(document.body);
    const sidebarWidth = Number(cssStyle.getPropertyValue('--sidebar-width').replace(/\D/g,''));

    const viewportHeight = windowHeight();
    const width = windowWidth() - 2 * sidebarWidth;
    
    canvas.width  = width;
    canvas.height = viewportHeight; 
    canvas.style.width  = width + 'px';
    canvas.style.height = viewportHeight + 'px';
}