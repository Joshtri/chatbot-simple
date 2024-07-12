import express from 'express';
// import manager from '../nlpManager.js'; // Mengimpor instance NLPManager

import * as nlpController from '../controllers/nlp.controller.js';

const router = express.Router();

router.post('/process/answering', nlpController.processText);


router.get('/', nlpController.chatPage)

export default router; // Mengekspor instance router
