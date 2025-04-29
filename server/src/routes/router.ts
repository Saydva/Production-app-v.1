import express from 'express';
import { CreateAttribute, CreateDescription, GetAllAttributes, GetAllDescriptions, GetOneAttribute } from '../controllers/controllers';

const router = express.Router();
 
router.get('/attributes', GetAllAttributes)
router.get('/attribute/:id', GetOneAttribute)
router.get(`/descriptions`, GetAllDescriptions)
router.get(`/description/:id`, GetAllDescriptions)
router.post(`/attributes`, CreateAttribute)
router.post(`/descriptions`, CreateDescription)

export default router;