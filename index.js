const canvas = document.querySelector('canvas');

const vp = window.visualViewport;
let vpHeight = vp.height;
let vpWidth = vp.width;

canvas.setAttribute("height", vpHeight);
canvas.setAttribute("width", vpWidth);

const ctx = canvas.getContext('2d');

ctx.fillStyle = "black";
ctx.fillRect(0, 0, vpWidth, vpHeight);

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

