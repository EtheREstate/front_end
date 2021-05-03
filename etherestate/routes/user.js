const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');

router.post('/register', async (req, res) => {
	try {
		if (req.body) {
			const salt = await bcrypt.genSalt(10);
			const hashPass = await bcrypt.hash(req.body.password, salt);
			const user = {
				name: req.body.name,
				email: req.body.email,
				password: hashPass,
			};

			const data = JSON.stringify(user, null, 2);
			var dbUserEmail = require('./db/user1.json').email;
			console.log(process.env.JWT_SECRET);
			if (dbUserEmail === req.body.email) {
				res.sendStatus(400);
			} else {
				fs.writeFile('./db/user2.json', data, (err) => {
					if (err) {
						console.log(err + data);
					} else {
						const token = jwt.sign({ user }, process.env.JWT_SECRET, {
							expiresIn: process.env.JWT_EXPIRES_IN,
						});
						res.json({
							token,
							email: user.email,
							name: user.name,
						});
					}
				});
			}
		} else {
			res.sendStatus(400);
		}
	} catch (err) {
		res.status(500).send({
			message: err.message,
		});
	}
});

module.exports = router;
