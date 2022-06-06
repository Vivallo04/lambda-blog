import express from 'express';
import { PrismaClient, Prisma } from '@prisma/client';


const prisma = new PrismaClient();
const app = express();

app.use(express.json());

console.log("Server is running");

app.post(`/logs`, async (req, res) => {
    
});


export default {
  path: '/api',
  handler: app
};
