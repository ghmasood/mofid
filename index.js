const pos = { x: 0, y: 0 };
const element = { x: 0, y: 0, width: 0, height: 0 };

const saveCursorPosition = function (x, y) {
  pos.x = ((x - element.x) / element.width).toFixed(2);
  pos.y = ((y - element.y) / element.height).toFixed(2);
  document.documentElement.style.setProperty("--x", pos.x);
  document.documentElement.style.setProperty("--y", pos.y);
};

const elementPropObserver = () => {
  element.x = document.getElementById("roadmap").offsetLeft;
  element.y = document.getElementById("roadmap").offsetTop;
  element.width = document.getElementById("roadmap").clientWidth;
  element.height = document.getElementById("roadmap").clientHeight;
};

elementPropObserver();
window.addEventListener("resize", elementPropObserver);

document.getElementById("imgcontainer").addEventListener("mousemove", (e) => {
  saveCursorPosition(e.clientX, e.clientY);
});
