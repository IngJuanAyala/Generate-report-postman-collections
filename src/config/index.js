require("dotenv").config({ path: ('src/.env') })

const config = {
    port: process.env.PORT || 3000,
  };

  module.exports = { config };