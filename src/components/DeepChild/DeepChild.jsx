import { withTheme } from '@/contexts/theme';

export const DeepChild = withTheme(function DeepChild({
  themeValue,
  ...restProps
}) {
  console.log(themeValue);
  return <div className="deep-child" {...restProps} />;
});
