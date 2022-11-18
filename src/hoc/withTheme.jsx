import React from 'react';
import { ThemeContext } from '@/contexts/theme';

// --------------------------------------------------------------------------
// ✅ [TODO]
// --------------------------------------------------------------------------
// - [ ] ThemeContext.Provider 공급자 ({theme, setTheme})
// - [ ] withTheme(컴포넌트) → 테마 상태 값을 전달하는 고차 컴포넌트 생성
// --------------------------------------------------------------------------

export function withTheme(Component) {
  return class WithThemeHOC extends React.Component {
    static contextType = ThemeContext;
    render() {
      return <Component themeValue={this.context} {...this.props} />;
    }
  };
}
