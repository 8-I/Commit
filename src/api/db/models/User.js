
import User from '../'

/*
 * Format a new User before storing it
 */
const schema = (email, hash) => ({
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

  /*
   * Current session
   *
   * { enter: ... }
   */
  currentSession: null,
})

export const create = (email, hash) =>
  User.save(schema(email, hash))

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
const append = field => id => element =>
  User.append(id, field, element)

const addSpace = append('spaces')
const addHistory = append('history')
const addRating = append('needRating')

const startSession = id => () =>
  User.updateField(id, 'currentSession', { enter: Date.now() })

/*
 * User Model
 *
 * Usage:
 *
 * const email = 'gbadi@gmail.com'
 *
 * User({ email })
 *  .then(user => user.startSession())
 */
export default payload =>
  getUserBy(payload)
    .then(body => ({
      body,
      addSpace: addSpace(body.id),
      addHistory: addHistory(body.id),
      addRating: addRating(body.id),
      startSession: startSession(body.id),
    }))
