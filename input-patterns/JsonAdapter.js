/**
 * File Name: JsonAdapter.js
 * Created By: Neil Capistrano
 * Created Date: 2026/03/17
 * Last Update Date: 2026/03/17
 * Last Updated By: Neil Capistrano
 *
 * Summary:
 * Adapter pattern to standardize data before sending
 *
 */

class JsonAdapter {
  standardize(data) {
    //Return all values as an Array
    return Object.values(data);
  }
}

module.exports = JsonAdapter;
