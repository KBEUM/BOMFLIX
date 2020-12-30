# Bomflix

React를 사용하여 Netflix 웹사이트 디자인을 기본으로 하여 만든 웹사이트입니다.  
Click [kbeum.github.io/bomflix/](kbeum.github.io/bomflix/)  
![bomflixWeb](/public/image/bomflix-min.png)

## 주요기능

- TMDB API를 이용하여 검색기능 구현
- TMDB API를 이용하여 3가지 기준의 영화 정보들 가져와서 화면에 표시
- Youtbe API를 이용하여 Trailer 재생
- React router를 이용하여 내가 좋아하고 추천하는 영화목록을 볼 수 있는 화면 구현

## Component 간략설명

- BomMovie : 하드코딩 된 영화정보들 가져와서 BoM의 영화들 화면 구현
- Header : react-router를 사용하여 화면 전환 및 TMDB API를 사용한 검색기능
- Home : TMDB API를 통해 영화정보들을 가져와서 Home 화면 구현
- MainPoster : Home, BomMovie component에서 props를 받아온 랜덤영화 표시
- Movie : MovieList 에서 각각의 영화를 표시해주는 가장 작은 component
- MovieList : Home, BomMovie 에서 props로 받아온 영화들을 react-slick Library 사용하여 slick으로 구현
