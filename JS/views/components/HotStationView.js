export const HotStationView = (id, stationName) => {
  return `
    <li>
      <a data-navigate href="station/${id - 1}" class="js-onHotStationSelect hot_station">
        <img class="js-onHotStationSelect hot_station__img" alt="hot_station_img" src="hot_img.svg"/>
        <span class="js-onHotStationSelect ho_station__text">${stationName}</span>
      </a>
    </li>
  `
}