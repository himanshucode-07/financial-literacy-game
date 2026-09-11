import express from 'express';
import { getAllScenarios, getScenarioById } from '../controllers/scenarioController.js';

const router = express.Router();

router.get('/', getAllScenarios);
router.get('/:id', getScenarioById);

export default router;