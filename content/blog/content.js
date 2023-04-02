const fs = require('fs');

// ディレクトリ内のファイルを読み込む
const files = fs.readdirSync('./');
files.forEach(file => {
  if(/content|index/.test(file)) return;
  // ファイルの内容を読み込む
  const content = fs.readFileSync(file, 'utf8');

  // ファイルの内容を出力する
  const splittedName = file.split('-');
  const date = splittedName[0] + '-' + splittedName[1] + '-' + splittedName[2];
  const slug = splittedName[3].split('.')[0];
  console.log(date)
  console.log(slug)
  console.log('----------')
});