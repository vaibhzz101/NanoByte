const { User } = require("../model/user.model");
const { InterviewQuestion } = require("../model/interview.model");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtkey = process.env.jwtkey;

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.find({ email });
    if (user.length > 0) return res.json({ err: "user aleady presnt " });
    // add user and bcrypt password
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(400).json({ err: err.message });
      } else {
        const user = new User({ name, email, password: hash });
        await user.save();
        console.log(user);
        res.status(200).json({ msg: "user registred" });
      }
    });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email });
    console.log(user);
    if (user.length !== 0) {
      await bcrypt.compare(password, user[0].password, (err, success) => {
        if (success) {
          token = jwt.sign({ userID: user[0]._id }, jwtkey, {
            expiresIn: "24h",
          });
          // token sent
          res.json({ message: "login success", Token: `${token}` });
        } else {
          res.status(403).send({ message: "Invalid Credentials" });
        }
      });
    } else {
      res.send("Wrong credentails");
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

exports.allusers = async (req, res) => {
  try {
    const users = await User.find();
    if (users) res.json(users);
    else {
      res.send("No users found");
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

exports.getCurrentUser = async (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = jwt.verify(token, jwtkey);
  const userId = decodedToken.userID;

  try {
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.send("User not found");
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

exports.queAnsfeed = (req, res) => {
  const { question, answer, interviewType, difficultyLevel, topics } = req.body;

  // Create a new instance of the InterviewQuestion model
  const newQuestion = new InterviewQuestion({
    question,
    answer,
    interviewType,
    difficultyLevel,
    topics,
  });

  // Save the question to the database
  newQuestion
    .save()
    .then(() => {
      res.status(200).json({ message: "Question saved successfully" });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
