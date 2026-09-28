import { Router } from 'express';
import { RequesterController } from '../controllers/RequesterController.js';

export const requesterRouter = Router();
const requesterController = new RequesterController();

requesterRouter.get('/', requesterController.getAll);
requesterRouter.get('/:id', requesterController.getById);
requesterRouter.post('/', requesterController.create);
requesterRouter.put('/:id', requesterController.update);
requesterRouter.delete('/:id', requesterController.delete);