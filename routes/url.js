const express = require("express");
const {
  handleCreateNewId,
  handleGenerateShortUrls,
  handleGetAnalytics,
} = require("../controllers/url");

const Router = express.Router();

Router.post("/", handleCreateNewId);
Router.get("/:id", handleGenerateShortUrls);
Router.get("/analytics/:id", handleGetAnalytics);

module.exports = Router;
