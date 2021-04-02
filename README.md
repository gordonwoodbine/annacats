# AnnaCats

Practicing my CSS and JavaScript by building a cat gallery app thing for my friend Anna. Who is fond of cats, naturally.

Current version lives at: https://gordonwoodbine.github.io/annacats/

![Screenshot](./img/screenshot.jpg)

## To do:

- [x] Make responsive! Cos it ain't currently :(
- [ ] Fix button that looks different on iPhone for some reason
- [x] Add images to a favourites gallery
- [x] Style the gallery so it doesn't look shit
- [x] Save the gallery to local storage
- [x] Retrieve gallery from local storage (if one exists)
- [x] Have a way to delete images from gallery
- [x] Avoid adding duplicate images to gallery
- [x] Create 'Already in Favourites!' alert (aside: I'm doing this by flashing a red border on the image if it's already in the gallery. I have the feeling this is probably _horrible_ from an accessibility point of view)
- [x] Some form of gallery modal?
- [x] Animate removing cats from gallery
- [ ] Add 'back to top' navigation

## Project notes:

### Aims:

My aim with this project was simply to build something that looked kinda nice and utilised data fetched from an API.

### Things I learned:

- In what I suspect will become a long-running trend, I ended up spending more time on the css than on the JavaScript.

- I'd used CSS grid before but somehow didn't know/had forgotten about the grid-auto-rows property which, it turns out, is really useful when you don't know how many rows you're going to end up with.

- Trying to communicate data through hover states really doesn't work on mobile...

- Looking at pictures of cute cats is good for the blood pressure. For productivity, not so much.

### Things I would do differently/expand upon:

- Currently, the list of favourite cats is just an array that is saved to local storage. Ideally I think this would be saved to a database, so adding in a backend + database would be a good idea.

- Implement some sort of lazy loading on the gallery cos at the moment it loads the whole thing in one go. Which is not ideal.

- Add prev/next functionality to the modal images.
