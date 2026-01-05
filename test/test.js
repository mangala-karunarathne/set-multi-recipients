const { buildRecipients } = require("../src/index.js");

const testBuildRecipients = async () => {
  const input = {
    subject: "Hello",
    to: "mk@gmail.com, ab@gmail.com",
    cc: "cc@test.com",
    bcc: "mk@gmail.com",
  };

  const result = await buildRecipients(input);
  console.log(JSON.stringify(result, null, 2));
};

testBuildRecipients();
