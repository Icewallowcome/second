class FlyingComponent {
  constructor (x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.vx = 0;
    this.vy = 0;
  }

  updateCoordinats() {
    if (this.x + this.vx + this.width >= window.innerWidth || this.x + this.vx < 0) {
      this.vx = -this.vx
    }
    this.x += this.vx;

    if (this.y + this.vy  + this.height >= window.innerHeight || this.y + this.vy < 0) {
      this.vy = -this.vy
    }
    this.y += this.vy;
  }
}

const dateDiv = document.querySelector('.date');
const button = document.querySelector('button');

const x = 700;
const y = 300;
const height = button.offsetHeight + 240;
const width = button.offsetWidth + 240;

const buttonComponent = new FlyingComponent(x, y, height, width);
buttonComponent.vx = 1,5;
buttonComponent.vy = 1;

const moveButton = (x, y) => {
  button.style.top = y;
  button.style.left = x;
}

const updateButton = () => {
  buttonComponent.updateCoordinats();
  moveButton(buttonComponent.x, buttonComponent.y);
}

setInterval(updateButton, 6);

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// test it
const a = new Date("2020-04-22"),
    b = new Date(),
    difference = dateDiffInDays(a, b);
    dateDiv.innerHTML = `${difference}`;
