# Interacting with the Cache

## Creating an Instance of the Cache Repository
When creating a new instance of the cache repository, you have the option to pass a base directory to the class. The repository will create a new directory named `.cache` in this base directory. If a base directory is not defined, it will default to the current working directory.

You can change the name of the `.cache` directory by passing a directory name to the `setCacheDirectory()` method.

See the example below for further reference.

```php
use Anteris\Cache\CacheRepository;

// Creates an instance of the cache repository in our current directory. Cache
// files will be store in "./.cache"
$cache = new CacheRepository;

// Creates an instance of the cache repository in a sub directory. Cache files
// will be stored in "./sub/.mycache"
$cache = new CacheRepository(__DIR__ . '/sub');
$cache->setCacheDirectory('.mycache');
```


## Reading and Writing to the Cache
There are three useful methods for reading from and writing to the cache. These are `get()`, `has()`, and `set()`. An example of their basic use can be found below.

```php
// Echos "anteris-dev/cache"
$cache->set('package', 'anteris-dev/cache');

if ($cache->has('package')) {
    echo $cache->get('package');
}
```

The `get()` method allows you to pass a second parameter which defines its default value if the key passed is not found in the cache. If this second parameter is a callback function, it will be executed, its result will be cached, and its return value will be returned. Examples of these powerful features can be seen below.

```php
// returns "null"
$cache->get('some-unset-key');

// returns "Whoops! I'm not set!"
$cache->get('some-unset-key', "Whoops! I'm not set!");

// returns "false"
$cache->get('some-unset-key', false);

// returns "94"
$int = 50;
$cache->get('some-unset-key', function () use ($int) {
    return (($int - 3) * 2);
});

// now returns "94", but from cache
$cache->get('some-unset-key');
```

## Clearing the Cache
The cache can be cleared by calling the clear() method.

```php
$cache->set('key', 'Hi there!');

$cache->clear();

// Echos "null"
echo $cache->get('key');
```
