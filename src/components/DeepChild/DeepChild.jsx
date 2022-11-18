import { withTheme } from '@/hoc/withTheme';

export const DeepChild = withTheme(function DeepChild({
  themeValue,
  ...restProps
}) {
  console.log(themeValue);
  return <div className="deep-child" {...restProps} />;
});
