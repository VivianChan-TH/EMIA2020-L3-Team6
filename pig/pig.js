import { Application } from "@splinetool/runtime";
console.log("connected to pig.js");
const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/4spvtgEZ-WsZJQxM/scene.splinecode");
