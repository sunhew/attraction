# 다양한 음식 레시피 사이트

이 웹사이트는 다양한 음식 레시피를 제공하는 간단한 웹 애플리케이션입니다. 매일 업데이트되는 다양한 요리 레시피를 통해 원하는 음식을 쉽게 찾아볼 수 있으며, 레시피 상세 페이지에서 요리 과정을 단계별로 볼 수 있습니다.

## 작업 순서
1. node.js 설치 / 버전 확인하기 (node --v)
2. react 설치
3. 라이브러리 설치
4. 폴더 셋팅 : 필요없는 파일 제거
5. header 설정
6. Suspenes 설정
7. 각 페이지 메타 태그 설정(HelmetProvider)

components

## 필요한 라이브러리 설치
- react를 설치 `npx create-react-app 폴더이름` : 폴더를 생략하고 싶으면 .으로 표시
- react-router-dom 설치 `npm install react-router-dom` : 주소를 설정하기 위한 라이브러리
- axios 설치 `npm install axios` : API 라이브러리
- react icon 설치 `npm install react-icons` : 리액트에 필요한 아이콘 
- react-player 설치 `npm install react-player` : 유튜브 영상 재생
- sass 설치 `npm install sass` : CSS 라이브러리
- react-helmet-asyne 설치 `npm install react-helmet-async` : SEO
- swiper 설치 `npm install swiper` : 이미지 슬라이트
- swiper 설치 `npm install --save-dev @babel/plugin-proposal-private-property-in-object` : 이미지 슬라이트
- rafce(리액트에서 사용할 것 임), rafc(넥스트 js에서 사용 예정) 의 차이점: 임포트등을 자동으로 만들어지는 단축키
- `npm start` : 실행 명령어
- <></> 빈 박스가 생기지 않도록 가상으로 묶는 방법
- `<Main></Main>` 으로 비동기 방식으로 하는 방법
- rapidapi.com : api 불러오는 사이트

`props.children`
`npm run build`
리더스
`VideoSlider.jsx` 정리

```bash
npm install react-router-dom axios react-icons react-player sass react-helmet-async swiper
```

# API와 JSON을 이용한 음식 레시피 사이트 "마이 레시피"

**[마이레시피](https://attraction-five.vercel.app/)는`REACT` 와 `API`를 사용하여 만든 음식 레시피 사이트입니다. 이 사이트는 다양한 요리 레시피와 자신만의 레시피 노트를 생성 및 관리할 수 있는 기능을 제공하여 조금 더 나은 요리 경험을 드릴 수 있도록 신경 썼습니다. 메인 페이지에서는 9개의 추천 레시피가 있으며, 쉽게 따라할 수 있도록 단계별 요리 과정을 영상으로 제공합니다


## 헤더 영역

헤더에는 레시피의 생성 및 추가한 레시피를 관리하는 등의 개인 레시피 노트를 제공하며 다양한 요리 카테고리별 인기 레시피 정보를 제공합니다

---

### 메인 화면

메인 화면의 콘텐츠를 크게 구분하자면 상단에는 검색 기능을 제공하는 탐색바, 그 아래에는 다양한 요리 카테고리와 추천 레시피, 검색된 내용을 표시하는 기능이 포함되어있습니다.


---

## 겪었던 문제점

1. **메세지 알람의 중복**: __플레이 리스트를 추가하거나 재생할경우 누를때마다 알람이 중복되는 경우__ 가 발생되었는데 검사를 하거나 원인을 찾아보던 중 __`addTrackToList` 와 `addTrackToEnd`의 메세지가 중복되어있던걸 발견해 수정__ 하자 메세지 알람이 한번씩 나오게 되었습니다. 해당 부분을 수정하는 과정에서 __'이미 곡이 추가되어있는 경우에는 다른 메세지가 나오면서 중복된 곡은 추가되지 못하도록 막으면 어떨까?' 라는 생각이 들어 `addToUserPlaylist` 함수를 추가해 곡을 추가할떄마다 조건을 검사하게 만들어 원하던 기능을 구현하는데 성공__ 했습니다.
<br />

2. **key의 인식 문제**: 로컬 서버에서는 문제없이 작동하지만 서버에 올릴경우 key를 인식하지 못해 서버에서 검색기능등이 제대로 작동하지 않는다는 단점이 있었습니다. 이 문제를 일주일정도 고민하며 수정을 하려 백엔드 설정을 하는등의 방법을 시도해봤지만 실패해 결국  GIT에 커밋을 할떄 ENV 파일을 같이 올리는 방법으로 해결했습니다. 해당 부분은 추후 ENV 파일을 숨긴채 커밋을 하는 방법을 다시 찾아볼 예정입니다.
<br />

3. **플레이 리스트의 서버 저장**: 3번 역시 2번과 같이 백앤드와 서버 설정을 따로 할 경우 사이트를 나갔다 다시 들어와도 플레이 리스트가 유지된다는것을 알게 되었지만 아쉽게도 아직 구현을 성공하지 못해 사이트를 나갈경우 생성한 리스트가 저장되지 않는다는 문제점이 있습니다.
