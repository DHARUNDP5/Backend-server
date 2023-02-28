import express from "express";

import { signup } from "../Controllers/Signup.js";

import { login } from "../Controllers/Login.js";

import { tweet } from "../Controllers/tweet.js"

import {listTweet} from "../Controllers/list_tweet.js"

const Route = express.Router();

Route.post("/signup", signup);

Route.get("/login", login);

Route.post("/tweet", tweet);

Route.get("/gettweet",listTweet);

export default Route;