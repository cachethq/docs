<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="art/cachet-docs-dark.svg" />
      <img alt="Cachet Docs" src="art/cachet-docs-light.svg" />
    </picture>
</p>

<p align="center">
    <a href="https://github.com/sponsors/cachethq">
        <img src="https://img.shields.io/github/sponsors/cachethq" alt="GitHub Sponsors" />
    </a>
</p>

# Cachet documentation

[Cachet](https://cachethq.io) is an open source status page system. Use it to keep your customers and stakeholders informed about downtime and system outages.

This repository contains the source code for the Cachet documentation, built with [Mintlify](https://mintlify.com).

## Running locally

Mintlify hosts the documentation. To run it locally:

1. Clone the repository:
    ```bash
    git clone git@github.com:cachethq/docs.git cachet-docs
    ```
2. Install Mintlify:
    ```bash
    npm install -g mintlify@latest
    ```
3. Run the documentation:
    ```bash
    cd cachet-docs
    mintlify dev
    ```
   
## Contributing

Read the [Mintlify guide](https://mintlify.com/docs/) for documentation syntax and local preview instructions.
