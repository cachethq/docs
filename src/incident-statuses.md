# Incident Statuses

[[toc]]

## Statuses

Cachet uses a zero-based numbering scheme to identify incident statuses. When creating or updating an incident, it's important that you specify the `status` of the incident.

| Status | Name | Description |
| --- | --- | --- |
| `0` | Scheduled | This status is *reserved* for a scheduled status. |
| `1` | Investigating | You have reports of a problem and you're currently looking into them. |
| `2` | Identified | You've found the issue and you're working on a fix. |
| `3` | Watching | You've since deployed a fix and you're currently watching the situation. |
| `4` | Fixed | The fix has worked, you're happy to close the incident. |
