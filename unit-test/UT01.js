/**
 * File Name: UT01.js
 * Created By: Neil Capistrano
 * Created Date: 2026/03/17
 * Last Update Date: 2026/03/17
 * Last Updated By: Neil Capistrano
 *
 * Summary:
 * Unit Test for GenerateData.js
 *
 */
// import main logic for generating random list of numbers
const GenerateData = require("../GenerateData");

class UT01 {
  constructor() {
    this.LIMIT_SIZE = 10_000;
    this.generateData = new GenerateData(this.LIMIT_SIZE);
  }

  // Test 001 - Test of all numbers are unique
  test001() {
    // Instantiate hash map
    const hashMap = {};
    // Generate 10,000 unique number
    const resultArr = this.generateData.generateList();

    for (let x of resultArr) {
      if (x in hashMap) {
        console.log("Test 001: Generate Unique List - Failed");
        return false;
      }
    }
    console.log("Test 001: Generate Unique List - Success");
    return true;
  }

  // Test 002 - Check if number list has expected count.
  test002() {
    // Generate 10,000 unique number
    const resultArr = this.generateData.generateList();
    if (resultArr.length === this.LIMIT_SIZE) {
      console.log("Test 002: List Length - Success");
      return true;
    }

    console.log("Test 002: List Length - Failed");
    return false;
  }
}

const unitTest = new UT01();

// Check if array list has unique numbers
unitTest.test001();
// Check if array has expected length
unitTest.test002();
