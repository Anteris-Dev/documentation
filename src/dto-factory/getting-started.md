# Getting Started

If you are simply using PHP default types in your DTOs, you can get started right away. Just pass your class name to the static make method. For example:

```php
use Anteris\Example\DataTransferObject;
use Anteris\DataTransferObjectFactory\DataTransferObjectFactory;

// This will create a new instance of my DTO with fake data
$object = DataTransferObjectFactory::make( DataTransferObject::class );
```

You can even fake a collection of DTOs.

```php
use Anteris\Example\DataTransferObject;
use Anteris\Example\DataTransferObjectCollection;
use Anteris\DataTransferObjectFactory\DataTransferObjectFactory;

// This will create a new collection of my DTOs with fake data
$collection = DataTransferObjectFactory::makeCollection(
    DataTransferObject::class,
    DataTransferObjectCollection::class
);
```

In the event that you are using other data types that are not built-in to PHP, you will need to inform the DTO factory how to generate these types. To do this, extend the `DataTransferObjectFactory` class and create a static method with the type name prefixed by "make" (e.g. "makeCarbon"). An instance of faker can be retrieved within this method by calling `static::faker()`. See the example below to see how this could be used to support Carbon.

```php
use Anteris\DataTransferObjectFactory\DataTransferObjectFactory;
use Carbon\Carbon;

class Factory extends DataTransferObjectFactory
{
    public static function makeCarbon(): Carbon
    {
        return new Carbon(
            static::faker()->date
        );
    }
}
```
