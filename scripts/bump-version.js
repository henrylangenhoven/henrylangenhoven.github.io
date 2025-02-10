const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pkgPath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

// Split the current version (expects format: YYYY.M.n)
const [curYear, curMonth, curRelease] = pkg.version.split('.').map(Number);

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // JavaScript months are zero-indexed

let newRelease = 1;
if (year === curYear && month === curMonth) {
  newRelease = curRelease + 1;
}
const newVersion = `${year}.${month}.${newRelease}`;
pkg.version = newVersion;

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
console.log(`Bumped version to ${newVersion}`);

// Run git commands to commit the change and tag it.
execSync('git add package.json', { stdio: 'inherit' });
execSync(`git commit -m "chore: bump version to ${newVersion}"`, { stdio: 'inherit' });
execSync(`git tag ${newVersion}`, { stdio: 'inherit' });
console.log(`Created commit and tag ${newVersion}`);
