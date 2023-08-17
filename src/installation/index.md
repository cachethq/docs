# Installation

[[toc]]

## Prerequisites

Cachet requires a few things to run. You'll need:

- PHP 5.5 — 7.1 with `ext-gd`, `ext-simplexml`, `mcrypt` and `ext-xml` installed.
- [Composer](https://getcomposer.org)
- APC or Redis for caching.
- A database such as MySQL, PostgreSQL or SQLite.
- Git (optional depending on installation)

## Installing Cachet

:::warning Check out the latest version

The tags below are examples of what will be shown. You should always run `git checkout` on the latest tag.
:::

```bash
$ cd /var/www # Or wherever you chose to install web applications to
$ git clone https://github.com/cachethq/Cachet.git
$ cd Cachet
$ git tag -l

v0.1.0-alpha
v1.0.0
v1.1.0
v2.0.0
v2.1.0

$ git checkout v2.1.0
```

## Configuring a database
