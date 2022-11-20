import { withTheme } from '@/contexts/theme';

export const DeepChild = withTheme(function DeepChild({
  // eslint-disable-next-line no-unused-vars
  themeValue,
  ...restProps
}) {
  return <span className="deep-child" {...restProps} />;
});
