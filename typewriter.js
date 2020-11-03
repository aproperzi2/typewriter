const sentence = "hello there from lighthouse labs";

let t = 0;

for (const char of sentence) {
  t = t + 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, t)
}

setTimeout(() => {
  process.stdout.write("\n");
}, t)

