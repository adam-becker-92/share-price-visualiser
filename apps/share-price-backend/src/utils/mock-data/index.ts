enum Ticker {
  APPL = 'Apple Inc',
  MSFT = 'Microsoft Corp',
  AMZN = 'Amazon.com Inc',
  GOOG = 'Alphabet Inc Class C',
  META = 'Meta Platforms Inc',
  KO = 'Coca-Cola Co',
  PEP = 'PepsiCo Inc',
  MCD = "McDonald's Corp",
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

function generateTimeSeries(price: number) {
  let priceReference = price;
  const timeSeries = [];
  for (let i = 0; i < 14; i++) {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    timeSeries.unshift({
      price: priceReference,
      date,
    });

    priceReference = priceReference + generateRandomNumber(3, true);
  }

  return timeSeries;
}

export { generateMockSharePrices, generateTimeSeries };
