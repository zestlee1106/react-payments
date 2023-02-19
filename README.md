# 🚀 React 모바일 페이먼츠 애플리케이션

> `Component-Driven Development` 에 따라 UI를 구성하고 재사용 가능한 `Component`를 작성합니다.

## 필수 요구사항

- [ ] Storybook 상호 작용 테스트
- [x] 재사용 가능한 Component 작성

## 카드 추가

- [x] <(뒤로가기) 버튼 클릭 시, 카드 목록 페이지로 이동한다.
- [x] 카드 번호를 입력 받을 수 있다.
  - [x] 카드 번호는 숫자만 입력가능하다.
  - [ ] 카드 번호 4자리마다 -가 삽입된다.
  - [x] 카드 번호는 실시간으로 카드 UI에 반영된다.
  - [x] 카드 번호는 앞 8자리만 숫자로 보여지고, 나머지 숫자는 \*로 보여진다.
- [x] 만료일을 입력 받을 수 있다.
  - [x] MM / YY 로 placeholder를 적용한다.
  - [ ] 월, 년 사이에 자동으로 /가 삽입된다.
  - [x] 만료일은 실시간으로 카드 UI에 반영된다.
  - [x] 월은 1이상 12이하 숫자여야 한다.
- [x] 보안코드를 입력 받을 수 있다.
  - [x] 보안코드는 \*으로 보여진다.
  - [x] 보안코드는 숫자만 입력가능하다.
- [x] 카드 비밀번호의 앞 2자리를 입력 받을 수 있다.
  - [x] 카드 비밀번호는 각 폼마다 한자리 숫자만 입력가능하다.
  - [x] 카드 번호 입력 시, \*으로 보여진다.
- [x] 카드 소유자 이름을 입력 받을 수 있다.
  - [x] 이름은 30자리까지 입력할 수 있다.
  - [x] 이름 입력 폼 **위에**, 현재 입력 자릿수와 최대 입력 자릿수를 실시간으로 보여준다.
- [x] 카드 추가 완료시 카드 등록 완료 페이지로 이동한다.

---

## 과제를 하면서 생긴 질문

1. 지난 계산기 미션에서 styled component 를 컴포넌트의 아래로 내리는 편이 나을 것 같다고 말씀 주셨는데 (물론 취향차이라고 하심!!)  
    그렇다면 type 도 아래로 내리는 편이 나을까?  
    예시)

   ```tsx
   // 첫번째 구현 방법
   function Input({ type = "text" }: InputProps) {
     return <StyledInput type={type}></StyledInput>;
   }

   type InputProps = {
     type: string;
   };

   // 두번째 구현 방법
   type InputProps = {
     type: string;
   };

   function Input({ type = "text" }: InputProps) {
     return <StyledInput type={type}></StyledInput>;
   }
   ```

2. 자동으로 4자리마다 - 를 추가하는 것과, / 를 추가하는 것은 input 을 중간 중간에 넣어야 하는 건지? 감을 못 잡겠다 ㅠㅠ
3. onChange 로 너저분한 코드들이 너무 많은데, 이것을 use 커스텀 훅을 써서 뭉칠 방법이 있을까?
