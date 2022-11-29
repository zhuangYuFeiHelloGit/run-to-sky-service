import { PrismaClient } from "@prisma/client";
import { Service } from "typedi";

@Service()
class PrismaFactory {
    create() {
        return new PrismaClient()
    }
}