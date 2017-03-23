/**
 * Created by Skipper on 2017/3/14.
 */
require('./main.scss');
// es5
// var sub = require('./sub');

// es6
import generateText from './sub';
var $ = require('jquery');
var $script = require("scriptjs");

// import {GMap, CustomMarker} from './googlemaps';
import GMap from './googlemaps';
import Cdt from './coordtransform';
// console.log('GMap type is ', typeof GMap, '  Cdt type is ', typeof Cdt,'  Cdt.gcj02towgs84 type is ',typeof Cdt.gcj02towgs84,' transferform value is ',Cdt.gcj02towgs84(120.123456,30.654321));
import Ctrl from './commonctrl';

// 加载地图并初始化
$script("http://ditu.google.cn/maps/api/js?language=zh-CN&libraries=geometry,drawing&key=AIzaSyDEK4XKx_F2_R76kuxE_igcWbZpu1n14BQ&sensor=false", function () {
  var ctrl = new Ctrl();

  var moment = require('moment');
  var app = document.createElement('div');
  app.innerHTML = '<h1>Hello World it</h1>';
  app.style.width = '1200px';
  app.style.height = '600px';
  app.setAttribute('id', 'map');
  document.body.appendChild(app);
  app.appendChild(generateText());
  $('body').append('<p style="color:red">look at me! now is ' + moment().format() + '当前时间是 ' + ctrl.formatDate() + '</p>' + '<p>转换为大地坐标是</p></p><p id="lng"></p><p id="lat"></p>');


  var selfMap = new GMap();
// 初始化之前map是null
  console.log(' selfmap is ', selfMap, '  类型是是 ', typeof selfMap)
  selfMap.initMap('map', 13);
// 初始化之后map是map对象
  console.log('self Mapis ', selfMap.map, ' 当前缩放Zoom是 ', selfMap.map.getZoom())
// selfMap.map.setZoom(16);

  // var myLatlng = new google.maps.LatLng(119.12345, 30.654321);
  // var srcImage = 'https://developers.google.com/maps/documentation/' +
  //   'javascript/examples/full/images/talkeetna.png';
  // var selfMarker = new CustomMarker(
  //   myLatlng,
  //   srcImage,
  //   selfMap.map,
  // );
})


