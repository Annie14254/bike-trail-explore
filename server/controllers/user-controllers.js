const { User } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  async createUser({ body }, res) {
    const newUser = await User.create(body);

    if (!newUser) {
      console.log(err);
      return res.status(400).json({ message: "Could not create new user" });
    }
    console.log(newUser);
    res.status(200).json({ status: "success", payload: newUser });
  },

  async getAllUsers(req, res) {
    const allUsers = await User.find({});

    if (!allUsers) {
      console.log(err);
      return res.status(400).json({ message: "No users found" });
    }
    console.log(allUsers);
    res.status(200).json(allUsers);
  },

  async getOneUser({ params }, res) {
    const oneUser = await User.findById(params.id);

    if (!oneUser) {
      console.log(err);
      return res.status(400).json({ message: "No user with that ID found" });
    }
    console.log(oneUser);
    res.status(200).json(oneUser);
  },

  async authUser({ body }, res) {
    let user;
    try {
      user = await User.findOne({ username: body.username });
    } catch (err) {
      return res.status(400).json({ message: "Unable to authenticate user" });
    }
    if (!user)
      return res.status(400).json({ message: "Unable to authenticate user" });

    const isValid = await user.verify(body.password);
    if (!isValid)
      return res.status(400).json({ message: "Unable to authenticate user" });

    const token = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      process.env.JWT_SECRET
    );

    const { password, ...modifiedUser } = user;
    res
      .cookie("auth-cookie", token)
      .json({ status: "success", test: "test", payload: user });
  },

  async verifyUser(req, res) {
    const cookie = req.cookies["auth-cookie"];
    if (!cookie) return res.status(401).json({ msg: "un-authorized" });

    const isVerified = jwt.verify(cookie, process.env.JWT_SECRET);
    if (!isVerified) return res.status(401).json({ msg: "un-authorized" });

    const user = await User.findOne({ _id: isVerified.id }).select("-password");
    if (!user) return res.status(401).json({ msg: "authorized" });

    return res.status(200).json({ status: "success", payload: user });
  },

  async updateUser(req, res) {
    const updateUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    if (!updateUser) {
      console.log(err);
      res.status(400).json({ message: "No user found with that ID" });
    }
    console.log({ updateUser, new: true });
    res.status(200).json({ updateUser, new: true });
  },

  async deleteUser(req, res) {
    const deleteUser = await User.findByIdAndDelete(req.params.id);

    if (!deleteUser) {
      console.log(err);
      res.status(400).json({ message: "Could not delete user" });
    }

    console.log(deleteUser);
    res.status(200).json({ message: "Successfully deleted user" });
  },
};