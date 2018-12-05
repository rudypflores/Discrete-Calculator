//Permutation and combination calculator
class Probability {

  //Takes in value of n, k, and also type which can equal 0 or 1.
  constructor(n, k, type) {
    this.n = n;
    this.k = k;
    this.type = type;
  }

  //Calculate our probability of n and k
  calculate() {
    let answer = 0;

    if(this.type === 0) {
      answer = this.permutation();
    } else if(this.type === 1){
      answer = this.combination();
    }

    return Math.ceil(answer);
  }

  factorial(val) {
    //Use recursion to allow creation of factorial function
    for(let i = val; i > 0; i--) {
      val *= i;
    }
    return val;
  }

  //Formula for permutation
  permutation() {
    //See permutation as p(n,k) = n!/(n-k)!
    let result = this.factorial(this.n)/this.factorial(this.n-this.k);
    return result;
  }

  //Formula for permutation
  combination() {
    //See combination as c(n, k) = n!/k!(n-k)!
    let result2 = this.factorial(this.n)/(this.factorial(this.n-this.k)*this.factorial(this.k)); 
    return result2;
  }
}

//Test Cases
let pTest = new Probability(3, 1, 0);
let result = pTest.type === 1 ? 'combination' : 'permutation';
console.log(`The ${result} of ${pTest.n} and ${pTest.k} is: ${pTest.calculate()}`);