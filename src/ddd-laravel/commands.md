# Commands
This package provides the following make commands for your ease.

- `make:app:controller {layer} {name}`
  - Creates a new [application controller](https://stitcher.io/blog/laravel-beyond-crud-07-entering-the-application-layer) in the `app/App/{layer}/Controllers` directory.

- `make:app:viewmodel {layer} {name}`
  - Creates a new [application view model](https://stitcher.io/blog/laravel-beyond-crud-07-entering-the-application-layer) in the `app/App/{layer}/ViewModels` directory.

- `make:domain:action {subdomain} {name}`
  - Creates a new [action](https://stitcher.io/blog/laravel-beyond-crud-03-actions) in the `app/{domain}/{subdomain}/Actions` directory.

- `make:domain:dto {subdomain} {name}`
  - Creates a new [data transfer object](https://stitcher.io/blog/laravel-beyond-crud-02-working-with-data) in the `app/{domain}/{subdomain}/DataTransferObjects` directory.

- `make:domain:model {subdomain} {name}`
  - Creates a new [model](https://stitcher.io/blog/laravel-beyond-crud-04-models) in the `app/{domain}/{subdomain}/Models` directory.
