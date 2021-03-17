let a = "read a sentence which ends with a point.";
let v = 0;
console.log(a.length);
console.log((a.split(" ")).length);
for (var i = 0; i < a.length; i = i + 1)
  if (a[i] == "a" || a[i] == "e" || a[i] == "o" || a[i] == "i" || a[i] == "u") {
    v = v + 1;
  }
console.log(v);
