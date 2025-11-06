import Brevo from "@getbrevo/brevo";

const client = new Brevo.TransactionalEmailsApi();
client.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

(async () => {
  try {
    const result = await client.getTransacEmailsList({ limit: 1 });
    console.log("✅ Connected! API key works.", result.emails?.length ?? "no logs yet");
  } catch (e) {
    console.error("❌ API key test failed:", e.message);
  }
})();
