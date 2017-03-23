/**
 * Created by Skipper on 2017/3/15.
 */

// export default function (id) {
//   var map = new google.maps.Map(document.getElementById(id), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// };
import Ctrl from './commonctrl.js';
import Cdt from './coordtransform';
// var _self;
// export function GMap() {
export default function GMap() {
  this.map = null;
}
GMap.prototype.initMap = function (id, zoom) {
  var map = new google.maps.Map(document.getElementById(id, zoom), {
    center: {
      lat: 30.227,
      lng: 120.024
    },
    zoom: zoom,
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: true,
    mapDataProviders: '123',
    // mapTypeId:google.maps.MapTypeId.SATELLITE,
    // HYBRID	显示一种带公路和城市名称的照相地图。
    // ROADMAP	显示一种标准的，默认是 2D 的地图。
    // SATELLITE	显示一种照相地图。
    // TERRAIN	显示一种带有山脉、河流等的地图。
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
    }
  });
  map.addListener('mousemove', function (e) {
    // console.log("火星坐标转wgs84前 clickPointLatLng is ", e.latLng.lng(), e.latLng.lat());
    var curcoordpoint = Cdt.gcj02towgs84(e.latLng.lng(), e.latLng.lat());
    // console.log("火星坐标转wgs84后 gcj02towgs84 is ", curcoordpoint);
    // var Obj = document.createElement('div');
    // Obj.innerHTML = '<p style="color:red">经度是: ' + e.latLng.lng() + '<br />维度是:' + e.latLng.lat() + '</p>';
    // document.body.appendChild(Obj);
    var lng = document.getElementById('lng');
    lng.innerText = curcoordpoint[0];
    var lat = document.getElementById('lat');
    lat.innerText = curcoordpoint[1];
  })
  // 初始化之后重设map属性
  this.map = map;
}
//
// function CustomMarker(bounds, image, map) {
//   _self = this;
//   // Initialize all properties.
//   _self.bounds_ = bounds;
//   _self.image_ = image;
//   _self.map_ = map;
//
//   // Define a property to hold the image's div. We'll
//   // actually create this div upon receipt of the onAdd()
//   // method so we'll leave it null for now.
//   _self.div_ = null;
//
//   // Explicitly call setMap on this overlay.
//   _self.setMap(map);
// }
// CustomMarker.prototype = new google.maps.OverlayView();
//
// CustomMarker.prototype.onAdd = function () {
//
//   var div = document.createElement('div');
//   div.style.borderStyle = 'none';
//   div.style.borderWidth = '0px';
//   div.style.position = 'absolute';
//   div.setAttribute("id", 'marker');
//
//   // Create the img element and attach it to the div.
//   var img = document.createElement('img');
//   img.src = _self.image_;
//   img.style.width = '100%';
//   img.style.height = '100%';
//   img.style.position = 'absolute';
//   div.appendChild(img);
//
//   _self.div_ = div;
//
//   // Add the element to the "overlayLayer" pane.
//   var panes = _self.getPanes();
//   panes.overlayLayer.appendChild(div);
// };
//
// CustomMarker.prototype.draw = function () {
//
//   // We use the south-west and north-east
//   // coordinates of the overlay to peg it to the correct position and size.
//   // To do _self, we need to retrieve the projection from the overlay.
//   var overlayProjection = _self.getProjection();
//
//   // Retrieve the south-west and north-east coordinates of _self overlay
//   // in LatLngs and convert them to pixel coordinates.
//   // We'll use these coordinates to resize the div.
//   // var sw = overlayProjection.fromLatLngToDivPixel(_self.bounds_.getSouthWest());
//   // var ne = overlayProjection.fromLatLngToDivPixel(_self.bounds_.getNorthEast());
//   console.log(_self.bounds_ );
//   var point = _self.getProjection().fromLatLngToDivPixel(_self.bounds_ );
//   console.log('point is ', point, '  ', point.x, '  ', point.y);
//   // if (point) {
//   //   div.style.left = point.x - 35 + 'px';
//   //   div.style.top = point.y - 35 + 'px';
//   // }
//
//   // Resize the image's div to fit the indicated dimensions.
//   var div = _self.div_;
//   div.style.left = point.x + 'px';
//   div.style.top = point.y + 'px';
//   div.style.left = point.x - 35 + 'px';
//   div.style.top = point.y - 35 + 'px';
// };
//
// // The onRemove() method will be called automatically from the API if
// // we ever set the overlay's map property to 'null'.
// CustomMarker.prototype.onRemove = function () {
//   _self.div_.parentNode.removeChild(_self.div_);
//   _self.div_ = null;
// };
// 自定义Marker
// export function CustomMarker(latlng, map, args) {
//   this.latlng = latlng;
//   // this.args = args;
//   // this.setMap(map);
//   CustomMarker.prototype = new google.maps.OverlayView();
// }
//
// CustomMarker.prototype.draw = function () {
//   var self = this;
//   var div = this.div;
//   // var id = this.args.id;
//   // var title = this.args.title;
//   // var deg = this.args.deg;
//   if (!div) {
//     div = this.div = document.createElement('div');
//     var img = document.createElement('img');
//     var span = document.createElement('span');
//     img.src = './app/imgs/flight6.png';
//     img.style.width = '70px';
//     img.style.height = '70px';
//     div.className = 'marker';
//     div.style.position = 'absolute';
//     div.style.cursor = 'pointer';
//     div.style.width = '70px';
//     div.style.height = '70px';
//     div.setAttribute("id", 'marker');
//     // span.setAttribute("id", "spanId" + id);
//     // span.innerText = id;
//     span.style.position = 'absolute';
//     span.style.left = '29px';
//     span.style.top = '22px';
//     span.style.color = '#bbfbfc';
//     span.style.width = '14px';
//     span.style.display = 'block';
//     span.style.textAlign = 'center';
//
//     div.appendChild(img);
//     div.appendChild(span);
//     // if (typeof(self.args.id) !== 'undefined') {
//     //   div.id = self.args.id;
//     // }
//     google.maps.event.addDomListener(div, "click", function (event) {
//       google.maps.event.trigger(self, "click");
//     });
//
//     var panes = this.getPanes();
//     panes.overlayImage.appendChild(div);
//   }
//   var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
//   console.log('point is ', point, '  ', point.x, '  ', point.y);
//   if (point) {
//     div.style.left = point.x - 35 + 'px';
//     div.style.top = point.y - 35 + 'px';
//   }
// };
//
// CustomMarker.prototype.remove = function () {
//   if (this.div) {
//     this.div.parentNode.removeChild(this.div);
//     this.div = null;
//   }
// };
//
// CustomMarker.prototype.getPosition = function () {
//   return this.latlng;
// };
// CustomMarker.prototype.setPosition = function (latLng) {
//   if (this.div) {
//     this.latlng = new google.maps.LatLng(latLng);
//     this.draw();
//   }
// };

// CustomMarker.prototype.setRotate = function (deg) {
//   if (this.div) {
//     $(this.div).css('transform', 'rotate(' + deg + 'deg)');
//   }
// };

