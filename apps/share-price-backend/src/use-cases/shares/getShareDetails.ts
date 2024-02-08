import response from '../../utils/response';

const getShareDetails =
  ({ shareService }) =>
  async (id: number) => {
    try {
      const shareDetails = await shareService.getShareDetails(id);
      return response.success({ data: shareDetails });
    } catch (error) {
      return response.failure();
    }
  };

export default getShareDetails;
