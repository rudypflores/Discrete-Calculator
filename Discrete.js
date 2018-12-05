//Permutation and combination calculator
class Probability {

  //Takes in value of n, k, and also type which can equal 0 or 1.
  constructor(n, k, type) {
    this.n = Math.floor(n);
    this.k = Math.floor(k);
    this.type = Math.floor(type);
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
    let result3 = 1;
    if(val === 0) {
    	return 0;
    } else {
	    for(let i = val; i > 0; i--) {
	      result3 = result3*i;
	    }
	    return result3;
	}
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

class Algorithms {

}

//Test Cases
let probabilityTest = new Probability(Math.random()*10, Math.random()*10, Math.random()*2);
let f = new Probability();
let rand =  Math.floor(Math.random()*10);
let factorialTest = f.factorial(rand);

//Permutation and Combination also Factorial
let result = probabilityTest.type === 1 ? 'combination' : 'permutation';
console.log(`The ${result} of ${probabilityTest.n} and ${probabilityTest.k} is: ${probabilityTest.calculate()}`);
console.log(`The result of ${rand}! is the value of: ${factorialTest}`);

//Euclidean Algorithm
