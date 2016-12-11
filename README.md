# kontur

## overview

json-schema made simple

```js
import { compile, bool, int, str } from 'kontur'

compile({
  gender: str,
  age: int,
  nickname: str,
  verified: bool
})
```

```
compile({
  gender: str.in('male', 'female').optional,
  age: int.between(0, 200),
  nickname: str.minlen(3).match(/^[a-zA-Z]/)
})
```

nested schema

```
compile({
  assignees: array.len(3).uniq.items({
    id: str.len(16)
  })
})
```

```
compile({
  assigner: object.strict.properties({
    id: str.len(16)
  })
})
```
