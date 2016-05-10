
import apiConfig from 'api/config'
import stripe from 'stripe'

export default stripe(apiConfig.stripe.secret)

