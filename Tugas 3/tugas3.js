const fibonacci = (n) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
};

console.log(fibonacci(15));

const kalkulator = (operator, ...angka) => {
  switch (operator) {
    case '+':
      return angka.reduce((a, b) => a + b, 0);
    case '-':
      return angka.reduce((a, b) => a - b);
    case '*':
      return angka.reduce((a, b) => a * b, 1);
    case '/':
      return angka.reduce((a, b) => a / b);
    case '%':
      return angka.reduce((a, b) => a % b);
    default:
      return 'Operator tidak valid';
  }
};

console.log(kalkulator('+', 1675, 5291, 10784)); 
console.log(kalkulator('-', 28429, 5174, 3755));  
console.log(kalkulator('*', 53, 48, 21));         
console.log(kalkulator('/', 100000, 10, 5));    
console.log(kalkulator('%', 1000, 300));