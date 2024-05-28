const crypto = require("crypto")

const secret_key = crypto.randomBytes(64).toString("hex");

module.exports = secret_key