![](https://github.com/connorcodefoot/Menu-Mate/blob/3045f5f07c0f0aa93dfa7e0a89c36e7b2a58f56c/src/MMLogo.gif)

# Menu Mate

## Description

Menu Mate is an MVP for an all in one POS for restaurants. Managers can create and update menus and manage orders, all while customers can create, submit and pay for orders from their mobile device.

## Stack

Postgres, Express, Node, React

## Future Builds

- Kitchen view of orders optimized for people preparing food
- Alternative customer flow for takeout orders
- QR code scanning for table
- Reporting
- Deeper tools for orders view
- Refactoring. Three of us worked quite independentally on this project - it could use some consistency/trimming


## Setup

- Ensure that you have also cloned Menu Mate API (https://github.com/connorcodefoot/Menu-Mate-API)
- Create and connect local postgres DB, setting up .env file accordingly
- Run ```npm run db:reset``` to seed app
- Run API then run app

## How to use
- Create a new user, proceed to menu
- Add items to your order, submit items to kitchen. Note that orders are ongoing until they are paid, so feel free to continue to add to the order if you feel like another drink or dessert. See stripe details below for test card credentials.
- For admin views, go to /admin/orders, from there, browse orders or add/edit menus

## Stripe

- Use stripe test credentials to submit payments
``` 
    Card: 4242424242424242
    Expiry: any date greater than today
    CSV: any 3 digits
```




