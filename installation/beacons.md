# Beacons

[[toc]]

Cachet can optionally periodically communicate with our remote server. This is done so that we're able to gather information about the current version of Cachet and will later be used for system announcements.

:::tip v2.4
Beacons are only available in Cachet v2.4 and above.
:::

## What's Reported?

We report the following information to our server:

- A unique installation ID
- The current version of Cachet
- A support contact email (the first enabled admin's email)
- Anonymous statistics (the number of users, incidents, components and metrics)

## Disabling Beacons

To disable the beacon, you may modify your `.env` file:

```ini
CACHET_BEACON=false
```
