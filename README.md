# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://vcalvo25.github.io/rating-site/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to write DRY JavaScript code. I also learned how to apply styles to innerHTML code. I was able to reinforce my learning by identifying the differences between innerHTML and textContent and using it in my code. 

```html
<h1>Some HTML code I'm proud of</h1>
```
```js
const proudOfThisFunc = () => {
  thanksPopup.innerHTML = `
        <img src="illustration-thank-you.svg" alt="mobile phone icon">
        <p class="show-rating">You selected ${userRating} out of 5<p>
        <h1>Thank you!</h1>
        <p class="thanks-message">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>`
}
```

## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/vcalvo25

