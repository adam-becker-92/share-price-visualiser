import express from 'express';
import { getOne, getAll } from '../../controllers';

const router = express.Router();

router.route('/').get(getAll);
router.route('/:id').get(getOne);

export default router;
