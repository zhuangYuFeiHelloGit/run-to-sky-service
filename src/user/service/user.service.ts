import { RtsUser } from "@prisma/client";
import { Service } from "typedi";

@Service()
export class LoginService {
    constructor() {

    }

    async login(rtsUser: RtsUser) {
        
    }
}