require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_KEY)

shipping_fee = 1050;

const stripeController = async (req,res) => {
const{total_amount, shipping_fee} = req.body

const calcTotal = () => {
return total_amount + shipping_fee
}

const paymentIntent = await stripe.paymentIntents.create({
  amount: calcTotal(),
  currency: "usd"
})
res.json({clientSecret: paymenyIntent.clientSecret})
}

module.exports = stripeController
