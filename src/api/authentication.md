# Authentication

[[toc]]

:::tip Public Read-Only Access
Cachet is built on the belief that your service status is open and transparent, therefore all `GET` requests are public and require no authentication to access the information.
:::

Authenticated requests (those that `POST`, `PUT` or `DELETE`) require an **API Token**.

### API Token

API Tokens are the preferred method of authentication. 

Once you have your token you'll need to add a new request header of `Authorization: Bearer $TOKEN`:

```shell
curl -H "Content-Type: application/json;" -H "Authorization: Bear YOUR_KEY_HERE" -d '{"name":"API","description":"An example description","status":1}' https://v3.cachethq.io/api/components
```