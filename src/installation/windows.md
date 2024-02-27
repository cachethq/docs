# Windows

[[toc]]

## Overview

Cachet is constantly evolving, therefore we advise you to download and checkout the latest tagged release. Using a branch such as `master` could result in a broken or unstable environment.

## Download with Git

```shell
$ cd /var/www
$ git clone https://github.com/cachethq/Cachet.git
$ cd Cachet
$ git tag -l

v0.1.0-alpha
v1.0.0
v1.1.0

$ git checkout v1.1.0
```

### Configuring a database

By default, Cachet comes with a `.env.example` file. You'll need to rename this file to just `.env` **regardless** of what environment you're working on. This is how Laravel 5 deals with configurations.

It's now just a case of editing this new `.env` file and setting the values of your setup.

Here is an example Windows  file with a MySQL database:

```text .env
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

CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=database
CACHET_EMOJI=false

MAIL_DRIVER=smtp
MAIL_HOST=mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ADDRESS=null
MAIL_NAME=null
MAIL_ENCRYPTION=tls

REDIS_HOST=null
REDIS_DATABASE=null
REDIS_PORT=null

GITHUB_TOKEN=null
```

:::tip SQLite
If you're using SQLite then your `.env` file should not contain a `DB_HOST` key. You'll also need to `touch ./database/database.sqlite` and give it the required permissions.
:::

After installation, don't forget to set `APP_DEBUG` to `false` to avoid other people to see your application info!

Now, in your Command Prompt, navigate to your Cachet install and run:

```shell
composer install --no-dev -o
```

Once you have decided on the database driver you'll be using, you now need to run the migrations to create the tables.

```shell
php artisan migrate --force
```

You should see the output of the current project migration files being migrated to your database.

### Security Key

Before going any further, we need to set the `APP_KEY` config. This is used for all encryption used in Cachet.

```shell
php artisan key:generate
```

## Installing Cachet

Cachet comes with an installation command that will:

- Run migrations
- Run seeders (of which there are none)

```shell
php artisan app:install
```

:::warning `APP_KEY` Changes
Never change the `APP_KEY` after installation on production environment. This will result in all encrypted/hashed data being lost.
:::

## `php.ini` Config

Some extensions need to be uncommented in your `php.ini` file.

```ini
extension=php_apcu.dll
extension=php_bz2.dll
extension=php_curl.dll
extension=php_mbstring.dll
extension=php_exif.dll
;extension=php_fileinfo.dll
extension=php_gd2.dll
extension=php_gettext.dll
;extension=php_gmp.dll
extension=php_intl.dll
extension=php_imap.dll
;extension=php_interbase.dll
;extension=php_ldap.dll
;extension=php_mssql.dll
;extension=php_mbstring.dll
;extension=php_exif.dll      ; Must be after mbstring as it depends on it
extension=php_mysql.dll
extension=php_mysqli.dll
;extension=php_oci8.dll      ; Use with Oracle 10gR2 Instant Client
;extension=php_oci8_11g.dll  ; Use with Oracle 11gR2 Instant Client


extension=php_openssl.dll
;extension=php_pdo_firebird.dll
extension=php_pdo_mysql.dll
;extension=php_pdo_oci.dll
;extension=php_pdo_odbc.dll
;extension=php_pdo_pgsql.dll
extension=php_pdo_sqlite.dll
;extension=php_pdo_sqlite_external.dll
;extension=php_pgsql.dll
;extension=php_pspell.dll
;extension=php_shmop.dll

; The MIBS data available in the PHP distribution must be installed. 
; See http://www.php.net/manual/en/snmp.installation.php 
;extension=php_snmp.dll

extension=php_soap.dll
extension=php_sockets.dll
extension=php_sqlite3.dll
;extension=php_sybase_ct.dll
;extension=php_tidy.dll
extension=php_xmlrpc.dll
extension=php_xsl.dll
```

## Apache vHosts

Apache is one of the easier installations. We simply need to create a new Virtual Host and add it to our `HOSTS` file.

To do this, we simply add the following Virtual Host to our `httpd-vhosts.conf` file. Do change this to suit your setup:

```text httpd-vhosts.conf
<VirtualHost *:80>
    ServerAdmin **Intentionally Hidden**
    DocumentRoot "C:\Users\Administrator\Desktop\Cachet\public"
    ServerName status.theobearman.com
</VirtualHost>
```

> ❗️ You Need to Enable `mod_rewrite` for Apache.
>
> You can do this by finding your `httpd.conf` file and uncommenting the following line:
>
> `#LoadModule rewrite_module modules/mod_rewrite.so`

The rest of the contents of my `httpd.conf` file are as follows:

```text
LoadModule access_compat_module modules/mod_access_compat.so
LoadModule actions_module modules/mod_actions.so
LoadModule alias_module modules/mod_alias.so
LoadModule allowmethods_module modules/mod_allowmethods.so
LoadModule asis_module modules/mod_asis.so
LoadModule auth_basic_module modules/mod_auth_basic.so
#LoadModule auth_digest_module modules/mod_auth_digest.so
#LoadModule auth_form_module modules/mod_auth_form.so
#LoadModule authn_anon_module modules/mod_authn_anon.so
LoadModule authn_core_module modules/mod_authn_core.so
#LoadModule authn_dbd_module modules/mod_authn_dbd.so
#LoadModule authn_dbm_module modules/mod_authn_dbm.so
LoadModule authn_file_module modules/mod_authn_file.so
#LoadModule authn_socache_module modules/mod_authn_socache.so
#LoadModule authnz_fcgi_module modules/mod_authnz_fcgi.so
#LoadModule authnz_ldap_module modules/mod_authnz_ldap.so
LoadModule authz_core_module modules/mod_authz_core.so
#LoadModule authz_dbd_module modules/mod_authz_dbd.so
#LoadModule authz_dbm_module modules/mod_authz_dbm.so
LoadModule authz_groupfile_module modules/mod_authz_groupfile.so
LoadModule authz_host_module modules/mod_authz_host.so
#LoadModule authz_owner_module modules/mod_authz_owner.so
LoadModule authz_user_module modules/mod_authz_user.so
LoadModule autoindex_module modules/mod_autoindex.so
#LoadModule buffer_module modules/mod_buffer.so
#LoadModule cache_module modules/mod_cache.so
#LoadModule cache_disk_module modules/mod_cache_disk.so
#LoadModule cache_socache_module modules/mod_cache_socache.so
#LoadModule cern_meta_module modules/mod_cern_meta.so
LoadModule cgi_module modules/mod_cgi.so
#LoadModule charset_lite_module modules/mod_charset_lite.so
#LoadModule data_module modules/mod_data.so
#LoadModule dav_module modules/mod_dav.so
#LoadModule dav_fs_module modules/mod_dav_fs.so
LoadModule dav_lock_module modules/mod_dav_lock.so
#LoadModule dbd_module modules/mod_dbd.so
#LoadModule deflate_module modules/mod_deflate.so
LoadModule dir_module modules/mod_dir.so
#LoadModule dumpio_module modules/mod_dumpio.so
LoadModule env_module modules/mod_env.so
#LoadModule expires_module modules/mod_expires.so
#LoadModule ext_filter_module modules/mod_ext_filter.so
#LoadModule file_cache_module modules/mod_file_cache.so
#LoadModule filter_module modules/mod_filter.so
LoadModule headers_module modules/mod_headers.so
#LoadModule heartbeat_module modules/mod_heartbeat.so
#LoadModule heartmonitor_module modules/mod_heartmonitor.so
#LoadModule ident_module modules/mod_ident.so
#LoadModule imagemap_module modules/mod_imagemap.so
LoadModule include_module modules/mod_include.so
LoadModule info_module modules/mod_info.so
LoadModule isapi_module modules/mod_isapi.so
#LoadModule lbmethod_bybusyness_module modules/mod_lbmethod_bybusyness.so
#LoadModule lbmethod_byrequests_module modules/mod_lbmethod_byrequests.so
#LoadModule lbmethod_bytraffic_module modules/mod_lbmethod_bytraffic.so
#LoadModule lbmethod_heartbeat_module modules/mod_lbmethod_heartbeat.so
#LoadModule ldap_module modules/mod_ldap.so
#LoadModule logio_module modules/mod_logio.so
LoadModule log_config_module modules/mod_log_config.so
#LoadModule log_debug_module modules/mod_log_debug.so
#LoadModule log_forensic_module modules/mod_log_forensic.so
#LoadModule lua_module modules/mod_lua.so
LoadModule cache_disk_module modules/mod_cache_disk.so
#LoadModule macro_module modules/mod_macro.so
LoadModule mime_module modules/mod_mime.so
#LoadModule mime_magic_module modules/mod_mime_magic.so
LoadModule negotiation_module modules/mod_negotiation.so
LoadModule proxy_module modules/mod_proxy.so
#LoadModule proxy_ajp_module modules/mod_proxy_ajp.so
#LoadModule proxy_balancer_module modules/mod_proxy_balancer.so
#LoadModule proxy_connect_module modules/mod_proxy_connect.so
#LoadModule proxy_express_module modules/mod_proxy_express.so
#LoadModule proxy_fcgi_module modules/mod_proxy_fcgi.so
#LoadModule proxy_ftp_module modules/mod_proxy_ftp.so
LoadModule proxy_html_module modules/mod_proxy_html.so
LoadModule proxy_http_module modules/mod_proxy_http.so
#LoadModule proxy_scgi_module modules/mod_proxy_scgi.so
#LoadModule proxy_wstunnel_module modules/mod_proxy_wstunnel.so
#LoadModule ratelimit_module modules/mod_ratelimit.so
#LoadModule reflector_module modules/mod_reflector.so
#LoadModule remoteip_module modules/mod_remoteip.so
#LoadModule request_module modules/mod_request.so
#LoadModule reqtimeout_module modules/mod_reqtimeout.so
LoadModule rewrite_module modules/mod_rewrite.so
#LoadModule sed_module modules/mod_sed.so
#LoadModule session_module modules/mod_session.so
#LoadModule session_cookie_module modules/mod_session_cookie.so
#LoadModule session_crypto_module modules/mod_session_crypto.so
#LoadModule session_dbd_module modules/mod_session_dbd.so
LoadModule setenvif_module modules/mod_setenvif.so
#LoadModule slotmem_plain_module modules/mod_slotmem_plain.so
#LoadModule slotmem_shm_module modules/mod_slotmem_shm.so
#LoadModule socache_dbm_module modules/mod_socache_dbm.so
#LoadModule socache_memcache_module modules/mod_socache_memcache.so
LoadModule socache_shmcb_module modules/mod_socache_shmcb.so
#LoadModule speling_module modules/mod_speling.so
LoadModule ssl_module modules/mod_ssl.so
LoadModule status_module modules/mod_status.so
#LoadModule substitute_module modules/mod_substitute.so
#LoadModule unique_id_module modules/mod_unique_id.so
#LoadModule userdir_module modules/mod_userdir.so
#LoadModule usertrack_module modules/mod_usertrack.so
LoadModule version_module modules/mod_version.so
#LoadModule vhost_alias_module modules/mod_vhost_alias.so
#LoadModule watchdog_module modules/mod_watchdog.so
#LoadModule xml2enc_module modules/mod_xml2enc.so
```