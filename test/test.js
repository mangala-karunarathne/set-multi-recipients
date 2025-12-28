const { buildRecipients } = require("../src/index");

async function runTests() {
  try {
    const result = await buildRecipients({
      to: "valid@test.com, bad@@test",
      cc: "cc1@test.com, 2",
      bcc: "bcc1@test.com, bcc1@",
    });

    console.log("✅ SUCCESS:");
    console.dir(result, { depth: null });

  } catch (err) {
    console.error("❌ ERROR:");
    console.error(err.message);
  }
}

runTests();
