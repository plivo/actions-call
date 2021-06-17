"use strict";
const core = require("@actions/core");
const plivo = require("plivo");
async function run() {
    const from = core.getInput("fromPhoneNumber");
    const to = core.getInput("toPhoneNumber");
    const message = core.getInput("message");
    const language = core.getInput("language");
    const voice = core.getInput("voice");
    const auth_id = core.getInput("PLIVO_AUTH_ID") || process.env.PLIVO_AUTH_ID;
    const auth_token = core.getInput("PLIVO_AUTH_TOKEN") || process.env.PLIVO_AUTH_TOKEN;
    let client = new plivo.Client(auth_id, auth_token);
    var response = client.calls.create(from, to, "https://plivointegrations.herokuapp.com/speak_response?text_to_speak=" + encodeURI(message) + "&language_to_speak=" + language + "&voice_to_speak=" + voice, {
        answerMethod: "GET",
    })
        .then(function (response) {
        console.log(response);
    })
        .catch(function (response) {
        throw response;
    });
    return response;
}
async function execute() {
    try {
        return await run();
    }
    catch (response) {
        core.error("Failed to initiate call", response);
        core.setFailed(response);
    }
}
module.exports = execute;
execute();
