import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const filePath = `${process.cwd()}/name.json`;
{
  accessSync(filePath);
  const jsonObject = readFileSync(filePath, 'utf8');
  const decodedObject = JSON.parse(jsonObject);
  console.log(`The current name is: ${decodedObject.name}`);
}
const storeData = (askedName) => {
  try {
    const jsonObject = readFileSync(filePath, 'utf8');
    const decodedObject = JSON.parse(jsonObject);
    decodedObject.name = askedName;
    console.log(`The new name is ${askedName}`);
    writeFileSync(filePath, JSON.stringify(decodedObject));
  } catch (err) {
    console.error('Something went wrong', err);
  }
};

rl.question('Please enter a new name: ', (answer) => {
  storeData(answer);
  rl.close();
});

