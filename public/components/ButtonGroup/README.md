<header>

# `<button-group>`

버튼 그룹 (Button Group) 커스텀 엘리먼트

</header>

<main>

## 기능

- 페이지에 있는 기존 버튼 스타일을 사용합니다.
- 빌트인 폼(Form) 요소처럼 작동하기 위해 [ElementInternals](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals)를 사용합니다.
- 접근성을 고려해 설계되었습니다.
- 압축된 파일 크기는 2KB로 초경량입니다.

## 컴포넌트 구성

컴포넌트 파일을 HTML 문서에 포함하면 바로 사용할 수 있습니다.

```html
<script type="module" src="components/ButtonGroup.js"></script>
```

## 사용 예시

기본 사용법 (선택된 옵션 없음)

```html
<button-group>
  <button type="button">디자인</button>
  <button type="button">프리뷰</button>
</button-group>
```

`aria-pressed` 속성 값으로 사전 선택된 상태 구현

```html
<button-group>
  <button type="button">디자인</button>
  <button type="button" aria-pressed="true">프리뷰</button>
</button-group>
```

`value` 속성 값 설정

```html
<button-group id="temporal" oninput="out.textContent = this.value">
  <button type="button" value="">없음</button>
  <button type="button" value="d">날짜</button>
  <button type="button" value="t">시간</button>
  <button type="button" value="dt">날짜 &amp; 시간</button>
</button-group>

<output id="out"></output>
```

`multiple` 속성을 추가해 멀티 옵션 선택

```html
<button-group 
  multiple 
  oninput="button_multiple_value.textContent = this.value"
>
  <button type="button" value="b">
    <span style="font-weight: bold">B</span>
  </button>
  <button type="button" value="i">
    <span style="font-style: italic">I</span>
  </button>
  <button type="button" value="u">
    <span style="text-decoration: underline">U</span>
  </button>
</button-group>

<output id="button_multiple_value"></output>
```

폼 전송 시, 포함 설정 ([`ElementInternals`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) 지원 필요):

```html
<form action="about:blank" target="_blank">
  <button-group name="favorite_letter">
    <button type="button">A</button>
    <button type="button" aria-pressed="true">B</button>
    <button type="button">C</button>
    <button type="button">D</button>
    <button type="button">E</button>
    <button type="button">F</button>
    <button type="button">G</button>
  </button-group>
  <button type="submit">전송</button>
</form>
```

정렬 방향 : 수직(`vertical`)

```html
<button-group name="type" vertical>
  <button type="button" value="garlic" aria-pressed="true">마늘</button>
  <button type="button" value="msg">조리료(MSG)</button>
  <button type="button" value="salt">소금</button>
</button-group>
```

버튼 사이 간격 분리(`separate`)

```html
<button-group name="type" separate>
  <button type="button">소금</button>
  <button type="button">후추</button>
  <button type="button">마늘</button>
  <button type="button">커민</button>
  <button type="button">고수풀</button>
  <button type="button">딜</button>
  <button type="button">파슬리</button>
  <button type="button">심황</button>
</button-group>
```

동적으로 `element.value` 설정

```html
<button-group id="group1">
  <button type="button">A</button>
  <button type="button" aria-pressed="true">B</button>
  <button type="button">C</button>
</button-group>

<button onclick="group1.value = 'C'">C 선택</button>
```

동적으로 `aria-pressed` 속성 추가

```html
<button-group id="group2">
  <button type="button">A</button>
  <button type="button" aria-pressed="true">B</button>
  <button type="button">C</button>
</button-group>

<button 
  type="button" 
  onclick="group2.children[2].setAttribute('aria-pressed', 'true')"
>
  C 선택
</button>
```

동적으로 옵션 추가

```html
<button-group id="group3">
  <button type="button">1</button>
  <button type="button">2</button>
  <button type="button" aria-pressed="true">3</button>
</button-group>

<button
  type="button"
  onclick="
    globalThis.counter ||= 3; 
    group3.insertAdjacentHTML('beforeend', `<button type='button' aria-pressed='true'>${++counter}</button>`)
  "
>
  옵션 추가
</button>
```

[[WIP]](https://twitter.com/LeonieWatson/status/1547544701036888065) `<button-group>` 요소는 암시적으로 `region` ARIA 역할이 부여되어 있으므로 `aria-label`을 추가하면 랜드마크로 기본 작동합니다.
([`ElementInternals`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) 지원 필요):

```html
<button-group aria-label="표시 방법 변경">
  <button type="button">디자인</button>
  <button type="button" aria-pressed="true">프리뷰</button>
</button-group>
```

일반 레이블도 작동해야 합니다. ([`ElementInternals`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) 지원 필요):

```html
<label for="view-switcher">표시 모드</label>

<button-group id="view-switcher">
  <button type="button">디자인</button>
  <button type="button" aria-pressed="true">프리뷰</button>
</button-group>
```

</main>
