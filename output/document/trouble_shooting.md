

# 📌 event로 dom 갈아끼우기

DOM에 변화를 주는 기능을 만들 때 항상 event.target부터 부모 요소로 타고 올라가서 htmlCollection을 변경하는 방식으로 하다보니 어려웠다. 

```js
// 기존에 사용하던 화면 일부 rendering 방식
export const textCountHandler = (target) => {
  const length = target.value.length;
  const textCnt = [...target.parentNode.children][4];
  textCnt.textContent = `${length}/100`;
  const submitBtn = [...target.parentNode.children][7];
  if (length > 0) {
    submitBtn.disabled = false;
    submitBtn.classList.add("upload__submit-btn--active");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("upload__submit-btn--active");
  }

  if (length > 100) {
    target.value = target.value.substring(0, 100);
    textCnt.textContent = "100/100";
  }
};
```
이후에 크롱께서 render가 완료되고나면 querySelector로 DOM에 접근할 수 있다는 것을 알려주셔서 이후에는 쉽게 기능을 구현할 수 있었다. 
```js
// rendering 후 dom 접근하기
export const renderHotStations = (stations) => {
  const hotHTML = HotStationListView(stations);
  document.querySelector(".home__hot_area").innerHTML = hotHTML;
};
```
그동안 고생했지만 DOM에 대한 이해를 높일 수 있는 시간이었다


# 📌 노선도 페이지 만들기

노선도를 화면에 구현할 때, 역마다의 버튼을 알맞게 위치시키는게 아주 까다로웠다.  
background-image로 노선도를 넣고 grid를 사용해서 버튼의 위치를 배치했다.  
[grid 정리한 블로그 글](https://velog.io/@sang-mini/grid-%EB%BF%8C%EC%88%98%EA%B8%B0)  

![image](https://github.com/softeerbootcamp-3nd/softee5-mobil2team-FE/assets/87116017/0752c22e-5963-4147-ae7e-c451ac3e5527)  
간격이 다른 부분만 생각해서 따로 px로 고정시키고 나머지는 fr을 사용해서 비율을 맞췄다.   
그리고 nth-child로 줄마다 선택해서 grid container안에서의 배치를 해주었다. 
```css
&:nth-child(n + 6):nth-child(-n + 18) {
    place-self: start center;
  }
```
위와 같은 방식으로 nth-child의 범위를 선택할 수 있다는 것을 처음 알았다.  


