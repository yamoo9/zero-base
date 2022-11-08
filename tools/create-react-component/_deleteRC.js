module.exports = (config) => {
  const fs = require('node:fs');
  const { resolve } = require('node:path');
  const removeCwdPath = require('./_removeCwdPath');
  const { deleteTag, editTag } = require('./_tags');

  let { name, location } = config;

  if (!name) {
    console.error('[🚨 오류] --name=컴포넌트_이름 옵션 설정이 필요합니다.');
    process.exit();
  }

  let dirPath = resolve(`${location}/${name}`);

  if (fs.existsSync(dirPath)) {
    // ----------------------------------------------------------------------------------------
    // 컴포넌트 디렉토리 제거

    fs.rmSync(dirPath, { recursive: true });

    console.log(
      deleteTag(`${removeCwdPath(dirPath)} 디렉토리가 삭제되었습니다.`)
    );

    // ----------------------------------------------------------------------------------------
    // 컴포넌트 디렉토리 엔트리 파일 수정

    let componentDirEntryPath = resolve(`${location}/index.js`);

    let entryContents = fs.readFileSync(componentDirEntryPath, {
      encoding: 'utf-8',
    });

    entryContents = entryContents.trim();

    let editedEntryContents = entryContents.replace(
      `export * from './${name}';`,
      ''
    );

    fs.writeFileSync(componentDirEntryPath, editedEntryContents);

    console.log(editTag(`${removeCwdPath(componentDirEntryPath)}/ 파일 수정`));
  }
};
