export const HotStationView = (id, stationName) => {
  return `
    <a data-navigate href="station/${id - 1}">
      <li class="js-onHotStationSelect hot_station" id="hot_${id}">
        <img class="js-onHotStationSelect hot_station__img" alt="hot_station_img" src="hot_img.svg"/>
        <span class="js-onHotStationSelect ho_station__text">${stationName}</span>
      </li>
    </a>
  `
}