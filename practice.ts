let count: number = 0;
count++;

const message: string = "Hello";
const flag: boolean = true;

const numbers: number[] = [1, 2, 3, 4];
const messageArr: string[] = ["a", "b", "c", "d"];

messageArr.push("1");

const canUndefined: string | undefined = undefined;
const canNull: string | null = null;

let a: string = "red";

let color: "red" | "yellow" | "green" | "white" = "red";

const sum = (x: number, y: number): number => {
  return x + y;
};

const sumArr = (arr: number[]): number => {
  let sum = arr.reduce((prev, now) => (prev += now), 0);
  return sum;
};

console.log(sumArr([1, 2, 3, 4, 5]));
