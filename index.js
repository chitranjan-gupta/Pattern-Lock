document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector("#can-123"); //Canvas element
  const ctx = canvas.getContext("2d"); //Canvas context

  let isDown = false;
  let pencil = false;
  let x1, y1, x2, y2;
  let arc1 = [],
    arc2 = [],
    arc3 = [],
    arc4 = [],
    arc5 = [],
    arc6 = [],
    arc7 = [],
    arc8 = [],
    arc9 = [];
  function quad1(x, y, r) {
    let arr = [];
    let r1 = r;
    for (let i = y; i <= y + r; i++) {
      for (let j = x; j <= x + r1; j++) {
        arr.push([j, i]);
      }
      --r1;
    }
    return arr;
  }
  function quad2(x, y, r) {
    let arr = [];
    let r1 = r;
    for (let i = y; i <= y + r; i++) {
      for (let j = x; j >= x - r1; j--) {
        arr.push([j, i]);
      }
      --r1;
    }
    return arr;
  }
  function quad3(x, y, r) {
    let arr = [];
    let r1 = r;
    for (let i = y; i >= y - r; i--) {
      for (let j = x; j >= x - r1; j--) {
        arr.push([j, i]);
      }
      --r1;
    }
    return arr;
  }
  function quad4(x, y, r) {
    let arr = [];
    let r1 = r;
    for (let i = y; i >= y - r; i--) {
      for (let j = x; j <= x + r1; j++) {
        arr.push([j, i]);
      }
      --r1;
    }
    return arr;
  }
  function closeTo(x, y, r) {
    let arr = [];
    arr.push(quad1(x, y, r));
    arr.push(quad2(x, y, r));
    arr.push(quad3(x, y, r));
    arr.push(quad4(x, y, r));
    return arr;
  }
  arc1.push(closeTo(100, 50, 12));
  arc2.push(closeTo(170, 50, 12));
  arc3.push(closeTo(240, 50, 12));
  arc4.push(closeTo(100, 120, 12));
  arc5.push(closeTo(170, 120, 12));
  arc6.push(closeTo(240, 120, 12));
  arc7.push(closeTo(100, 190, 12));
  arc8.push(closeTo(170, 190, 12));
  arc9.push(closeTo(240, 190, 12));

  function approx(xa, ya) {
    if (arc1.findIndex(({ x, y }) => x == xa && y == ya)) {
      return { x: 100, y: 50 };
    } else if (arc2.findIndex(({ x, y }) => x == xa && y == ya)) {
      return { x: 170, y: 50 };
    } else if (arc3.findIndex(({ x, y }) => x == xa && y == ya)) {
      return { x: 240, y: 50 };
    } else if (arc4.findIndex(({ x, y }) => x == xa && y == ya)) {
      return { x: 100, y: 120 };
    } else if (arc5.findIndex(({ x, y }) => x == xa && y == ya)) {
      return { x: 170, y: 120 };
    } else if (arc6.findIndex(({ x, y }) => x == xa && y == ya)) {
      return { x: 240, y: 120 };
    } else if (arc7.findIndex(({ x, y }) => x == xa && y == ya)) {
      return { x: 100, y: 190 };
    } else if (arc8.findIndex(({ x, y }) => x == xa && y == ya)) {
      return { x: 170, y: 190 };
    } else if (arc9.findIndex(({ x, y }) => x == xa && y == ya)) {
      return { x: 240, y: 190 };
    } else {
      return { x: 0, y: 0 };
    }
  }

  function matchPos(x, y) {
    console.log(x, y);
    if (x == 100 && y == 50) {
      return { x: 100, y: 50 };
    } else if (x == 170 && y == 50) {
      return { x: 170, y: 50 };
    } else if (x == 240 && y == 50) {
      return { x: 240, y: 50 };
    } else if (x == 100 && y == 120) {
      return { x: 100, y: 120 };
    } else if (x == 170 && y == 120) {
      return { x: 170, y: 120 };
    } else if (x == 240 && y == 120) {
      return { x: 240, y: 120 };
    } else if (x == 100 && y == 190) {
      return { x: 100, y: 190 };
    } else if (x == 170 && y == 190) {
      return { x: 170, y: 190 };
    } else if (x == 240 && y == 190) {
      return { x: 240, y: 190 };
    } else {
      return { x: 0, y: 0 };
    }
  }

  //Points to connect
  function start() {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(100, 50, 5, 0, 2 * Math.PI);
    ctx.arc(170, 50, 5, 0, 2 * Math.PI);
    ctx.arc(240, 50, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(100, 120, 5, 0, 2 * Math.PI);
    ctx.arc(170, 120, 5, 0, 2 * Math.PI);
    ctx.arc(240, 120, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(100, 190, 5, 0, 2 * Math.PI);
    ctx.arc(170, 190, 5, 0, 2 * Math.PI);
    ctx.arc(240, 190, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  //Circle Array
  let circles = [];
  circles.push({ name: "Circle 1", x: 100, y: 50, radius: 12 });
  circles.push({ name: "Circle 2", x: 170, y: 50, radius: 12 });
  circles.push({ name: "Circle 3", x: 240, y: 50, radius: 12 });
  circles.push({ name: "Circle 4", x: 100, y: 120, radius: 12 });
  circles.push({ name: "Circle 5", x: 170, y: 120, radius: 12 });
  circles.push({ name: "Circle 6", x: 240, y: 120, radius: 12 });
  circles.push({ name: "Circle 7", x: 100, y: 190, radius: 12 });
  circles.push({ name: "Circle 8", x: 170, y: 190, radius: 12 });
  circles.push({ name: "Circle 9", x: 240, y: 190, radius: 12 });

  //Connected points array
  let joined = [];

  //Test correct points
  let test = [{ name: "Circle 1" }, { name: "Circle 2" }, { name: "Circle 3" }];

  //Get the x and y coordinates of mouse pointer with respect to canvas border
  function getMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  //Check the pointer coordinates match to any of the circles coordinates
  function collisionDetection(x, y) {
    if (x && y) {
      let xaxis = 0,
        yaxis = 0,
        name = "";
      circles.forEach((circle) => {
        if (
          Math.sqrt(Math.pow(circle.x - x, 2) + Math.pow(circle.y - y, 2)) <=
          circle.radius
        ) {
          name = circle.name;
          xaxis = circle.x;
          yaxis = circle.y;
        }
      });
      return {
        x: xaxis,
        y: yaxis,
        name: name,
      };
    }
    return {
      x: 0,
      y: 0,
      name: "",
    };
  }

  //Check joined points
  function isJoined(name) {
    return joined.findIndex((join) => join.name == name);
  }

  //Fill the joined points
  function fill(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  function check() {
    if (joined.length != test.length) return false;
    for (const [i, value] of test.entries()) {
      if (joined[i].name !== value.name) return false;
    }
    return true;
  }

  canvas.addEventListener("mousedown", (e) => {
    if (!pencil) {
      joined = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      start();
    }
    let pos = getMousePos(e);
    let { x, y, name } = collisionDetection(pos.x, pos.y);
    if (x && y) {
      if (isJoined(name) > -1) return;
      //console.log("Started Pencil");
      pencil = true;
      fill(x, y, "rgba(147,145,145,0.41)");
      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.strokeStyle = "black";
      ctx.moveTo(x, y);
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
    }
  });

  canvas.addEventListener("mousemove", (e) => {
    if (pencil) {
      let pos = getMousePos(e);
      //console.log("Checking");
      let { x, y, name } = collisionDetection(pos.x, pos.y);
      //console.log(x, y);
      if (x && y) {
        if (isJoined(name) > -1) return;
        else joined.push({ x, y, name });
        //console.log("Drawing");
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
        fill(x, y, "rgba(147,145,145,0.41)");
        ctx.beginPath();
        //ctx.strokeRect(x,y,3,3)
        ctx.moveTo(x, y);
        x1 = x;
        y1 = y;
      }
    }
  });

  window.addEventListener("mouseup", (e) => {
    if (pencil) {
      //console.log("Pencil Closed");
      let pos = getMousePos(e);
      x2 = pos.x;
      y2 = pos.y;
      ctx.closePath();
      pencil = false;
      if (!check()) joined.forEach((v) => fill(v.x, v.y, "rgba(255,0,0,0.3)"));
      else joined.forEach((v) => fill(v.x, v.y, "rgba(76,175,80,0.7)"));
    }
  });

  start();
});
