/**
 * Created by hongty on 2017/3/16.
 */
function CustomMarker(latlng, map, args) {
  this.latlng = latlng;
  // this.args = args;
  this.setMap(map);
}
CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function () {
  var self = this;
  var div = this.div;
  // var id = this.args.id;
  // var title = this.args.title;
  // var deg = this.args.deg;
  if (!div) {
    div = this.div = document.createElement('div');
    var img = document.createElement('img');
    var span = document.createElement('span');
    img.src = './app/imgs/flight6.png';
    img.style.width = '70px';
    img.style.height = '70px';
    div.className = 'marker';
    div.style.position = 'absolute';
    div.style.cursor = 'pointer';
    div.style.width = '70px';
    div.style.height = '70px';
    div.setAttribute("id", 'marker');
    // span.setAttribute("id", "spanId" + id);
    // span.innerText = id;
    span.style.position = 'absolute';
    span.style.left = '29px';
    span.style.top = '22px';
    span.style.color = '#bbfbfc';
    span.style.width = '14px';
    span.style.display = 'block';
    span.style.textAlign = 'center';

    div.appendChild(img);
    div.appendChild(span);
    // if (typeof(self.args.id) !== 'undefined') {
    //   div.id = self.args.id;
    // }
    google.maps.event.addDomListener(div, "click", function (event) {
      google.maps.event.trigger(self, "click");
    });

    var panes = this.getPanes();
    panes.overlayImage.appendChild(div);
  }
  var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
  console.log('point is ', point, '  ', point.x, '  ', point.y);
  if (point) {
    div.style.left = point.x - 35 + 'px';
    div.style.top = point.y - 35 + 'px';
  }
};

CustomMarker.prototype.remove = function () {
  if (this.div) {
    this.div.parentNode.removeChild(this.div);
    this.div = null;
  }
};

CustomMarker.prototype.getPosition = function () {
  return this.latlng;
};
CustomMarker.prototype.setPosition = function (latLng) {
  if (this.div) {
    this.latlng = new google.maps.LatLng(latLng);
    this.draw();
  }
};

// CustomMarker.prototype.setRotate = function (deg) {
//   if (this.div) {
//     $(this.div).css('transform', 'rotate(' + deg + 'deg)');
//   }
// };

export default CustomMarker

