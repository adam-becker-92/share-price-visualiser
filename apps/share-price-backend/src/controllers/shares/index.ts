import shareController from './shares';
import { getShareService } from '../../services';
import { getAllShares, getShareTimeSeries } from '../../use-cases/shares';

const shareService = getShareService();

const getAllSharesUseCase = getAllShares({ shareService });
const getShareTimeSeriesUseCase = getShareTimeSeries({ shareService });

const getAll = shareController.getAll(getAllSharesUseCase);
const getOne = shareController.getOne(getShareTimeSeriesUseCase);

export { getAll, getOne };
