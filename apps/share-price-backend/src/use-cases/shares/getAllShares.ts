import response from '../../utils/response';

const getAllShares =
  ({ shareService }) =>
  async () => {
    try {
      const allShares = await shareService.getAllSharePrices();
      return response.success({ data: allShares });
    } catch (error) {
      return response.failure();
    }
  };

export default getAllShares;
