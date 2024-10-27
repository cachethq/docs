# API

[[toc]]

:::warning Cachet v3 API
This documentation refers to the Cachet v3 API. If you are looking for the Cachet v2 API, please refer to the previous [Cachet API documentation](https://github.com/cachethq/docs/tree/2.x).
:::

## JSON API

Cachet provides a RESTful JSON API that allows you to interact with the status page programmatically. The API is designed to be simple and easy to use.

### Example Response

```json
{
  "data": [
    {
      "id": "2",
      "type": "incidents",
      "attributes": {
        "id": 2,
        "guid": "3aad01a9-be10-422b-a90b-413c850cf89b",
        "name": "Documentation Performance Degradation",
        "message": "We're investigating an issue with our documentation causing the site to be slow.",
        "component_id": null,
        "visible": 1,
        "stickied": false,
        "notifications": 0,
        "status": {
          "human": "Investigating",
          "value": 1
        },
        "occurred": {
          "human": "34 minutes ago",
          "string": "2024-10-27 08:31:59"
        },
        "created": {
          "human": "34 minutes ago",
          "string": "2024-10-27 08:31:59"
        },
        "updated": {
          "human": "34 minutes ago",
          "string": "2024-10-27 08:31:59"
        }
      }
    },
    {
      "id": "1",
      "type": "incidents",
      "attributes": {
        "id": 1,
        "guid": "105d8c6d-9d21-4afd-a8d9-8c49f1fd1fbc",
        "name": "DNS Provider Outage",
        "message": "We're investigating an issue with our DNS provider causing the site to be offline.",
        "component_id": null,
        "visible": 1,
        "stickied": false,
        "notifications": 0,
        "status": {
          "human": "Fixed",
          "value": 4
        },
        "occurred": {
          "human": "1 day ago",
          "string": "2024-10-26 09:01:59"
        },
        "created": {
          "human": "1 day ago",
          "string": "2024-10-26 09:01:59"
        },
        "updated": {
          "human": "1 day ago",
          "string": "2024-10-26 09:01:59"
        }
      }
    }
  ],
  "links": {
    "first": "https://v3.cachethq.io/api/incidents?page=1"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "path": "https://v3.cachethq.io/api/incidents",
    "per_page": 15,
    "to": 2
  }
}
```

## Filtering

Several endpoints support filtering to allow you to retrieve only the data you need.  For example, you can filter incidents by status:

```
GET /api/incidents?filter[status]=1
```

## Sorting

You can sort the results of an endpoint by passing the `sort` parameter. The `sort` parameter should be a comma-separated list of fields to sort by. You can also specify the sort order by appending `asc` or `desc` to the field name.

```
GET /api/incidents?sort=id
```

To reverse the sort order, you can prefix the field name with a hyphen.

```
GET /api/incidents?sort=-id
```

## Pagination

All API endpoints that return multiple items support pagination. By default, 15 items are returned per page.
You can specify the number of items to return per page by passing the `per_page` parameter.
To navigate between pages, use the `page` parameter.

```
GET /api/incidents?page=2&per_page=10
```

## Rate Limiting

The Cachet API is rate-limited to prevent abuse. The rate limit is set to 300 requests per minute per IP address.

Cachet will return the `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` headers in the response to provide information about the rate limit.

:::tip Configure API Rate Limit
You can override the default rate limit by setting the `CACHET_API_RATE_LIMIT` environment variable.
:::
