
import User from '../'

/*
 * Format a new User before storing it
 */
export const schema = (email, hash) => ({
  email,
  hash,

  /*
   * Spaces provided by the User
   */
  spaces: [],

  /*
   * Spaces ids that the user need to rate
   */
  needRating: [],

  /*
   * Orders ids that the user has been to
   */
  history: [],
})

/*
 * Retrieve a user with a given field
 *
 * Usage:
 *
 *  const email = 'guillaume.badi@gmail.com'
 *
 *  getUserBy({ email })
 *    .then()
 *    .catch()
 */
export const getUserBy = payload => {

  const keys = Object.keys(payload)

  if (keys.length !== 1) { return Promise.reject() }

  return User.findBy(keys[0], payload[keys[0]])
}

/*
 * Adds new elements to users collections
 *
 * Usage:
 *
 *   addSpace(userID, spaceID)
 */
const append = field => (id, element) =>
  User.append(id, field, element)

export const addSpace = append('spaces')
export const addHistory = append('history')
export const addRating = append('needRating')
