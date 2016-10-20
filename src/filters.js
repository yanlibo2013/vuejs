/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 */

/**
 * 日期中文化
 * @param value
 * @returns {string}
 */
exports.timeReplace = (value) => {
  return value.replace('-','月')+'日'
};