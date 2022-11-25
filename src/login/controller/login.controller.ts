import { NextFunction, Request, Response } from "express";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});

export default router;