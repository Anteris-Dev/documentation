# Getting Started
Each Autotask endpoint has a service class that represents it. You may interact with these service classes directly, or utilize the client wrapper we have included to instantiate them. Each of these approaches are supported and documented below.


## Client Wrapper
For the purpose of ease, the client wrapper allows you to easily interact with every Autotask service. This can be created as shown below.

```php
$client = new Anteris\Autotask\Client(
    $apiUser,
    $apiSecret,
    $integrationCode,
    $baseUrl
);
```

For each of the Autotask endpoints, there is a method on the client wrapper that allows you to make an API call on that endpoint. For example:

```php
$client->contacts()->findById( $id );
```

::: tip
Class methods are named the camel case version of their endpoint name (e.g. Contacts is `contacts()`, ContactGroups is `contactGroups()`).
:::

## Bypassing the Client Wrapper
If you are only interacting with one or two Autotask endpoints, you may wish to bypass the client wrapper. You can do this as shown below.

```php
// Note that we are using the HttpClient, not the wrapper Client.
$client = new Anteris\Autotask\HttpClient(
    $apiUser,
    $apiSecret,
    $integrationCode,
    $baseUrl
);

$contactEndpoint = new Anteris\Autotask\API\Contacts\ContactService($client);
$ticketEndpoint  = new Anteris\Autotask\API\Tickets\TicketService($client);
```
