# React 컴포넌트 디렉토리 스캐폴딩 툴

스캐폴딩 된 React 컴포넌트 디렉토리를 자동 생성하는 명령어 환경 도구입니다.

## 도구 설치

React 프로젝트 루트 위치에서 다음 명령을 실행해 도구를 설치합니다.

```sh
npx degit yamoo9/create-react-component create-react-component
```

## 도구 명령어 구성

`package.json` 파일을 열어 scripts 항목에 다음 명령을 추가합니다.

```json
{
  "scripts": {
    "rc": "node create-react-component create",
    "rd": "node create-react-component delete"
  }
}
```

## React 컴포넌트 생성

React 컴포넌트 디렉토리를 생성합니다.

```sh
# rc → react component : create
npm run rc
```

## React 컴포넌트 제거

React 컴포넌트 디렉토리를 제거합니다.

```sh
# rd → react component : delete
npm run rd
```

## 구성 옵션

`config.json` 파일을 열어 기본 옵션 값을 재설정할 수 있습니다.

```json
{
  "location": "src/components",
  "language": {
    "type": "javascript",
    "ext": ".jsx"
  },
  "style": {
    "ext": ".css",
    "module": false,
    "moduleClassName": "container"
  },
  "test": {
    "type": "storybook",
    "suffix": "stories"
  }
}
```

## 커스텀 템플릿 설정

템플릿(templates) 디렉토리 안에 기본 제공된 템플릿을 변경하여 사용자 정의 템플릿을 설정할 수 있습니다. 템플릿 내부 `{name}` 부분이 컴포넌트 이름으로 대치됩니다.

```sh
templates/
├── javascript/
│   ├── [name].css
│   ├── [name].jsx
│   ├── [name].stories.jsx
│   ├── [name].test.jsx
│   └── index.js
└── typescript/
    ├── [name].css
    ├── [name].stories.tsx
    ├── [name].test.tsx
    ├── [name].tsx
    └── index.ts
```