const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai {
  static configuration() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    return new OpenAIApi(configuration);
  }

  static textCompletion({ prompt }) {
    return {
      model: "davinci-002",
      prompt: prompt,
      temperature: 0,
      max_tokens: 300,
    };
  }
};
