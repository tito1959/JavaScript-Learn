const $d = document;
let x = 0, y = 0;

export function moveBall(e, ball, stage) {
  const $ball = $d.querySelector(ball),
    $stage = $d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();

  // console.log(limitBall, limitStage);

  switch (e.key) {
    case "w":
      if (limitBall.top > limitStage.top) y--;
      break;
    case "s":
      if (limitBall.bottom < limitStage.bottom) y++;
      break;
    case "d":
      if (limitBall.right < limitStage.right) x++;
      break;
    case "a":
      if (limitBall.left > limitStage.left) x--;
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
}