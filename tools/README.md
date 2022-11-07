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
# rc:c → react component : create
npm run rc -- 컴포넌트_이름
```

## React 컴포넌트 제거

React 컴포넌트 디렉토리를 제거합니다.

```sh
# rc:d → react component : delete
npm run rd -- 컴포넌트_이름
```

## 구성 옵션

`config.json` 파일을 열어 기본 옵션 값을 재설정할 수 있습니다.

```json
{
  "location": "src/components",
  "module": false,
  "ext": ".jsx",
  "styleExt": ".css",
  "testSuffix": "test"
}
```

## 명령어 옵션

다음 옵션을 설정해 명령을 실행할 수 있습니다.

| 옵션           | 설명                        | 기본 값          | 필수 여부 |
| -------------- | --------------------------- | ---------------- | --------- |
| `--name`       | 컴포넌트 이름               |                  | ✅        |
| `--location`   | 컴포넌트 디렉토리 위치      | `src/components` | ❎        |
| `--module`     | 스타일 파일 모듈 사용 여부  | `false`          | ❎        |
| `--ext`        | 컴포넌트 파일 확장자        | `.jsx`           | ❎        |
| `--styleExt`   | 컴포넌트 스타일 파일 확장자 | `.css`           | ❎        |
| `--testSuffix` | 컴포넌트 테스트 파일 접미사 | `test`           | ❎        |

<br />

---

COPYRIGHT RESERVED. 2022 @ EUID
