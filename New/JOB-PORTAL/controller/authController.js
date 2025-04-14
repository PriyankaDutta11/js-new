
import useModel from "../models/useModel.js";

export const registerController = async (req, res, next) => {

    const { name, email, password } = req.body
    // validate
    if (!name) {
        next("name is required");
    }
    if (!email) {
        next(
            "email is required"
        )
    }
    if (!password) {
        next("password is required and greater than 6 character");
    }
    const existingUser = await useModel.findOne({ email })
    if (existingUser) {
        next("Email Already Register Please Login");

    }
    const user = await useModel.create({ name, email, password }).select("+password")
    // TOKEN
    const token = user.createJWT();
    res.status(201).send({
        success: true,
        message: "User Created Successfully",
        user: {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            location: user.location,

        },
        token,
    });

};
export const loginController = async (req, res, next) => {
    const { email, password } = req.body
    // validation
    if (!email || !password) {
        next("email and password is required");
    }

    //   find user by email
    const user = await useModel.findOne({ email })
    if (!user) {
        next("Invalid Username or password");
    };

    //  compare password
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
        next("Invalid Username or password");
    }

    user.password = undefined;
    //  create token
    const token = user.createJWT();
    res.status(200).json({
        success: true,
        message: "User Login Successfully",
        user,
        token,
    });
};