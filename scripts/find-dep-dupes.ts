import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);

const findDupeKeys = (path: string) => {
  const data = readFileSync(path, 'utf8');

  const obj = JSON.parse(data);

  const map = new Map<string, number>();

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const traverse = (o: any) => {
    for (const key in o) {
      if (typeof o[key] === 'object') {
        traverse(o[key]);
      } else {
        // Split the key into name and version
        const packageName = key.split('@')[0];

        if (map.has(packageName)) {
          const current = map.get(packageName);
          if (current !== undefined) {
            map.set(packageName, current + 1);
          }
        } else {
          map.set(packageName, 1);
        }
      }
    }
  };

  traverse(obj);

  console.log('Duplicates:');
  console.log('-----------------');
  for (const [key, value] of map) {
    if (value > 1) {
      console.log(key, value);
    }
  }
};

findDupeKeys(args[0]);
