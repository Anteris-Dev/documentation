# The Cache Proxy
This package ships with a handy helper class which will cache the result of every method call to your own class. This is done by wrapping your class in our cache proxy class. The first parameter to this class must be an instance of `Anteris\Cache\CacheRepository`, the second parameter must be an instance of your own class. An optional third parameter can be passed an array of methods you would like to avoid caching.

Below you will find a quick demonstration of how to use this.

```php
use Anteris\Cache\CacheRepository;
use Anteris\Cache\CacheProxy;

// An example class that we are going to cache
class MyClass
{
    public $firstName = 'Test';
    public $lastName  = 'Case';

    public function fullname()
    {
        return "{$this->firstName} {$this->lastName}";
    }

    public function realtimeFullname()
    {
        return $this->fullname();
    }
}

// The setup of our example class in the cache proxy
$cache = new CacheRepository(__DIR__);
$proxy = new CacheProxy($cache, new MyClass, [
    'realtimeFullname'
]);

// Outputs "Test Case"
echo $proxy->fullname();

// Outputs "Jim Bob"
$proxy->firstName = 'Jim';
$proxy->lastName  = 'Bob';

echo "{$proxy->firstName} {$proxy->lastName}";

// Outputs "Jim Bob"
echo $proxy->realtimeFullname();

// Outputs "Test Case"
echo $proxy->fullname();
```
