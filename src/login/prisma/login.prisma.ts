import { PrismaClient } from '@prisma/client'

    // 指定目录 ts 代码的改动，改动后自动编译运行项目。
    // "ts-node": "^10.9.1",
const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.rtsUser.findMany()
    console.log(allUsers)
}