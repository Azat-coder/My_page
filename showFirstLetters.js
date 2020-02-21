var array = ["Разнообразный", "привет", "мама", "брат", "сестра", "бабушка"];

function showFirstLetters(array) {
    var newArray = [];

    for (var i = 0; i <array.length; i++) {
        
        uniqSym(array[i]);
    	function uniqSym(s) {
		  var c = {};
		  var r = '';

		  for (var j = 0; j < s.length; j++) {
		    if (!c[s[j]]) {
		      r = r + s[j];
		      c[s[j]] = 1;
		    }
		  }
		  newArray.push (r);
		   
		}
        	
    }
   console.log (newArray);  
}

