import { NextFunction, Request, Response } from "express";
import { LoginPrisma } from "../prisma/user.prisma";
import { Container } from "typedi";
import { LoginService } from "../service/user.service";
import { RtsUser } from "@prisma/client";
import express from "express";
var router = express.Router();

const loginService = Container.get(LoginService);

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req: Request, res: Response, next: NextFunction) {
  console.log(req.body);
  
  // loginService.login()
  res.send("hello")
});

export default router;