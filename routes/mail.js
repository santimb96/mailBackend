import express from 'express';
import mailController from '../controllers/mailController.js';

const router = express.Router();

router
  .get('/', mailController.checkOk)
  .post('/', mailController.sendEmail)

export default router;