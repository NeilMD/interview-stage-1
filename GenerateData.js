/**
 * File Name: GenerateData.js
 * Created By: Neil Capistrano
 * Created Date: 2026/03/17
 * Last Update Date: 2026/03/17
 * Last Updated By: Neil Capistrano
 *
 * Summary:
 * Main logic for generating list of random number
 *
 */

class GenerateData {
  constructor(size) {
    // Set Size of the Array
    this.size = size;

    // Generate Array based on the size
    // Fill up the array with a value of (index + 1),
    // Addition was necessary to exclude 0
    this.data = Array.from({ length: size }, (_, i) => {
      return i + 1;
    });

    // Instantiate empty array
    // This array will contain the random generated numbers
    this.arrResult = [];
  }

  generateList() {
    // Clear arrResult
    this.arrResult = [];

    for (let x = 0; x < this.size; x++) {
      // Generate Random Number, used the length of the unused array
      let randomIndex = this.generateRandomNumber(this.size - x);

      // Push random number to the output list
      this.arrResult.push(this.data[randomIndex]);

      // Remove the Item from the list
      this.data.splice(randomIndex, 1);
    }

    return this.arrResult;
  }

  generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
}

module.exports = GenerateData;
