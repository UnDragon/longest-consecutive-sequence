module.exports = function longestConsecutiveLength(array) { 
if (array.length < 2) { 
return array.length; 
} 
var counter = 0, 
localCounter = 1; 

array = array.sort(function (a, b) { 
if (a > b) { 
return 1; 
} else if (a < b) { 
return -1; 
} else { 
return 0; 
} 
}); 

for (var i = 1; i < array.length; i++) { 
if (array[i - 1] === (array[i] - 1)) { 
localCounter++; 
} else if (array[i - 1] !== (array[i])) { 
localCounter = 1 
} 
if (localCounter > counter) { 
counter = localCounter; 
} 
} 
return counter; 
}
