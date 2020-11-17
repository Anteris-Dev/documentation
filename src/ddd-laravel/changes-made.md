# Changes Made
During the setup of the domain, the following actions are made.

1. Create a directory in `app` with the name of your domain

2. If Fortify or Jetstream is installed, move their Actions into the domain directory
    - The namespace of these actions is determined by whether or not Jetstream has team support installed. If team support is enabled, they will be placed in the Team namespace in your domain. Otherwise they will be placed in the `User` namespace

3. Move models into their own namespace within this domain directory
    - The namespace of the models is determined by the singular form of their filename. Models will be placed under this namespace in a `Models` directory
    
    - If Jetstream is installed with teams support, Jetstream models will be moved to the `Team` namespace

4. Move Laravel files to `app/Support`

5. Create an application layer directory at `app/App`

6. Update the bootstrap file to look for Laravel under `app/Support`

7. Update autoloading in composer

8. Store the current domain in composer under `extra.laravel.domain` for use during file generation and namespace updates

9. Dump composer autoloads
