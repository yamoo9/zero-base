expect.extend({
  toBeA11yHidden(received, ...userDefineClassNames) {
    let defaultA11yClassNames =
      'a11y-hidden|a11yHidden|sr-only|srOnly|screen-off|screenOff|blind';

    let a11yClassNamesReg = userDefineClassNames.reduce(
      (classNames, name) => `${classNames}|${name}`,
      defaultA11yClassNames
    );

    const classNamesReg = new RegExp(a11yClassNamesReg, 'i');

    if (!classNamesReg.test(received.className)) {
      return {
        pass: false,
        message() {
          let a11yClassNames = a11yClassNamesReg.replace(/\|/g, ', ');
          return `접근성 감춤 클래스 이름 "${a11yClassNames}"과 일치하지 않습니다.`;
        },
      };
    }

    const styles = received.style._values;
    const styleKeyProps = Object.keys(styles);

    let requiredProps =
      'position, clip, width, height, overflow, margin, padding, border, white-space';

    if (styleKeyProps.length > 0) {
      let stylePropsString = styleKeyProps.join(', ');
      let hasRequiredProps = requiredProps.split(', ').every((name) => {
        if (stylePropsString.includes(name)) {
          return true;
        } else {
          return false;
        }
      });

      if (!hasRequiredProps) {
        return {
          pass: false,
          message() {
            return `접근성 감춤 스타일 요건을 위해 필요한 필수 속성 "${requiredProps}"중 일부가 포함되지 않았습니다.`;
          },
        };
      }
    }

    const styleProps = [];

    for (const [key, value] of Object.entries(styles)) {
      switch (key) {
        case 'overflow':
          styleProps.push([key, value === 'hidden']);
          break;
        case 'position':
          styleProps.push([key, value === 'absolute']);
          break;
        case 'width':
        case 'height':
          styleProps.push([key, parseInt(value, 10) > 0]);
          break;
        case 'margin-top':
        case 'margin-left':
        case 'margin-right':
        case 'margin-bottom':
          styleProps.push([key, parseInt(value, 10) < 0]);
          break;
        case 'padding-top':
        case 'padding-left':
        case 'padding-right':
        case 'padding-bottom':
          styleProps.push([key, parseInt(value, 10) === 0]);
          break;
        case 'border-width':
          styleProps.push([key, parseInt(value, 10) === 0]);
          break;
        case 'clip':
          styleProps.push([
            key,
            value
              .replace(/^rect\(|\)$/g, '')
              .split(',')
              .every((v) => /(1|0)/.test(parseInt(v, 10))),
          ]);
          break;
        case 'white-space':
          styleProps.push([key, value === 'nowrap']);
          break;
        default:
      }
    }

    if (!styleProps.every(([key, value]) => value)) {
      return {
        pass: false,
        message() {
          return `style 속성에 부여된 값으로는 접근성 감춤 스타일 요건에 충족하지 않습니다.`;
        },
      };
    }

    return {
      pass: true,
    };
  },
});
