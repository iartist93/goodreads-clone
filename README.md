# Goodreads Clone

This project is part of the [Udacity React Developer Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

- The app is for managing user's books into shelves `Currently Reading` , `Read` and `Want to Read`.
- Using Udacity custom API service.
- Feature search functionality for more books to add to user shelves.

---

## Tools used

- Material-UI for bootstrap styles.
- Lodash

---

## Folder Structure

```shell
|-- MY-READS
    |-- .gitignore
    |-- directoryList.md
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- yarn.lock
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- logo192.png
    |   |-- manifest.json
    |   |-- robots.txt
    |   |-- assets
    |       |-- content.jfif
    |       |-- no-thumbnail.jpg
    |-- src
        |-- App.js
        |-- App.test.js
        |-- index.js
        |-- logo.svg
        |-- reportWebVitals.js
        |-- setupTests.js
        |-- components
        |   |-- Books
        |   |   |-- BookItem.js
        |   |   |-- Books.js
        |   |-- Header
        |   |   |-- Header.js
        |   |-- Search
        |   |   |-- Search.js
        |   |-- Shelf
        |       |-- ShelfSelect.js
        |-- pages
        |   |-- Homepage.js
        |   |-- SearchPage.js
        |-- services
        |   |-- BooksAPI.js
        |-- styles
            |-- App.css
            |-- index.css

```

---

## Install

```shell
> cd my-reads
> npm install
> npm start
```

- App runs on http://localhost:3000

---

## TODO

- [ ] Update the select icons
- [ ] Update the app theme
- [ ] Add book rating
- [ ] Add book review
- [ ] Add create new shelf feature
- [ ] Ad delete custom shelf feature (to delete custom created shelves)
- [ ] Add user gmail login
- [ ] Bulk move books from one category to another.

---

## To Fix

- [ ] Clear the search page when navigating back to it.
- [ ]
