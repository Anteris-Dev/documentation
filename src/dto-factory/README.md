# Introduction
This package supports DTO mocking for the Spatie [Data Transfer Object package](https://github.com/spatie/data-transfer-object). By default only built-in PHP types are supported, but this factory can easily be extended to support other types (e.g. Carbon) as well.

::: warning
Right now doc block type casting is supported, though testing is limited.
:::

## To Install
```bash
composer require anteris-dev/data-transfer-object-factory
```

- **Note:** This package require PHP 7.4 so it can take full advantage of type casting in PHP.
