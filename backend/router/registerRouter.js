const express = require('express');
const RegisterRouter = express.Router();
const bcrypt = require('bcryptjs');
const registerDB = require('../model/registerSchema');
const loginDB = require('../model/loginSchema');

RegisterRouter.post('/', async (req, res) => {
  try {
	const oldUser = await loginDB.findOne({ username: req.body.username });
	if (oldUser) {
  	return res
    	.status(400)
    	.json({ success: false, error: true, message: 'User already exists' });
	}
	// const { firstName, lastName, email, password, role } = req.body;

	const oldphone = await registerDB.findOne({ phone: req.body.phone });
	const hashedPassword = await bcrypt.hash(req.body.password, 12);
	if (oldphone) {
  	return res.status(400).json({
    	success: false,
    	error: true,
    	message: 'Phone number already exists',
  	});
	}
	let log = {
  	username: req.body.username,
  	password: hashedPassword,
  	role: 2,
	};
	const result = await loginDB(log).save();
	let reg = {
  	login_id: result._id,
  	name: req.body.name,
  	email: req.body.email,
  	phone: req.body.phone,
	};
	const result2 = await registerDB(reg).save();
	if (result2) {
  	res.status(201).json({
    	success: true,
    	error: false,
    	message: 'Registration completed',
    	details: result2,
  	});
	}
  } catch (error) {
	res
  	.status(500)
  	.json({ success: false, error: true, message: 'Something went wrong' });
	console.log(error);
  }
});

module.exports = RegisterRouter;
