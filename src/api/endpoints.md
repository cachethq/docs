# Endpoints

[[toc]]

## Endpoints

Cachet provides a RESTful JSON API that allows you to interact with the application programmatically. The API is designed to be simple and easy to use.

:::info Under Development
The API is currently active development and may change in the future. Please check back for updates.
:::

### General

- `GET /api/ping`
- `GET /api/status`
- `GET /api/version`

### Components

- `GET /api/components`
- `GET /api/components/{componentId}`
- `POST /api/components`
- `PUT /api/components/{componentId}`
- `DELETE /api/components/{componentId}`

### Components Groups

- `GET /api/component-groups`
- `GET /api/component-groups/{componentGroupId}`
- `POST /api/component-groups`
- `PUT /api/component-groups/{componentGroupId}`
- `DELETE /api/component-groups/{componentGroupId}`

### Incidents

- `GET /api/incidents`
- `GET /api/incidents/{incidentId}`
- `POST /api/incidents`
- `PUT /api/incidents/{incidentId}`
- `DELETE /api/incidents/{incidentId}`

### Incident Updates

- `GET /api/incidents/{incidentId}/updates`
- `GET /api/incidents/{incidentId}/updates/{incidentUpdateId}`
- `POST /api/incidents/{incidentId}/updates`
- `PUT /api/incidents/{incidentId}/updates/{incidentUpdateId}`
- `DELETE /api/incidents/{incidentId}/updates/{incidentUpdateId}`

### Incidents Templates

- `GET /api/incidents-templates`
- `GET /api/incidents-templates/{incidentTemplateId}`
- `POST /api/incidents-templates`
- `PUT /api/incidents-templates/{incidentTemplateId}`
- `DELETE /api/incidents-templates/{incidentTemplateId}`

### Scheduled Maintenance

- `GET /api/schedules`
- `GET /api/schedules/{scheduleId}`
- `POST /api/schedules`
- `PUT /api/schedules/{scheduleId}`
- `DELETE /api/schedules/{scheduleId}`

### Metrics

- `GET /api/metrics`
- `GET /api/metrics/{metricId}`
- `DELETE /api/metrics/{metricId}`
- `GET /api/metrics/{metricId}/points`
- `PUT /api/metrics/{metricId}`
- `POST /api/metrics/{metricId}/points`
- `PUT /api/metrics/{metricId}/points/{metricPointId}`
- `DELETE /api/metrics/{metricId}/points/{metricPointId}`
