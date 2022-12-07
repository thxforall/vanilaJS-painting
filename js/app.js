const canvas = document.querySelector("canvas");

// ctx(context) brush
const ctx = canvas.getContext("2d");

// canvas size
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(220 + 20, 200, 15, 100);
ctx.fillRect(380 + 20, 200, 15, 100);
ctx.fillRect(275 + 20, 200, 60, 200);

ctx.arc(302 + 20, 150, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(280 + 20, 150, 10, Math.PI, 2 * Math.PI);
ctx.arc(320 + 20, 150, 10, Math.PI, 2 * Math.PI);
ctx.fill();
