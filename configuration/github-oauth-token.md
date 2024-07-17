# GitHub OAuth Token

[[toc]]

## Overview

Cachet's Markdown support also allows you to enable GitHub's Emoji support. This is done by using the `CACHET_EMOJI` environment variable.

Supporting Emoji codes such as `:smile:` and `:beers:`, is made possible by GitHub's public API.

Under some circumstances it's possible to hit GitHub's API rate limit quickly. This would render your status page inaccessible.

To get around this you can create a GitHub oAuth Token and set it in your `.env` file. Follow these instructions to create and setup Cachet with your token.

## Enabling Emoji

Cachet's Emoji support is disabled by default. To enable Emoji you'll need to modify your `.env` file

```ini
CACHET_EMOJI=true
```

## Generate a GitHub Token

1. Create a new [Personal Access Token](https://github.com/settings/tokens/new?description=Cachet&scopes=user). Make sure you give the token a name and select the `user` scopes.
2. Click "Generate token" and copy and update your `.env` file:
  ```ini
    GITHUB_TOKEN=my-new-token
  ```
3. After changing the configuration you'll now need to run the following:
  ```shell
  php artisan config:cache
  ```