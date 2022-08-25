<<<<<<< HEAD
## ⚙️ 프로젝트 아키텍처

![image](https://user-images.githubusercontent.com/44804024/186624236-804b1101-477c-464b-aa6f-269cbf04eb3e.png)

## 📚 핵심 기능

#### 1. 반응형 레이아웃

- 우선 브레이크 포인트를 데스크탑 퍼스트로 설정했습니다. 브레이크 포인트를 상세
  하게 지정하지는 않았으며, flex layout과 적절히 조화롭게 사용하여 레이아웃이 무
  너지는 부분에 브레이크 포인트(max-length: 1023px, max-length: 767px)을 사용해
  거의 대부분의 데스크탑 브라우저에서는 반응하게 만들었습니다.

#### 2. 무한 스크롤

- useState를 사용하여 비교적 가장 쉬운 방법으로 구현하였습니다. useEffect를 사용
  하여 page state가 변경 될 때마다 지정해놓은 size 만큼 새로운 데이터를 불러오는
  axios가 실행됩니다. 또한 page state는 스크롤이 바닥에 닿았을 때 state가 변경되
  게 로직을 구성하였습니다.

```javascript
useEffect(() => {
  dispatch(getItemThunk({ page, orderby: orderby, category: 'sunglasses' }));
}, [page, orderby]);
```

## ✒️ 새로 적용해본 기술

#### 1. Media query

- css를 사용하지 않아 styled-components와 같이 react스럽게 media query를 사용할
  수 있는 방법을고민했습니다. 결론적으로 react-responsive를 사용하였고, 사용 방
  법은 아래와 같습니다.
  ```javascript
  const TabletScreen = useMediaQuery({
    query: '(max-width: 1023px)',
  });
  ```
- 해당 변수를 통해 분기처리를 진행하였고, 코드량이 많아졌지만 대부분의 데스크탑
  레이아웃에 대응이 가능하여 팀원 모두 만족하였습니다.

#### 2. Theme provider

- 이전에 기술 매니저님의 피드백으로 클론 코딩때는 꼭 사용해봐야겠다고 생각한 기
  능입니다. 저희 팀은 styled-components에 내장된 ThemeProvider를 사용하였습니다.
  처음 사용하는 부분이라 theme 변수 내에 정의를 해놨어도 간혹 사용되지 않는 부분
  이 있었지만 대부분의 공통 스타일 요소에 ThemeProvider 변수가 들어가도록 노력했
  습니다. 생각한 장점으로는 사이트 내 스타일의 통일감을 주어 사용자가 좀 더 편안
  한 환경에서 사용이 가능할 것 같습니다.

## 🔎 개선해야할 사항

### 1. 인증

#### 1-1. Access token 만료 처리

- 토큰이 만료되었을 때의 로직을 구현 못했습니다. axios intercepter를 통한 error
  관리를 다음에는 적용하겠습니다.

#### 1-2. cookie 사용

- 처음에 Access token을 저장하는 방법으로 cookie를 사용하였으나 만료 시간 설정
  문제로 SessionStorage를 사용했습니다. 다음에는 만료 시간 설정 및 쿠키 값이 만
  료가 되었을 경우 로그아웃 되는 로직을 구현하겠습니다.

### 2. 기능

#### 2-1. 댓글 수정

- 처음 와이어프레임을 작성할 때 댓글 수정레이아웃을 고려하고 작성이 필요했습니다
  . 어려운 기능은 아니지만 어느정도 UI 개발이 된 이후에는 수정이 어려워 다음에는
  와이어프레임 & API 설계 진행할 때 좀 더 고려를 많이 하겠습니다.

#### 2-2. 장바구니 수량

- 장바구니 수량도 댓글 수정과 동일합니다. 뒤늦게 해당 기능 추가에 대해 팀원들 사
  이에서 대두가되었고, UI 구성은 어렵지 않았지만 백엔드 장바구니 API 설계가 변경
  되는 사항이 있어 시간 소요되는 비용을 고려했을 때 진행하지 않기로 하였습니다.
  똑같이 다음에는 와이어프레임 & API 설계 진행할 때 좀 더 고려를 많이 하겠습니다
  .
=======
![GM  Logo](https://user-images.githubusercontent.com/74149915/186643525-1e093aa0-fb3b-4225-85d7-463e980b2916.jpg)

## 👉🏻 프로젝트 소개 <br>
아이웨어(eye wear) 브랜드 'GENTLE MONSTER' 웹 페이지를 클론 코딩하였습니다.
<br><br>

## 🗓 프로젝트 기간
2022년 08월 19일 ~ 2022년 8월 25일 (1주)
<br><br>

## 👻 프로젝트 참여 멤버
성필상 <br>
나소나 <br>
김민석 <br>
<br><br>

## 🛠 프로젝트 아키텍쳐
<br><br>

## ⚙️ 기술 스택
<br><br>

## 📃 API 명세서
<img src="https://user-images.githubusercontent.com/74149915/186645644-6119e10d-81f0-49ab-972e-9be18a92fc03.jpg" width = "500"/>


<br><br>
## 📚 와이어 프레임 
### 1.랜딩페이지
<img src="https://user-images.githubusercontent.com/74149915/186643603-8537b115-53ed-4c04-a69f-7fefcd2243de.jpg" width = "300"/>

### 2.로그인 / 회원가입 페이지
<img src="https://user-images.githubusercontent.com/74149915/186645107-b4fb452e-dc5d-47bf-9460-2de2938ce65c.jpg" width = "300"/>


### 3.장바구니
<img src="https://user-images.githubusercontent.com/74149915/186644738-b42169a9-eb0d-491d-9dd5-c772eb2dd81a.jpg" width = "300"/>

### 4.카테고리페이지
<img src="https://user-images.githubusercontent.com/74149915/186645301-9fb0fefe-759f-47aa-a2fb-26dfa723bb25.jpg" width = "300"/>

### 5.디테일페이지
<img src="https://user-images.githubusercontent.com/74149915/186645344-93815e29-14d4-4413-b51f-6904d75e30dd.jpg" width = "300"/>


### 6.문의페이지
<img src="https://user-images.githubusercontent.com/74149915/186645412-13f9fcca-3e86-4b8a-a5bc-03a509664d0f.jpg" width = "300"/>


<br><br>

## 🚀 새로 적용해본 기술
<br><br>

## 📖 개선해야할 사항
<br><br>

## 🔥 피드백 받은 내용
<br><br>
>>>>>>> ce3ae7e43a98e573cbe19a4d090372f73c610d96
