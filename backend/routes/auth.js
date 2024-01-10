

const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
//for the password protection bcryptjs...and the jsonwebtoken is for identifying the authenticated user
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const fetchuser = require('../Middleware/fetchUser');

const JWT_SECRET = "JAISHREERAM"

// ROUTE 1: Create a user using :POST "/api/auth/createuser". Doesn't required authentication

router.post('/createuser',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    async (req, res) => {
        let success = false;
        const salt = await bcrypt.genSalt(10);
        //If any of validation errors then return bad request....
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {

            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email  already exists" })
            }
            const secpass = await bcrypt.hash(req.body.password, salt)
            user = await User.create({
                // name: req.body.name,
                password: secpass,
                // password: req.body.password, As now we will store the password with bcryptjs....salt...
                email: req.body.email,
                access: req.body.access
            })
            const data = {
                user: {
                    id: user.id
                }

            }
            success = true
            const authToken = jwt.sign(data, JWT_SECRET)
            res.json({ "success": success, "authtoken": authToken })
            // res.json({ "success": success }) Now we will send the authtoken ...as above line bro
        }

        catch (error) {
            console.error(error.message)
            res.status(500).send("INTERNAL SERVER ERROR")
        }
    })



// Route 2: for the user login :POST "/api/auth/login"...
router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    async (req, res) => {
        let success = false;

        // For correct validation: 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {

            let user = await User.findOne({ email: email });
            if (!user) {
                return res.status(400).json({ error: "Try login Using correct ceredentials!! Please" })
            }

            const passwordverify = await bcrypt.compare(password, user.password)
            // console.log(passwordverify)
            // console.log("user", user.password, "and ", password)

            //If password is wrong
            if (!passwordverify) {
                return res.status(400).json({ error: "Email or Password is Incorrect" })
            }
            const data = {
                user: {
                    id: user.id
                }

            }
            success = true
            const authToken = jwt.sign(data, JWT_SECRET)
            res.json({ "success": success, "authtoken": authToken })

        }

        catch (error) {
            console.error(error.message)
            res.status(500).send("INTERNAL SERVER ERROR")
        }
    })



// Route 3: For the fetching of user details...login required...
router.post('/getuser', fetchuser, async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        // console.log(user)
        res.send(user)
    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("INTERNAL SERVER ERROR")
    }
})
module.exports = router;