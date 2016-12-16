# kontur

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Node.js Version][node-version-image]][node-version-url]

a little DSL that outputs JSON schema

## overview

```js
import { compile, bool, int, str } from 'kontur'

compile({
  gender: str,
  age: int,
  nickname: str,
  verified: bool
})
```

```js
compile({
  gender: str.in('male', 'female').optional,
  age: int.between(0, 200),
  nickname: str.minlen(3).match(/^[a-zA-Z]/),
  verified: bool.optional.default(false)
})
```

nested schema

```js
compile({
  assignment: {
    assignees: array.len(3).uniq.items(str.len(16)),
    assigner: object.strict.properties({
      id: str.len(16)
    }),
    assigned_at: str.datetime
  }
})
```

[instruction](koa.md) on validating request body in koa using ajv and kontur

## types

### object

`strict`, no extra properties should be included

`size(num)`, `maxsize(num)`, `minsize(num)`, limit the number of properties

`properties(schema)`, specify schema of children

### array

`strict`, no extra items should be included

`len(num)`, `minlen(num)`, `maxlen(num)`, limit the length of the array

`items(schema)`, all element should match

`uniq`

`contains(schema)`, at least one element should match

### string

`match(regexp)`, match a regular expression

`email`, `ipv4`, `ipv6`, `uri`, `datetime`, built-in formats

### number/int

`min(num)`, `max(num)`, `between(num, num)`,

`min(num).exclusive`, `max(num).exclusive`

### null

`nil` just null

### boolean

`bool`

### tuple(direived from array)

use plain array

```
[str, int.between(1,5)]
```

### enum

```
str.in('created', 'suspended', 'deleted')
```

```
any('male', 'female')
```

## miscs

`optional` used in context of object, by default all keys are required

`depends(keys)` used in context of object

`default(value)` add default value

`desc(text)` add description

`title(text)` add title

## combining schemas

### all

```
all(int.min(0), int.max(1))
```

### any

```
any(int.min(1).exclusive, int.max(0).exclusive)
```

### one

```
one(int.min(0), int.max(1))
```

### not

```
not.nil
```

```
not.object.array
```

[npm-image]: https://img.shields.io/npm/v/kontur.svg?style=flat
[npm-url]: https://npmjs.org/package/kontur
[travis-image]: https://img.shields.io/travis/zweifisch/kontur.svg?style=flat
[travis-url]: https://travis-ci.org/zweifisch/kontur
[node-version-image]: https://img.shields.io/node/v/kontur.svg
[node-version-url]: https://nodejs.org/en/download/
