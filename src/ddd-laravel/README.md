# Introduction
This package is inspired by the work of [Brent Roose](https://github.com/brendt) and the [Spatie](https://spatie.be/) team. Particularly by Brent's [Domain Driven Development blog posts.](https://stitcher.io/blog/laravel-beyond-crud-01-domain-oriented-laravel)

By utilizing the commands provided in this package, you can convert your Laravel application into a Domain Driven experience by reorganizing the app structure and updating namespaces. Laravel Fortify and Jetstream are supported.

This package also provides several useful make commands for generating classes within the domain.

## To Install
```bash
composer require anteris-dev/domain-driven-laravel --dev
```

You will now need to reorganize your application. You can do this by running the domain setup command. For example:

```bash
php artisan domain:setup {domain}
```

Where `{domain}` is the desired name of your domain.

::: tip
To understand what this command does, check out the [changes made](changes-made.md) page.
:::
