# Component Statuses

[[toc]]

## Statuses

Unlike Incidents, Cachet indexes component statuses starting at `1`. When creating or updating a component, you'll need to specify a status for it.

A status can be one of the following:

| Status | Name               | Description                                                                                     |
|--------|--------------------|-------------------------------------------------------------------------------------------------|
| `1`    | Operational        | The component is working.                                                                       |
| `2`    | Performance Issues | The component is experiencing some slowness.                                                    |
| `3`    | Partial Outage     | The component may not be working for everybody. This could be a geographical issue for example. |
| `4`    | Major Outage       | The component is not working for anybody.                                                       |
