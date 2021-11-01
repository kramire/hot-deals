# Hot Deals

Shop for hot products at low prices!

See a live demo [here](https://keen-shockley-f4d977.netlify.app/)

### How-To

- The home page shows a list of products.
- Filter the list by category, and sort alphabetically.
- This list can be viewed as a "User" or an "Admin"
- The User can click a product to see the product details, and add to the cart. The cart has the item quantities, and total cost.
- The Admin can edit the item's name and price.

This app is designed for all devices. Thus, make sure to view it on mobile as well!

### Prerequisites

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
- React Router
- [Fake Store API](https://fakestoreapi.com/)
- Axios
- Styled Components
- Semantic UI
- Netlify (to Deploy)

## Approach

1. Design:
   The creation of this site began with some research on other "deal" websites.
   I used primarily [Zalando](https://www.zalando.at/) for inspiration.
   Then, I drew a basic sketch of the layout for the site.

2. Tool Selection:
   I'm very comfortable working with React, Typescript, Semantic UI, and Styled Components, so this was the natural selection of tools for me.
   I did some research about ecommerce / store / inventory API's, and discovered the [Fake Store API](https://fakestoreapi.com/).
   The backup plan was to create a JSON of mock data.

3. UI Organization
   I began with the Product List page, then the Product Detail page, then the Cart page, then the Admin role; committing after each.
   For each page, I decided which components I needed, and what state / logic they required.
   I also created reusable components if I needed some UI on more than one page (for example, an orange button).
   Finally, I used media queries and CSS Grids to render clean designs for various screen sizes.

4. State Management
   I decided from the start to use local state, given the app's small size.
   But, when I built the "cart" and the "admin role", I almost used a React Context, because this logic is needed in multiple places. This would be my next refactor.
   I also decided to build a custom hook to track the "loading" state per page.

5. API Logic
   I originally was using `fetch` for the API requests, because this is easy to use right away. But as this started to scale, I decided to change to `axios`, since the error handling is easier.

## Next Steps

Logic / Code Quality

- Use **React Context** for state management.
- Decide how to **handle errors**. At the moment they are just logged to the console. Maybe a toaster, or a window alert.
- **Add testing** to check: math of cart, adding / removing items from cart, site navigation.

UI

- Add a **toaster for notifications**. Particularly when adding an item to the cart.
- Incorporate **quantities and stock**. The API exposes the number of available items as well.
- Use CSS Variables, or define a Styled Components Theme Context for the reusable window sizes, and colors.
