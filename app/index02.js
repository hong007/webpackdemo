/**
 * Created by Skipper on 2017/3/23.
 */
require('./main.scss');
var $ = require('jquery');
var questionCount = 1;
var selectorCount = [];
var qGroupAddDleteObj = $('#buttionDiv');
var qAddBtn = qGroupAddDleteObj.find('input').eq(0);
var qDeleteBtn = qGroupAddDleteObj.find('input').eq(1);
var qSubmitBtn = qGroupAddDleteObj.find('input').eq(2);

// 给添加选项删除选项绑定事件
var selectEvent = {};
(function () {
  var c = function () {
    var selectObj = $('.selector');
    var length = selectObj.length;
    for (var i = 0; i < length; i++) {
      var selectEventBtn = selectObj.eq(i).find('.select-group');
      selectEventBtn.unbind('click')
      selectEventBtn.on('click', function () {
        var Obj = $(this);
        var index = Obj.parent().parent().index();
        var dataValue = Obj.attr('data-selecttype');
        console.log('Obj is ', Obj, ' 当前 问题组index值是 ', index, '   选项个数是  ', selectorCount[index]);

        if (dataValue == 'add') {//增加选项
          if (!selectorCount['' + index]) {
            selectorCount['' + index] = 2
          } else {
            ++selectorCount['' + index]
          }
          Obj.closest(".div").append("<p id=selectorCount" + index + selectorCount[index] + ">选项" + selectorCount[index] + "：<input type='text' name='selector'></p>");
        } else {
          if (selectorCount[index] > 1) {
            Obj.closest('.div').find('#selectorCount' + index + selectorCount[index]).remove();
            selectorCount[index]--
          }
        }
      })
    }
  }
  selectEvent.addSelectEvent = c;
})();
selectEvent.addSelectEvent();
//添加问题
qAddBtn.click(function () {
  questionCount++;
  var html = "";
  html += "<div class='div' style='background-color:coral ;'><p class='question' >问题" + questionCount +
    " ：<input type='text' name='question' /></p>";
  html += "<p class='selector'>选项1：<input type='text' class='selector' name='selector'>";
  html += "<input type='button' class='select-group' data-selecttype='add' value='增加选项'/>";
  html += "<input type='button' class='select-group' data-selecttype='delete' value='删除选项'/>";
  html += "</p></div>";
  $(html).insertBefore("#buttionDiv");
  selectEvent.addSelectEvent()
});
//删除问题
qDeleteBtn.click(function () {
  var length = $('.div').length;
  if (questionCount > 1) {
    $(".div").eq(length - 1).remove();
    questionCount--;
  }
  selectEvent.addSelectEvent()
});
