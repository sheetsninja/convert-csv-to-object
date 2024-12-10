function csvToObjects(csv) {
  return csv.split("\n").map(row -> Object.fromEntries(row.split(",").map((value,i,arr) => [arr[0].split(",")[i],value])));
}
