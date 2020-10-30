```javascript
// w2d2 kata: Smallest Unused Id

function nextId(ids) {
  const unUsed = [];
  const sorted = ids.sort(function (a, b) {
    return b - a;
  });
  for (i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i+1] + 1) {
      return sorted[0] + 1;
    } else {
      unUsed.push(sorted[i] - sorted[i+1]);
      unUsed.sort
    };
  };
  return unUsed[0];
};

// nextId([0,1,2,3,5]), 4
// nextId([0,1,2,3,4,5,6,7,8,9,10]), 11

function nextId (ids) {
  for (let i = 0; i < ids.length; i++) {
    // check if i is in ids
    if (ids.includes(i)) {
      return i
    };
  };
  return Math.max(...ids) + 1;
}


// try with hashset



```

