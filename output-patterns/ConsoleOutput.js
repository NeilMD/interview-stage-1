/**
 * File Name: ConsoleOutput.js
 * Created By: Neil Capistrano
 * Created Date: 2026/03/17
 * Last Update Date: 2026/03/17
 * Last Updated By: Neil Capistrano
 *
 * Summary:
 * Strategy Pattern to output report through console
 *
 */

class ConsoleOutput {
  render(data) {
    for (const x of data) {
      //Console log the number
      console.log(`${x}`);
    }
  }
}

module.exports = ConsoleOutput;
