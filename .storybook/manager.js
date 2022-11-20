import './theme/favicon';
// import React from 'react';
import { addons } from '@storybook/addons';
import { meta } from './theme/meta';

addons.setConfig({
  // 테마 (Storybook 테마 또는 커스텀 테마)
  theme: meta.light,
  // 애드온 패널 표시 설정
  showPanel: true,
  // 패널 위치 설정 (bottom, right)
  panelPosition: 'right',
  // 스토리 컴포넌트 리스트 표시 설정
  showNav: true,
  // 사이드바 옵션 설정
  sidebar: {
    // 사이드바 최상위 노드를 루트로 표시
    showRoots: false,
    // 접혀있는 루트 노드 ID 세트
    collapsedRoots: [], // ['misc', 'other']
    // 트리 노드 커스텀 레이블 설정 (ReactNode 반환)
    // renderLabel: (item) => <strong>{item.name}</strong>,
  },
  // 툴바 표시 설정
  showToolbar: true,
  // 툴바 항목 표시 설정
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
  // 단축키 활성 설정
  enableShortcuts: true,
  // 스토리 컴포넌트를 전체 화면으로 표시 설정
  isFullscreen: false,
  // 모바일 환경에서 기본 활성화 될 탭 표시 설정
  initialActive: 'sidebar',
  // 애드온 패널을 선택하는 ID
  selectedPanel: undefined,
});
