/**
 * File Name: Report.js
 * Created By: Neil Capistrano
 * Created Date: 2026/03/17
 * Last Update Date: 2026/03/17
 * Last Updated By: Neil Capistrano
 *
 * Summary:
 * Service Class that Generate List Report
 *
 */
class ListReportGenerator {
  constructor(data) {
    this.data = data;
  }

  output(renderStrategy) {
    renderStrategy.render(this.data);
  }
}

module.exports = ListReportGenerator;
