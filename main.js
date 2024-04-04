const printPyramid = (n) => {
    for (let i = 0; i < n; i++) {
      let row = '';
      // Add spaces before the asterisks
      for (let j = 0; j < n - i - 1; j++) {
        row += '#';
      }
      // Add asterisks
      for (let k = 0; k < 2 * i + 1; k++) {
        row += '*';
      }
      // Add spaces after the asterisks
      for (let l = 0; l < n - i - 1; l++) {
        row += '#';
      }
      console.log(row);
    }
  };
  
  // Test the function
  printPyramid(5);
  