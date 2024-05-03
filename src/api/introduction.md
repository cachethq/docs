# API

[[toc]]

## Authentication

:::tip Public Read-Only Access
Cachet is built on the belief that your service status is open and transparent, therefore all `GET` requests are public and require no authentication to access the information.
:::

Authenticated requests (those that `POST`, `PUT` or `DELETE`) use either **Basic Auth** or the preferred **API Token** mechanism.

### API Token

API Tokens are the preferred method of authentication. They are more secure than Basic Auth and can be revoked at any time.

The API Token is generated at installation time for the main user or when a new team member is added to your status page and can be found on your profile page (click your profile picture to get there).

Once you have your token you'll need to add a new request header of `X-Cachet-Token: TOKEN`:

```shell
curl -H "Content-Type: application/json;" -H "X-Cachet-Token: YOUR_KEY_HERE" -d '{"name":"API","description":"An example description","status":1}' http://status.cachethq.io/api/v1/components
```

### Basic Auth

:::danger Unsafe!
Sending your authentication details in plain text is not secure.
:::

```sh
curl -u username@example.com:password -H "Content-Type: application/json" -d '{"name":"API","description":"An example description","status":1}' http://status.cachethq.io/api/v1/components
```

## Endpoints

### General

- `GET /api/v1/ping`
- `GET /api/v1/version`

### Components

- `GET /api/v1/components`
- `GET /api/v1/components/{componentId}`
- `POST /api/v1/components`
- `PUT /api/v1/components/{componentId}`
- `DELETE /api/v1/components/{componentId}`

### Components Groups

- `GET /api/v1/components/groups`
- `GET /api/v1/components/groups/{componentGroupId}`
- `POST /api/v1/components/groups`
- `PUT /api/v1/components/groups/{componentGroupId}`
- `DELETE /api/v1/components/groups/{componentGroupId}`

### Incidents

- `GET /api/v1/incidents`
- `GET /api/v1/incidents/{incidentId}`
- `POST /api/v1/incidents`
- `PUT /api/v1/incidents/{incidentId}`
- `DELETE /api/v1/incidents/{incidentId}`

### Incident Updates

- `GET /api/v1/incidents/{incidentId}/updates`
- `GET /api/v1/incidents/{incidentId}/updates/{incidentUpdateId}`
- `POST /api/v1/incidents/{incidentId}/updates`
- `PUT /api/v1/incidents/{incidentId}/updates/{incidentUpdateId}`
- `DELETE /api/v1/incidents/{incidentId}/updates/{incidentUpdateId}`

### Incidents Templates

- `GET /api/v1/incidents/templates`
- `GET /api/v1/incidents/templates/{incidentTemplateId}`
- `POST /api/v1/incidents/templates`
- `PUT /api/v1/incidents/templates/{incidentTemplateId}`
- `DELETE /api/v1/incidents/templates/{incidentTemplateId}`

### Scheduled Maintenance

- `GET /api/v1/schedules`
- `GET /api/v1/schedules/{scheduleId}`
- `POST /api/v1/schedules`
- `PUT /api/v1/schedules/{scheduleId}`
- `DELETE /api/v1/schedules/{scheduleId}`

### Metrics

- `GET /api/v1/incidents/metrics`
- `GET /api/v1/incidents/metrics/{metricId}`
- `DELETE /api/v1/incidents/metrics/{metricId}`
- `GET /api/v1/incidents/metrics/{metricId}/points`
- `PUT /api/v1/incidents/metrics/{metricId}`
- `POST /api/v1/incidents/metrics/{metricId}/points`
- `PUT /api/v1/incidents/metrics/{metricId}/points/{metricPointId}`
- `DELETE /api/v1/incidents/metrics/{metricId}/points/{metricPointId}`
