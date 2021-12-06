"use strict";
// 컨트롤러 분리기 다시 읽기
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;