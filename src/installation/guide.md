# Installation

[[toc]]

## Prerequisites

Cachet requires a few things to run. You'll need:

- PHP 7.1 with `ext-gd`, `ext-simplexml`, `mcrypt` and `ext-xml` installed.
- [Composer](https://getcomposer.org)
- APC or Redis for caching.
- A database such as MySQL, PostgreSQL or SQLite.
- Git (optional depending on installation)

### Composer

You should install Composer globally. This is a dependency manager for PHP and is used to install Cachet's dependencies. We recommend following Composer's own [installation guide](https://getcomposer.org/download/).

Once Composer is installed, you can install the dependencies.

```shell
composer install --no-dev -o
```

## Installing Cachet

:::warning Check out the latest version
The tags below are examples of what will be shown. You should always run `git checkout` on the latest tag.
:::

```bash
cd /var/www # Or wherever you chose to install web applications to
git clone https://github.com/cachethq/Cachet.git
cd Cachet
git tag -l

v0.1.0-alpha
v1.0.0
v1.1.0
v2.0.0
v2.1.0

git checkout v2.1.0
```

### Configuring a database

By default, Cachet comes with a `.env.example` file. You'll need to rename this file to just `.env` **regardless** of what environment you're working on.

It's now just a case of editing this new `.env` file and setting the values of your setup.

:::tip Environment Configuration
Any values with spaces in them should be contained within double quotes.
:::

```ini
APP_ENV=production
APP_DEBUG=false
APP_URL=http://localhost
APP_KEY=SomeRandomString

DB_DRIVER=mysql
DB_HOST=localhost
DB_DATABASE=cachet
DB_USERNAME=homestead
DB_PASSWORD=secret
DB_PORT=null

CACHE_DRIVER=apc
SESSION_DRIVER=apc
QUEUE_DRIVER=sync
CACHET_EMOJI=false

MAIL_DRIVER=smtp
MAIL_HOST=mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ADDRESS=null
MAIL_NAME="Demo Status Page"
MAIL_ENCRYPTION=tls

REDIS_HOST=null
REDIS_DATABASE=null
REDIS_PORT=null

GITHUB_TOKEN=null
```

:::tip SQLite
If you're using SQLite then your `.env` file should not contain a `DB_HOST` key. You'll also need to `touch ./database/database.sqlite` and give it the required permissions.
:::

### Setting the application key

Before going any further, we need to set the `APP_KEY` config. This is used for all encryption used in Cachet.

```shell
php artisan key:generate
```

Be sure that you have the right permissions to the `.env` file before running this command.

### Using the install command

Cachet comes with an installation command that will do the following for you:

- Run migrations
- Run seeders (of which there are none)

```shell
php artisan app:install
```

:::warning `APP_KEY` Changes
Never change the `APP_KEY` after installation on production environment. This will result in all encrypted/hashed data being lost.
:::

## Installation Difficulties

### 500 - Internal Server Error

If you see a 500 error when visiting your status page, you may need to run `chmod -R 777 storage` for it to work or `rm -rf bootstrap/cache/*`

You can also try to give permissions to cache `chmod -R 777 bootstrap/`
