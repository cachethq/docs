# Mail

[[toc]]

## Configuring Mail

Your `.env` file will need to include the following setting keys.

```ini
MAIL_DRIVER=smtp
MAIL_HOST=mailtrap.io
MAIL_PORT=587
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ADDRESS=null
MAIL_NAME=null
MAIL_ENCRYPTION=tls
```

After making changes to your mail configuration you'll need to run the following command within your Cachet installation directory.

```shell
php artisan config:cache

# If you experience any issues after running this command, run this too:
rm -rf bootstrap/cache/*
```

## Using Mailgun

Create an account with [Mailgun](https://mailgun.com).

- `MAIL_USERNAME` should be Mailgun domain.
- `MAIL_PASSWORD` should be Mailgun API Key.

Edit your `.env` file with the following variables.

```ini
MAIL_DRIVER=mailgun
MAIL_HOST=smtp.mailgun.org
MAIL_PORT=587
MAIL_USERNAME=cachethq.io
MAIL_PASSWORD=xxxx
MAIL_ADDRESS=support@cachethq.io
MAIL_NAME="Alt Three Services Limited"
MAIL_ENCRYPTION=tls
```

The `tls` encryption setting is required to have e-mails be properly delivered.

## Using Spark Post

Create an account with [Spark Post](https://www.sparkpost.com/).

Edit your `.env` file with the following variables.

```ini
MAIL_DRIVER=smtp
MAIL_HOST=smtp.sparkpostmail.com
MAIL_PORT=587
MAIL_USERNAME=SMTP_Injection
MAIL_PASSWORD=API_TOKEN
MAIL_ADDRESS=support@cachethq.io
MAIL_NAME="Alt Three Services Limited"
MAIL_ENCRYPTION=tls
```