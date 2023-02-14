
const getStringCity = (array) => `${array.join(", ")}.`;

const numberRound = (number) => {
  const remains = number % 5;
  if (remains >= 2.5) {
    return number - (number % 5) + 5;
  } else return number - (number % 5);
};

const getWord = (number) => {
  const lastFigure = number % 10;
  if (lastFigure === 1) return "компьютер";
  if (lastFigure > 1 && lastFigure < 5) return "компьютера";
  else return "компьютеров";
};

const isSimple = (number) => {
  for (let i = 2; i <= Math.round(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return "Не простое";
    }
  }
  return "Простое";
};

const equalElement = (arr1, arr2) => {
  const doubleElementInArr1 = arr1.filter((item, index) => arr1.indexOf(item) !== index);
  const uniqElemArr1 = [...new Set(doubleElementInArr1)];

  const doubleElementInArr2 = arr2.filter((item, index) => arr2.indexOf(item) !== index);
  const uniqElemArr2 = [...new Set(doubleElementInArr2)];

  return uniqElemArr1.filter((item) => uniqElemArr2.includes(item));
};
const table = (number) => {
  const arr = createArrayFromNumber(number);
  console.log(`   ${arr.join("  ")}`);
  for (let i = 0; i < arr.length; i++) {
    const line = [];
    for (let j = 0; j < arr.length; j++) {
      if (("" + arr[i] * arr[j + 1]).split("").length === 1) {
        line.push(`${arr[i] * arr[j]} `);
      } else {
        line.push(`${arr[i] * arr[j]}`);
      }
    }
    console.log(`${arr[i]}  ${line.join(" ")}`);
  }
};

const createArrayFromNumber = (count) => {
  let oneStep = Array(count).keys();
  const res = [...oneStep].map((item) => `${item + 1}`);
  return res;
};

table(5)
