const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai {
  static configuration() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    return new OpenAIApi(configuration);
  }

  static textCompletion({ prompt }) {
    return this.configuration().completions.create({
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
  }
};
