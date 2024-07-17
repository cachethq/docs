# Advanced Usage

[[toc]]

## Sort & Ordering

You can sort your result set in an ascending or descending manner by supplying these two extra parameters.

The `sort` parameter tells Cachet which property to sort the results by. By default, this will be the `id` of the object, but you could decide to sort components by their name or status.

Ordering is achieved by passing the `order` parameter. This should either be `asc` or `desc`.

To get all components, sorted by their `status` in a descending way, we'd use `http://demo.cachethq.io/api/v1/components?sort=status&order=desc`.

## Pagination

To control how many results per page, the endpoint should return, we add a `per_page` parameter.

Using the same query above, we can limit our components to 1 per page `http://demo.cachethq.io/api/v1/components?sort=status&order=desc&per_page=1`

## Searching

You can perform basic searches on many of the endpoints, by passing through a key/value pair containing the column name and the value you want to match.

As a different example let's search for all incidents with a status of **2**, `https://demo.cachethq.io/api/v1/incidents?status=2&per_page=1`.

:::tip Not all object key/values can be searched
This includes any keys that match `sort`, `order` and `per_page`. You should check the relevant **GET** requests to see what keys can be searched.
:::