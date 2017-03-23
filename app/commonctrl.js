/**
 * Created by Skipper on 2017/3/15.
 */
function C() {
}
// Unix时间戳转换标准时间（北京时间）
C.prototype.formatDate = function (v, type) {
  if (!v) {
    var date = new Date();
  } else {
    var unixtime = v;
    var date = new Date(unixtime * 1000 + 28800000);
  }

  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  var secend = date.getSeconds();
  secend = secend < 10 ? ('0' + secend) : secend;

  // 默认输出 年/月/日 时:分:秒
  if (!type || type == 'lyr') {
    var t = y + '/' + m + '/' + d + ' ' + h + ':' + minute + ':' + secend;
  }

  // 输出 时:分:秒
  if (type == 'sfm') {
    var t = h + ":" + minute + ':' + secend;
  }

  // 输出 分:秒
  if (type == 'fm') {
    var t = minute + ':' + secend;
  }

  return t;
}

export default C