const cursor = document.querySelector(".cursor")

function moveCursor(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = `${x-10}px` // size of cursor circle 20x20 px ==> x-10 to have it in the middle
  cursor.style.top = `${y-10}px` // size of cursor circle 20x20 px ==> x-10 to have it in the middle
}

document.addEventListener('mousemove',moveCursor)