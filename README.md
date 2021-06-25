# Plivo Call - GitHub Actions

This action can be applied to your workflow and will enable you to make a call in any scenario you wish.

## Prerequisites

- A Plivo Account. [Sign up for free](https://console.plivo.com/accounts/register/)
- A Plivo [Auth_ID and Auth_Token](https://console.plivo.com/dashboard/)

## Usage

1. Set up your credentials as [secrets](https://docs.github.com/en/actions/reference/encrypted-secrets) in your repository settings using `PLIVO_AUTH_ID`, `PLIVO_AUTH_TOKEN`, `FROM_NUMBER`,`TO_NUMBER`

2. Add the following to your workflow

```yml
- name: 'Make call'
  uses: plivo/actions-call@v1
  with:
    fromPhoneNumber: ${{ secrets.FROM_NUMBER }}
    toPhoneNumber: ${{ secrets.TO_NUMBER }}
    message: 'There has been new release to ${{ github.repository }}'
    language: 'en-US'
    voice: 'WOMAN'
  env:
    PLIVO_AUTH_ID: ${{ secrets.PLIVO_AUTH_ID }}
    PLIVO_AUTH_TOKEN: ${{ secrets.PLIVO_AUTH_TOKEN }}
```

## Inputs

### `fromPhoneNumber`

**Required** Phone number in your Plivo account which be used as caller-id, which is stored as [secret](https://docs.github.com/en/actions/reference/encrypted-secrets) and can also be hardcoded.

### `toPhoneNumber`

**Required** The phone number to which call must be made is stored as a [secret](https://docs.github.com/en/actions/reference/encrypted-secrets) and can also be hardcoded.

### `message`

**Required** The text you want to be spoken on the other end.

### `language`

**Required** Language used to read out the text.; for example, if we want the audio to be delivered in English, the value would be "en-US". Supported voices and languages can be found [here](https://www.plivo.com/docs/voice/xml/speak/).

### `voice`

**Required** The tone to be used for reading out the text. Allowed values: "WOMAN", "MAN"

### `PLIVO_AUTH_ID`

A Plivo Auth_ID. To be stored in [secret](https://docs.github.com/en/actions/reference/environments) or as an environment variable.

### `PLIVO_AUTH_TOKEN`

A Plivo Auth_Token. To be stored in [secret](https://docs.github.com/en/actions/reference/environments) or as an environment variable.

## Outputs

Plivo returns a JSON response acknowledging the message.
### `Sample Output`

```
CreateCallResponse {
  apiId: 'ab4e9185-c539-11eb-b0d0-0242ac110002',
  message: 'call fired',
  requestUuid: 'b4afb8bc-7a3b-4401-a460-41e98b73dc2a'
}
```
## Contributing

## Third Party Licenses

This GitHub Action uses a couple of Node.js modules to work.

License and other copyright information for each module are included in the release branch of each action version under `node_modules/{module}`.

More information for each package can be found at `https://www.npmjs.com/package/{package}`

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
