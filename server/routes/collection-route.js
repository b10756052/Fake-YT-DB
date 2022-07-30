const router = require("express").Router();
const Collection = require("../models").collectionModel;
const collectionValidation = require("../validation").collectionValidation;

router.use((req, res, next) => {
  console.log("後端collection api已接到request");
  next();
});

router.get("/", (req, res) => {
  Collection.find({ refUser: req.user._id })
    .populate("refUser", ["username", "email"])
    .then((collection) => {
      res.send(collection);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error!! Cannot get clooections!!");
    });
});

router.post("/", async (req, res) => {
  //check the validation of data
  const { error } = collectionValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { title, imgURL, videoURL, channelTitle } = req.body;
  let newCollection = new Collection({
    title,
    imgURL,
    videoURL,
    channelTitle,
    refUser: req.user._id,
  });

  try {
    await newCollection.save();
    res.status(200).send("New collection has been saved.");
  } catch (err) {
    console.log(err);
    res.status(400).send("Cannot save collection.");
  }
});

router.delete("/:_id", async (req, res) => {
  let { _id } = req.params;
  let collection = await Collection.findOne({ _id });
  if (!collection) {
    res.status(404);
    return res.json({
      success: false,
      message: "Collection not found.",
    });
  } else {
    Collection.deleteOne({ _id })
      .then(() => {
        res.send("Collection deleted.");
      })
      .catch((e) => {
        res.send({
          success: false,
          message: e,
        });
      });
  }
});

module.exports = router;
