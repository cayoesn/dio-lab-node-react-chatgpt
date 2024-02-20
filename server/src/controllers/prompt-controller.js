const openai = require("../config/openai");
const InputPrompt = require("../models/input-prompt");

module.exports = {
  async sendText(req, res) {
    const openaiApi = openai.configuration();
    const inputModel = new InputPrompt(req.body);

    try {
      const response = await openaiApi.createCompletion(
        openai.textCompletion(inputModel)
      );

      return res.status(200).json({
        sucess: true,
        data: response.data.choices[0].text,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        error: error.response
          ? error.response.data
          : "There was an inssue on the server.",
      });
    }
  },
};
