import { generateMockSharePrices } from '../../utils/mock-data';

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
    return this.shares.find(({ id: shareId }) => shareId === id);
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
