# Project Atelier
![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)

#### An e-commerce demo application
<img src="atelier.gif" />

## Technologies Used
 * React
 * Express
 * Node
 * CSS
 * JavaScript

## Description

This was the front-end capstone project for Hack Reactor. We were assigned to build out an e-commerce website that would meet the requirements and specifications of project stakeholders to simulate a real life work scenario. The website consists of four main components which are listed below. Our team consisted of four members who each took responsibility of an individual component and worked collaboratively to create a cohesive, fully functional website.

## Product Overview
- The product overview consisted of four components. These components were the product information, style selector, cart and image gallery.

## Related Products (My Section)
- Related Items List
  - The related items is a list related products of current overview product. Each product is a clickable card, it brings users to the main overview page about the clicked product. Once users clicked on the card and changed the view, the related item list would be change based on the current overview product. Also, on the right top corner of each related product card, there is a star button which is clickable to display the similarity and different of current overview product and current related product.
- Outfit List
  - Each user has their own unique lists for the outfit. Users could add current overview product to their outfit lists by clicking the first card. The outfit list has similar function as related item. When you click on the outfit card, the overview would change to the product users clicked. Also, if users don’t like their added outfit product, they could easily remove it by clicking the cross button on the right top corner of each card.

## Questions and Answers
- This widget displays a set of user-generated questions and answers related to the product currently in view.

## Ratings and Reviews
- This widget is a combination of two main (ReviewsList/RatingsData) components comprised of many subcomponents.

## Front End Optimization

- React Lazy Loading
  - Used React Lazy Loading on our individual components to split our main bundle.js into smaller bundles that would dynamically render as we scrolled through    the page. This ended up doubling our performance score on lighthouse
- Compression
  - Used the compression middleware on our node server to compress our files to increase our performance
- Preloading
  - Preloaded fonts and stylesheets

## Deployment

- We deployed our website on an AWS EC2 container using the Ubuntu 20.04 server
- Installed node, npm and all node modules relevant to run a build of our project
- Updated in bound rules to reroute all traffic from Port 80 to Port 3000 as our server hosts our client on Port 3000

## Setup/Installation

- Clone this repo to your desktop
- Use command `npm install` to install all necessary packages
- Use command `npm run start` to start the server
- Use command `npm run build` to compile code
- Open `index.html` in your browser

## Usage

[localhost:1234](localhost:1234)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Credit

- Overview: [Adam Lohnes](https://github.com/adam-lohnes)
- Header & Related Product: [Yitong Liu](https://github.com/lyt414)
- Questions & Answers: [Yuanqi Wang](https://github.com/yuanqiwang)
- Reviews: [Maggie Saldivia](https://github.com/Maggie-Mango)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
