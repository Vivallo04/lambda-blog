import express from 'express';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
const app = express();

app.use(express.json());
