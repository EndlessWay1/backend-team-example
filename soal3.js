const arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

const map1 = arr.map((x) => x ** 2);

console.log(map1);

let map2 = arr.map((x) => {if (x%2){return x;}}).filter(
    (x) => {
        return x !== undefined;
    }
);

// map2 = map2.filter(item => item !== undefined && item !== null && item % 2 !== 0);

console.log(map2);