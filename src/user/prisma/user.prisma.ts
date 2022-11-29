import { PrismaClient, RtsUser } from '@prisma/client'
import { Service, Inject } from "typedi";

@Service()
export class LoginPrisma {

    private readonly prismaClient: PrismaClient;
    
    constructor(@Inject('prismaClient') prismaClient: PrismaClient) {
        this.prismaClient = prismaClient
    }

    public async login() {
        // ... you will write your Prisma Client queries here
        const allUsers = await this.prismaClient.rtsUser.findMany()
        console.log(allUsers)
    }
}
