import {
  generateMockSharePrices,
  generateTimeSeries,
} from '../../utils/mock-data';

let shareService;

class SharesService {
  shares: any;
  timeSeries: any;

  constructor() {
    console.log('Initialising Mock Shares Service');

    this.shares = generateMockSharePrices();
    this.timeSeries = {};
  }

  async getAllSharePrices() {
    return this.shares;
  }

  async getShareDetails(id: number) {
    const data = this.shares.find(({ id: shareId }) => shareId === id);
    const timeSeries = generateTimeSeries(data.price);
    return {
      ...data,
      timeSeries,
    };
  }
}

const getShareService = () => {
  if (shareService) {
    return shareService;
  }

  shareService = new SharesService();
  return shareService;
};

export { getShareService };
