/**
 * File Name: main.js
 * Created By: Neil Capistrano
 * Created Date: 2026/03/17
 * Last Update Date: 2026/03/17
 * Last Updated By: Neil Capistrano
 *
 * Summary:
 * Main Class to execute generating report
 *
 */

//import all strategy patterns for output
const CsvOutput = require("./output-patterns/CsvOutput");
const ConsoleOutput = require("./output-patterns/ConsoleOutput");
const HtmlOutput = require("./output-patterns/HtmlOutput");

//import all adapter patterns for inputs
const JsonAdapter = require("./input-patterns/JsonAdapter");
const ArrayAdapter = require("./input-patterns/ArrayAdapter");

// import service class to generate the list report
const ListReportGenerator = require("./ListReportGenerator");

// import main logic for generating random list of numbers
const GenerateData = require("./GenerateData");

// instantiate maximum list size
const LIST_SIZE = 10_000;

// use main logic for generating list of random data
const generateData = new GenerateData(LIST_SIZE);
const arrResult = generateData.generateList();

// instantiate patterns to be used.
// Adapter for the flexibility of Input format
// Strategy for the flexibility to output format
const arrayAdapter = new ArrayAdapter();
const consoleOutput = new ConsoleOutput();

// Use Adapter to pass a standardize format
const listReportGenerator = new ListReportGenerator(
  arrayAdapter.standardize(arrResult),
);

// Use consoleOutput as the way to output the report
listReportGenerator.output(consoleOutput);
