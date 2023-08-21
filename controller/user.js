const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            const errorMessages = errors.array().map(error => error.msg);
            return res.status(400).json({ errors: errorMessages });
        };
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {
            name,
            email,
            profilePicture: req.file.filename,
        };
        const token = jwt.sign({ userEmail: user.email }, process.env.JWT_SECRET);
        res.status(201).json({ user, token });

    } catch (error) {
        res.status(500).json({ error: 'An error occurred.' });
    }
};
