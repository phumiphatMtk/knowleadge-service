const register = (req, res) => {
    res.status(200).json({
        statusCode: 200,
        msg: "register"
    })
}

const login = (req, res) => {
    res.status(200).json({
        statusCode: 200,
        msg: "login"
    })
}

module.exports = {
    register,
    login
}