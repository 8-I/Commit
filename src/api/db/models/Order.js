
import Order from '../'

const schema = (user, space, start, end, price) => ({
  user,
  space,
  start,
  end,
  price,
})

export const create = (user, space, start, end, price) =>
  Order.save(schema(user, space, start, end, price))
