const EPS = 0.00000001; // 許容誤差

/**
 * ニュートン法による根の計算
 */
  let xxa=3;
  let xa=1;
  let aa=-1;

function main() {
  console.log("x^3 + x - 1 のニュートン法による数値計算");

  let a = 1.0;
  let b;

  console.log("初期値 a=" + a);

  while (1) {
    b = a - func_y(a) / func_z(a); // 式(1.9)
    console.log(b);
    if (Math.abs(a - b) < EPS) break;  // 収束判定
    else a = b;
  }
  console.log("近似解 x = " + b);
}

/**
 * 根を求めたい関数
 * @param {number} x X座標
 * @return {number} Y座標
 */
function func_y(x) {
  return Math.pow(x,xxa) + xa*x +aa;
}

/**
 * 根を求めたい関数の微分関数
 * @param {number} x X座標
 * @return {number} Y座標
 */
function func_z(x) {
  return xxa * Math.pow(x,xxa-1) +xa;
}

main();
