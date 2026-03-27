func1 = (a, b) => {
	if (a > b) {
  	return a;
  } else {
  	return b;
  }
}
func2 = (a, b, c) => {
	return func1(func1(a, b), func1(b, c));
}

func3 = (func, a, b) => {
	const n = func(a, b);
  return n;
}

console.log(func1(3, 5)); // Expected Result: 5
console.log(func2(7, 11, 8)); // Expected Result: 11
console.log(func3(func1, 8, 23));