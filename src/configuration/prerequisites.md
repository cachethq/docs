# Prerequisites

[[toc]]

## Application Prerequisites

You'll need at least the following installed on your server:

- PHP 7.3, you'll also need `ext-gd`, `ext-simplexml`, `mcrypt` and `ext-xml` installed.
- [Composer](https://getcomposer.org/) and `ext-mbstring`,`ext-tokenizer`
- APC or Redis for caching.
- A database driver for your DB, such as MySQL, PostgreSQL or SQLite.
- [Git](https://git-scm.com)


## SQLite

Whilst we support SQLite, we advise not using it for status pages with a high amount of traffic.
 
## MySQL Timezone Info

Ensure your MySQL database has been updated with the correct timezone information. This will ensure that metrics are shown correctly: https://dev.mysql.com/doc/refman/5.7/en/time-zone-support.html

## Developer Prerequisites

If you're looking to contribute to Cachet you may need some extra dependencies; depending on what you're looking for.

Our CSS is compiled from SCSS, so to compile this you'll need the following:

- Node.js
- NPM
- Bower
- Gulp