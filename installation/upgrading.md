# Upgrading

[[toc]]

## Overview

If you've installed Cachet using Git, the upgrade process should be straightforward, usually taking just a few minutes.

## Maintenance mode

It's good practise to put your status page into maintenance mode. This changes your status page to show a "Maintenance Mode" message until the upgrade has completed.

Run the snippet from your Cachet's root directory (where an `artisan` file exists):

```bash
php artisan down
```

## Fetch latest code

Upgrading with Git is as easy as:

```bash
git fetch origin
git tag -l
git checkout LATEST_TAG
```

## Upgrading dependencies

Next, we need to upgrade our dependencies. These usually contain bug fixes, performance enhancements and new features.

Run the snippet from your Cachet's root directory (where an `artisan` file exists):

```bash
composer install --no-dev -o
```

## Update Cachet

We now need to instruct Cachet to run any pending updates:

```bash
php artisan app:update
```

## Turn off maintenance mode

Finally, we can turn off maintenance mode:

```bash
php artisan up
```
