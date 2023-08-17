# CORS

[[toc]]

## Configuring Cors

By default, Cachet can be **accessed by any** third-party server. This may not be ideal for security reasons, so we recommend you configure CORS to only allow access from your own domains.

You may configure your Cachet installation for [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) very easily. To blacklist everybody except one or more domains:

1. Login to your Dashboard
2. Go to the **Settings** panel
3. Click on **Security** 
4. You'll see textarea labelled **Allowed domains**. Fill in any domains that you want to access the API as a comma separated list:
   ```
   https://demo.cachethq.io,https://status.cachethq.io
   ``` 