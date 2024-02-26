# Queue

[[toc]]

## Overview

Cachet uses a queue to send [Configuring Mail](doc:configuring-mail) and [Beacons](doc:beacons) without slowing down the rest of the application. This can be setup in a variety of ways.

## Supervisor

The recommended setup for the queue is to use [Supervisor](https://www.digitalocean.com/community/tutorials/how-to-install-and-manage-supervisor-on-ubuntu-and-debian-vps).

> Supervisor is a process manager which makes managing a number of long-running programs a trivial task by providing a consistent interface through which they can be monitored and controlled.

## Cachet v2.4

```
[program:cachet-queue]
command=php artisan queue:work --delay=1 --sleep=1 --timeout=1800 --tries=3
directory=/var/www/cachet/
redirect_stderr=true
autostart=true
autorestart=true
user=cachet
```

## Cachet v2.3

You should create a Supervisor configuration file named `/etc/supervisor.d/conf/cachet.conf`

```
[program:cachet-queue]
command=php artisan queue:work --daemon --delay=2 --sleep=1 --tries=3
directory=/var/www/cachet/
redirect_stderr=true
autostart=true
autorestart=true
user=cachet
```

[block:callout]
{
  "type": "info",
  "title": "Update to your configuration!",
  "body": "Be sure to update the values in the example configuration above to match your installation setup."
}
[/block]

## Queues Using The Scheduler

The default installation of Cachet sets the queue type to `database` which means that all jobs are stored within your database and is then processed by a cron job which calls an artisan command from within the project directory.

You'll need to create a new cron job, in Ubuntu it's a case of running `crontab -e` and adding this line:

```
* * * * * php /path/to/artisan schedule:run >> /dev/null 2>&1
```

Close the file and the cron job will now begin running, processing any confirmation and incident emails.

## Synchronous Queue

If you cannot add a queue job, another alternative is to process all of the *jobs* immediately after they are created.

:::warning Not suitable for larger installations!
This setup is not ideal for larger installs with hundreds of subscribers as each email can take a few seconds to send and would slow down your interaction with the system.
:::

To set this up change the `.env` file with the following setting:

```ini
QUEUE_DRIVER=sync
```