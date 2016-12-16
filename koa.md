# koa intergration

[ajv](https://github.com/epoberezkin/ajv) is used to do actual validation

here's what we will achieve in the end

```js
import { str } from 'kontur'
import { schema } from './schema'

router.post('/', schema({
    name: str.minlen(3),
    description: str.optional
}), async (ctx) => {
    await ctx.db.thing.insert(ctx.reqeust.body)
    ctx.status = 201
})
```

## get ajv and kontur

```
yarn add kontur ajv@^5.0.0-beta
```

## write the middleware

`strict` is used here so that unexpected properties won't be presented in request body

`minsize(1)` prevent empty request body when all properties are optional

```js
import Ajv from 'ajv'
import { compile, object } from 'kontur'

const ajv = new Ajv()

export const schema = schema => {
  let validate = ajv.compile(compile(object.strict.minsize(1).properties(schema)))
  return async (ctx, next) => {
    if (!validate(ctx.request.body)) {
      ctx.status = 400
      ctx.body = validate.errors
    } else {
      await next()
    }
  }
}
```

