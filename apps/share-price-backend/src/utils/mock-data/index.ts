enum Ticker {
  APPL = 'Apple',
  MSFT = 'Microsoft',
  AMZN = 'Amazon',
}

interface IMockSharePrice {
  id: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
  volume: number;
}

const generateRandomNumber = (factor = 100, canBeNegative = false): number => {
  const seedValue = Math.random() - (canBeNegative ? 0.5 : 0.0);
  return parseFloat((seedValue * factor).toFixed(2));
};

const generateMockSharePrices = (): Array<IMockSharePrice> => {
  const returnObject = [];
  for (const id in Ticker) {
    const price = generateRandomNumber();
    const change = generateRandomNumber(4, true);
    const percentChange = ((change / price) * 100).toFixed(2);
    const volume = generateRandomNumber(100000000);

    returnObject.push({
      id,
      name: Ticker[id],
      price,
      change,
      percentChange,
      volume,
    });
  }
  return returnObject;
};

export { generateMockSharePrices };
