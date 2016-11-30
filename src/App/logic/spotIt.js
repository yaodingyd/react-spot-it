(function(){
function spotIt(input, callback) {
    if(input.length >=14 && input.length < 19){
        return specialCase(input);
    }

    var i = 0;
    var j = 0;
    var k = 0;
    var p = 2;

    var len = input.length;

    for (i = 2; i < 10; i++) {
        var min = i * i + i + 1;
        var max = (i + 1) * (i + 1) + (i + 1) + 1;
        if (len > min && len <= max) {
            p = i + 1;
            break;
        }
    }

    var cards = [];
    var minFactor;

    for (minFactor = 2; minFactor < 1 + parseInt(Math.pow(p, 0.5), 10); minFactor++) {
        if (p % minFactor === 0) {
            break;
        }
    }

    if (2 >= 1 + parseInt(Math.pow(p, 0.5), 10)) {
        minFactor = p;
    }

    for (i = 0; i < p; i++) {
        var temp = [];
        for (j = 0; j < p; j++) {
            temp.push(i * p + j);
        }
        temp.push(p * p);
        cards.push(temp);
    }
    for (i = 0; i < minFactor; i++) {
        for (j = 0; j < p; j++) {
            var temp2 = [];
            for (k = 0; k < p; k++) {
                temp2.push(k * p + (j + i * k) % p);
            }
            temp2.push(p * p + 1 + i);
            cards.push(temp2);
        }
    }

    var temp3 = [];
    for (i = 0; i < minFactor + 1; i++) {
        temp3.push(p * p + i);
    }
    cards.push(temp3);

    var results = [];
    var refinedResults = [];

    for (i = 0; i < cards.length; i++) {
        results.push(cards[i].map(function(val) {
            return input[val];
        }))
    }

    for (i = 0; i < results.length; i++) {
        var flag = true;
        //eslint-disable-next-line
        results[i].forEach(function(value) {
            if (value === undefined) {
                flag = false;
            }
        })
        if (results[i].length !== p + 1) {
            flag = false;
        }
        if (flag) {
            refinedResults.push(results[i]);
        }
    }

    
    return refinedResults;

}

window.spotIt = spotIt;

function specialCase(input){
    var result = [];
    var combinations = k_combinations(input, 4);
    for(var i = 0; i < combinations.length; i++){
        var resultTemp = [];
        resultTemp.push(combinations[i]);
        for(var j = i; j < combinations.length; j++){
            var notOne = false;
            for(var t = 0; t < resultTemp.length; t++){
                if(intersect(resultTemp[t], combinations[j]) !== 1){
                    notOne = true;
                }
            }
            if(!notOne){
                resultTemp.push(combinations[j]);
            }
        }
        if(resultTemp.length > result.length){
            result = resultTemp;
        }
    }
    return result;
}

function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	
	if (k > set.length || k <= 0) {
		return [];
	}
	
	// K-sized set has only one K-sized subset.
	if (k === set.length) {
		return [set];
	}
	
	// There is N 1-sized subsets in a N-sized set.
	if (k === 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}

	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		// head is a list that includes only our current element.
		head = set.slice(i, i + 1);
		// We take smaller combinations from the subsequent elements
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}

function intersect(a, b)
{
  a.sort();
  b.sort();
  var ai=0, bi=0;
  var result = [];


  while( ai < a.length && bi < b.length )
  {
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(a[ai]);
       ai++;
       bi++;
     }
  }

  return result.length;
}
})();
