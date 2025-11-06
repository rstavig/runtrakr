import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate'
import { neonConfig } from '@neondatabase/serverless';


import dotenv from 'dotenv'
import ws from 'ws';

dotenv.config()


neonConfig.webSocketConstructor = ws;



export const prisma = new PrismaClient()
  .$extends(withAccelerate())

