// IIFE 즉시 실행 함수 식 (모듈 패턴)
(({ navigator }) => {
  // 브라우저 (사용자 에이전트) 정보
  const { userAgent } = navigator;

  // iOS 운영체제 여부 확인 유틸리티 함수
  const isIOS = () => userAgent.includes('ios');

  console.log(isIOS());
})(window);
