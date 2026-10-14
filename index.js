// FILE: index.js
class SafePromptClient {
  constructor(rapidApiKey) {
    if (!rapidApiKey) {
      throw new Error("Missing RapidAPI Key! Get your free API key at your RapidAPI marketplace link.");
    }
    this.apiKey = rapidApiKey;
    this.endpoint = "https://ai-prompt-firewall-and-pii-data-redactor.p.rapidapi.com/sanitize";
    this.host = "ai-prompt-firewall-and-pii-data-redactor.p.rapidapi.com";
  }

  async sanitize(text, maskFormat = "TAG") {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": this.apiKey,
        "X-RapidAPI-Host": this.host
      },
      body: JSON.stringify({ text, mask_format: maskFormat })
    });
    return response.json();
  }
}

module.exports = { SafePromptClient };
