# Hot Deals

Shop for hot products at low prices!

See a live demo [here](https://keen-shockley-f4d977.netlify.app/)

### How-To

- The home page shows a list of products.
- Click a product to see the product details.
- On the details page, click to add the item to the cart.
- See the cart by clicking the cart icon in the top right corner.
- See the current items in the cart, their quantites, and the total cost.

This app is designed for all devices. Thus, make sure to view it on mobile as well!

### Prerequisities

There are no special prerequisites for this app. It uses a public API.

### Installation

1. Begin by forking this repository, and cloning to your computer.

2. Prepare a `.env` file following the `.env.example` example.

3. Install the necessary dependencies by running `npm i`.

### To Start

Run the command `npm run start`. This will build the React app, and open it in the browser.

## Tech Stack

- React
- Typescript
- Fake Store API
- Axios
- Styled Components
- Netlify (to Deploy)

## Next Steps

Logic / Code Quality

- This app is growing quickly! Consider using **React Context** for state management.
- Decide how to **handle errors**. At the moment they are just logged to the console. Maybe a toaster.
- **Add testing** to check: math of cart, adding / removing items from cart, site navigation.

UI

- Add a **toaster for notifications**. Particularly when adding an item to the cart.
- The API exposes a **categories filter**! That would be a good new feature.
- Incorporate **quantities and stock**. The API exposes the number of available items as well.
