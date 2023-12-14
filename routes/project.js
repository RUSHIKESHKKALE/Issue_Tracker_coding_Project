import express from 'express'

import projectController from '../controllers/project_controller.js';

const router2=express.Router();

router2.post("/create",projectController.create);
router2.get("/:id",projectController.project);
router2.post("/:id",projectController.createIssue);

export default router2;
