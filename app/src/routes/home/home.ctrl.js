"use strict";
// http 상태코드 mdn

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
  hello: (req, res) => {
    logger.info(`GET / 304 "홈 화면으로 이동"`);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(`GET /login 304 "로그인 화면으로 이동"`);
    res.render("home/login");
  },
  register: (req, res) => {
    logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
    res.render("home/register");
  },
  find: (req, res) => {
    logger.info(`GET /find 304 "ID / PW 찾기 화면으로 이동"`);
    res.render("home/find");
  },
  board_01: (req, res) => {
    logger.info(`GET /board_01 304 "윤문청답 화면으로 이동"`);
    res.render("home/board_01");
  },
  board_02: (req, res) => {
    logger.info(`GET /board_02 304 "청문윤답 화면으로 이동"`);
    res.render("home/board_02");
  },
  insert: (req, res) => {
    logger.info(`GET /insert 304 "게시글 작성 화면으로 이동"`);
    res.render("home/insert");
  },
  main: (req, res) => {
    logger.info(`GET /main 304 "로그인 완료 화면으로 이동"`);
    res.render("home/main");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 409 : 201,
    };
    log(response, url);
    return res.status(url.status).json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201,
    };
    log(response, url);
    return res.status(url.status).json(response);
  },
};

module.exports = {
  output,
  process,
};

const log = (response, url) => {
  if (response.err) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.err}`
    );
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${
        response.msg || ""
      }`
    );
  }
};
