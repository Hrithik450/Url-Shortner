const generateShortId = require("ssid");
const url = require("../models/user");

async function handleCreateNewId(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ Error: "Url is required" });
  const shortid = generateShortId();

  await url.create({
    short_id: shortid,
    redrictUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.status(200).render("home", {
    id: shortid,
  });
}

async function handleGenerateShortUrls(req, res) {
  const short_id = req.params.id;

  const entry = await url.findOneAndUpdate(
    { short_id },
    {
      $push: {
        visitHistory: { timestamps: Date.now() },
      },
    }
  );
  return res.status(300).redirect(entry.redrictUrl);
}

async function handleGetAnalytics(req, res) {
  const short_id = req.params.id;

  const result = await url.findOne({ short_id });
  return res.status(200).json({
    Total_Clicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleCreateNewId,
  handleGenerateShortUrls,
  handleGetAnalytics,
};
