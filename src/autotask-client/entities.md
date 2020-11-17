# Entities

## Getting Started with Entities
This package uses [Data Transfer Object](https://github.com/spatie/data-transfer-object) classes to represent Autotask resources. When creating or updating an Autotask resource, you must pass the service class an instance of that resource's entity.

When constructing an entity you may pass it an array of key / value pairs. If Autotask requires a field be set, it is required by the entity as well and will throw an exception if it is not present. Entities can be converted back to arrays by calling the toArray() method.

::: tip
These entities can be found under the API directory of this package and under the plural name of their endpoint. The class name is the singular form of the endpoint suffixed by "Entity" (e.g. `API/Tickets/TicketEntity`).
:::

## Collections
If multiple entities are being handled (for example: the result of a `query()` request) they are put into a collection. Collections are iterable.

::: tip
Collections can be found under the API directory of this package and under the plural name of their endpoint. The class name is the singular form of the endpoint suffixed by "Collection" (e.g. `API/Tickets/TicketCollection`).
:::

When constructing a collection you may pass it an array of entities. A collection can be converted to an array by calling the toArray() method.
