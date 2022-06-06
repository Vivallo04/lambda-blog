import express from 'express';
// import { PrismaClient, Prisma } from '@prisma/client';

// const prisma = new PrismaClient();
const app = express();

app.use(express.json());

export default {
  path: '/api',
  handler: app
};
