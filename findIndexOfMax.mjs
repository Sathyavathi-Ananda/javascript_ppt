var scoreByPattern = [93,255,17,56,91,98,33,9,38,55,78,29,81,60];

function findIndicesOfMax(inp, count) {
    var outp = [];
    for (var i = 0; i < inp.length; i++) {
        outp.push(i);
        if (outp.length > count) {
            outp.sort(function(a, b) { return inp[b] - inp[a]; });
            outp.pop();
        }
    }
    return outp;
}

// show original array
console.log(scoreByPattern);

// get indices of 3 greatest elements
var indices = findIndicesOfMax(scoreByPattern, 3);
console.log(indices);//[1, 5, 0]

// show 3 greatest scores
for (var i = 0; i < indices.length; i++)
    console.log(scoreByPattern[indices[i]]);
    //255
    // 98
    // 93


