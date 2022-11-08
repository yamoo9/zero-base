const fs = require("node:fs");
const { resolve } = require("node:path");
const removeCwdPath = require('./_removeCwdPath');
const { createTag, editTag } = require('./_tags');

module.exports = function scaffoldReactComponentFiles({
  location,
  name,
  module,
  ext,
  styleExt,
  testSuffix,
}) {
  if (name) {

    let dirPath = resolve(`${location}/${name}`);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
      console.log(createTag(`${removeCwdPath(dirPath)} 디렉토리 생성`));
    }

    let styleFileName = `${name}${module ? '.module' : ''}${styleExt}`;

    // ----------------------------------------------------------------------------------------
    // 엔트리 파일
    
    let entryFilePath = `${dirPath}/index.js`;
    
    fs.writeFileSync(
      resolve(entryFilePath),
      `export * from './${name}'`
    );

    console.log(createTag(`${removeCwdPath(entryFilePath)}/ 파일 생성`));

    // ----------------------------------------------------------------------------------------
    // React 컴포넌트 파일

    let reactFilePath = `${dirPath}/${name}${ext}`;

    fs.writeFileSync(
      resolve(reactFilePath),
      `import ${module ? 'styles from' : ''} "./${styleFileName}";

export function ${name}({...restProps}) {
  return <div className=${module ? `{styles.container}` : `"${name}"`} {...restProps}></div>;
}`
    );

    console.log(createTag(`${removeCwdPath(reactFilePath)}/ 파일 생성`));

    // ----------------------------------------------------------------------------------------
    // React 컴포넌트 스타일 파일

    let reactStyleFilePath = `${dirPath}/${styleFileName}`;

    fs.writeFileSync(
      resolve(reactStyleFilePath),
      module ? `.container {}` : `.${name} {}`
    );

    console.log(createTag(`${removeCwdPath(reactStyleFilePath)}/ 파일 생성`));
    
    // ----------------------------------------------------------------------------------------
    // React 컴포넌트 테스트 파일

    let reactTestFilePath = `${dirPath}/${name}.${testSuffix}${ext}`;

    fs.writeFileSync(
      resolve(reactTestFilePath),
      `import { render, screen } from '@testing-library/react';
import { ${name} } from './${name}';

describe('${name} 컴포넌트', () => {
  test('${name} 컴포넌트는 정상적으로 렌더링됩니다.', () => {
    render(<${name}>테스트</${name}>);
    const element = screen.getByText(/테스트/);
    expect(element).toBeInTheDocument();
  });
});`
    );

    console.log(createTag(`${removeCwdPath(reactTestFilePath)}/ 파일 생성`));

    // ----------------------------------------------------------------------------------------
    // 컴포넌트 디렉토리 엔트리 파일 수정

    let componentDirEntryPath = resolve(`${location}/index.js`);

    let entryContents = fs.readFileSync(componentDirEntryPath, { encoding: 'utf-8' });

    entryContents = entryContents.trim();

    fs.writeFileSync(componentDirEntryPath, `${entryContents}\nexport * from './${name}';`);

    console.log(editTag(`${removeCwdPath(componentDirEntryPath)}/ 파일 수정`));

  } else {
    console.error('[🚨 오류] --name=컴포넌트_이름 옵션 설정이 필요합니다.');
    process.exit();
  }
}