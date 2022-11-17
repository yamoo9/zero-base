module.exports = (config) => {
  const fs = require('node:fs');
  const { resolve } = require('node:path');
  const removeCwdPath = require('./removeCwdPath');
  const { deleteTag, editTag } = require('./cliTags');

  let { name, location, language } = config;

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

    let componentDirEntryPath = resolve(
      `${location}/index.${language.type === 'typescript' ? 'ts' : 'js'}`
    );

    if (fs.existsSync(componentDirEntryPath)) {
      let entryContents = fs.readFileSync(componentDirEntryPath, {
        encoding: 'utf-8',
      });

      entryContents = entryContents.trim();

      let editedEntryContents = entryContents.replace(
        `export * from './${name}';`,
        ''
      );

      fs.writeFileSync(componentDirEntryPath, editedEntryContents);

      console.log(
        editTag(`${removeCwdPath(componentDirEntryPath)}/ 파일 수정`)
      );
    }
  }
};
