var mymap = L.map('mymap').setView([35.368275, 139.415787], 16);

L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18
}).addTo(mymap);

//現在地ピン設定
function onLocationFound(e) {
    L.marker(e.latlng).addTo(mymap).bindPopup("現在地").openPopup();
}

//現在地取得できない場合の処理
function onLocationError(e) {
    alert("現在地を取得できませんでした。" + e.message);
}

mymap.on('locationfound', onLocationFound);
mymap.on('locationerror', onLocationError);

mymap.locate({setView: true, maxZoom: 16, timeout: 20000});

//この下の部分をdbから引っ張るように修正
//アイコン設定
//満車
var icon1 = L.icon({
    iconUrl:'../img/full.jpg',
	iconSize: [50, 55],
    iconAnchor: [35, 30],
    popupAnchor: [0, -40]
  });
//空車
  var icon2 = L.icon({
    iconUrl:'../img/empty.jpg',
	iconSize: [50, 55],
    iconAnchor: [35, 30],
    popupAnchor: [0, -40]
  });
  //緯度経度
var marker = L.marker([35.368275, 139.415787], {icon:icon1}).addTo(mymap);
marker.bindPopup("<b>文教大学駐輪場</b>");