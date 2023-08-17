# Frequently Asked Questions

[[toc]]

## Do you provide installations?

We offer a professional installation service. Send us an [email](mailto:support@cachethq.io?subject=Cachet%20Installation) with your requirements and we'll be happy to get everything setup for you!

## How do I reset a forgotten password?

```shell
cd /var/www/ # the root of your Cachet installation

php artisan tinker
Psy Shell v0.8.8 (PHP 7.1.6 — cli) by Justin Hileman
>>> $user = CachetHQ\Cachet\Models\User::find(1);
=> CachetHQ\Cachet\Models\User {#865
    id: 1,
    username: "test",
    email: "test@test.com",
    api_key: "9yMHsdioQosnyVK4iCVR",
    active: 1,
    level: 1,
    created_at: "2015-07-24 13:42:10",
    updated_at: "2015-07-28 15:12:55",
}
>>> $user->update(['password' => 'NEW_PASSWORD']);
\q
Exit:  Goodbye.
```

## MySQL Permissions

Cachet requires a somewhat broad set of permissions to perform the installation and configuration. For any MySQL user that you use for Cachet, you'll need to provide the following permissions:

- `CREATE`
- `ALTER`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`
