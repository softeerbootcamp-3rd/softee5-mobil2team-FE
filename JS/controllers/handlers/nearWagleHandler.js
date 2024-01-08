import { getNearStation } from "../api/getApi";

export const gotoNearWagle = (target) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      getNearStation(latitude, longitude);
    }, function(error) {
      alert('위치 정보를 가져올 수 없습니다.');
    });
  } else {
    alert('이 브라우저에서는 위치 정보가 지원되지 않습니다.');
  }
};
