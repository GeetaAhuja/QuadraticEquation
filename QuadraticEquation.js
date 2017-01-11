/*//logic coutesy ...
//https://www.mathsisfun.com/algebra/factoring-quadratics.html
// https://www.khanacademy.org/math/algebra/quadratics/solving-quadratics-using-the-quadratic-formula/v/quadratic-formula-3*/

/* code to test js via console */
// let array = [{
//   'coefficients': [1, 6, 5, -6],
//   'searchRange': [0, 100]
// }, {
//   'coefficients': [2, 2, -59, -29],
//   'searchRange': [1, 100]
// }, {
//   'coefficients': [1, 1, 14, 49],
//   'searchRange': [-11, 0]
// }];

// for (var j = 0; j < array.length; j++) {
//   let obj = array[j];
//   console.log(main(obj));
// }

function calculateQuadraticRoot(a, b, c, sin, range) {
  var bSquare = b * b;
  var ac = 4 * a * (c + sin);
  var aa = 2 * a;
  var discriminant = (bSquare - ac);
  //console.log(discriminant)
  if (discriminant < 0) {
    return {
      'root': null
    };
    //console.log('no rooot');
  } else if (discriminant === 0) {
    return {
      'root': (-(b) / aa).toFixed(1)
    };

  } else {
    var sqrtDiscriminant = Math.sqrt(discriminant);
    var retVal = (((-(b) - sqrtDiscriminant) / aa)).toFixed(1);
    var retVal1 = (((-(b) + sqrtDiscriminant) / aa)).toFixed(1);
    var returnObj
    if (retVal >= range[0] && retVal <= range[1]) {
      returnObj = {
        "root": retVal
      }
    } else {
      returnObj = {
        "root": retVal1
      }
    }
    return returnObj;
  }
}

function main(obj) {
  let arr = obj.coefficients;
  let a = arr[0];
  let b = arr[1];
  let c = arr[2];
  let d = arr[3];
  let range = obj.
  searchRange;

  let maxSin = a;
  let minSin = -a;
  let qdMinSin = calculateQuadraticRoot(b, c, d, minSin, range);
  let qdMaxSin = calculateQuadraticRoot(b, c, d, maxSin, range);
  //console.log(qdMinSin);
  //console.log(qdMaxSin);
  let returnObj = {
    root: null
  };
  // console.log(qdMinSin);
  // console.log(qdMaxSin);
  if (qdMinSin.root) {
    if (checkValues(qdMinSin.root, a, b, c, d)) {
      returnObj = qdMinSin;
    };
  }
  if (qdMaxSin.root) {
    if (checkValues(qdMaxSin.root, a, b, c, d)) {
      returnObj = qdMaxSin;
    }
  }
  return returnObj
}


function checkValues(x, a, b, c, d) {
  var val = ((a * Math.sin(x)) + (b * x * x) + (c * x) + d);
  return Math.ceil(val) === 0 || Math.floor(val) === 0;
}
