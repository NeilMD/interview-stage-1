# Report Generator Project

## Overview

This project is a **flexible report generator** built with **JavaScript** using the **Adapter** and **Strategy** design patterns. It allows you to:

- Accept input in multiple formats (e.g., JSON, Array) via **Adapters**.
- Output reports in multiple formats (e.g., CSV, Console, HTML) via **Strategy patterns**.
- Generate and process large lists of random data efficiently.

The system is modular, making it easy to **add new input formats or output strategies** without changing core logic.

---

## File Structure

```
/output-patterns
  CsvOutput.js       # Strategy pattern to output CSV
  ConsoleOutput.js   # Strategy pattern to output to console
  HtmlOutput.js      # Strategy pattern to output HTML

/input-patterns
  JsonAdapter.js     # Adapter to handle JSON input
  ArrayAdapter.js    # Adapter to handle Array input

main.js              # Main execution file
ListReportGenerator.js # Service class to generate and output reports
GenerateData.js      # Generates random list of numbers
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/NeilMD/interview-stage-1.git
```

2. Run the project:

```bash
node main.js
```

---

## Usage

```javascript
const generateData = new GenerateData(LIST_SIZE);
const arrResult = generateData.generateList();

const arrayAdapter = new ArrayAdapter();
const standardizedData = arrayAdapter.standardize(arrResult);

const listReportGenerator = new ListReportGenerator(standardizedData);

const consoleOutput = new ConsoleOutput();
listReportGenerator.output(consoleOutput);
```

---

## Design Patterns Used

### Adapter Pattern

- Provides flexibility to accept different input formats (JSON, Array, etc.).
- Converts all input data into a **standardized format** that ListReportGenerator can process.

### Strategy Pattern

- Provides flexibility to output reports in multiple formats.
- Example strategies:
  - ConsoleOutput – prints to console
  - CsvOutput – outputs CSV file
  - HtmlOutput – outputs HTML file

---

## Configuration

- LIST_SIZE in main.js controls the number of random data items generated:

```javascript
const LIST_SIZE = 10_000;
```

- You can swap adapters or output strategies easily:

```javascript
const jsonAdapter = new JsonAdapter();
const htmlOutput = new HtmlOutput();
```

---

## Author

**Neil Capistrano**  
Created: 2026/03/17  
Last Updated: 2026/03/17
