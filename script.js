const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	for (let i = 0; i < arr.length; i++) {
		for (let t = 1; t < arr.length; t++) {
			if (arr[i] + arr[t] == n) {
				console.log([arr[i], arr[t]]);
				
			}

			
			
		}
		
	}
	
};

//const n = prompt("Enter n: ");
//alert(JSON.stringify(divide(arr, n)));
