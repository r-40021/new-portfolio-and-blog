const fs = require('fs');

// ディレクトリ内のファイルを読み込む
const files = fs.readdirSync('./');
files.forEach(file => {
  if (/content|index/.test(file)) return;
  // ファイルの内容を読み込む
  const content = fs.readFileSync(file, 'utf8');

  // ファイルの内容を出力する
  const splittedName = file.split('-');
  const date = splittedName[0] + '-' + splittedName[1] + '-' + splittedName[2];
  const slug = splittedName[3].split('.')[0];
  console.log(date)
  console.log(slug)

  if (!/date \:/.test(content)) {
    // 日付を追加する
    const newContent = content.replace(/---/, '')
                              .replace(/---/, `date: ${date}\nslug: ${slug}\n---\n`);
    // ファイルに書き込む
    fs.writeFileSync(file, '---' + newContent, 'utf8');
  }
  console.log('----------')

  const yaml = trim(content, '---', '---');
  // 空白行を除去する
  const newContent = content.replace(yaml, yaml.replace(/\n\s*\n/g, '\n'));
  // ファイルに書き込む
  fs.writeFileSync(file, newContent, 'utf8');

  // タグ部分を取得
  const tags = trim(yaml, 'tags:', '\n').trim();
  // if(/ /g.test(tags)) {
    // const taglist = tags.split(' ');
    // const newTags = taglist.map(tag => `- ${tag}`).join('\n');
    const newContentt = content.replace('tags: -', 'tags:\n-');
    // ファイルに書き込む
    fs.writeFileSync(file, newContentt, 'utf8');
  // }
});

// 指定された文字列の間を取得する
function trim(str, start, begin) {
  const startIndex = str.indexOf(start) + start.length;
  const endIndex = str.indexOf(begin, startIndex);
  return str.slice(startIndex, endIndex);
}