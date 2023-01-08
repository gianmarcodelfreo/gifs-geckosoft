## intro

Questo è il progetto sviluppato in [Next.js](https://nextjs.org/) per [Geckosoft](https://www.geckosoft.it/) da Gian Marco Del Freo. L'applicazione è basata su ReactJS, come concordato nel colloquio orale

### Features implementate

- Gifs fetch api
- Search api
- Gif expand (modal)
- Infinite scroll
- Mosaic layout
- Sorting
- Image loading shape placeholder
- Favorites (with localstorage)
- UX & UI (responsive & cross-browser)

## Build del progetto

```bash
npm i
# and
npm run build
```

> Server in locale: [http://localhost:3000](http://localhost:3000)
>
> > NT. Ho lasciato volontariamente il .env nela repo in modo da non dover compiere ulteriori passaggi per la build 😉

## Components flow

- Layout
  - GifListItemModal
  - INDEX (page)
    - searchBar
      - ActionButtons
        - SortButtons
        - FavoritesBtn
    - MosaicList
      - MosaicList | NoResults
        - MosaicListItem
  - FAVORITES (page)
    - NavigationBar
    - MosaicList | NoResults

## Libs

| Lib                             | Description                                                                                                                                                                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| redux                           | A Predictable State Container for JS Apps.                                                                                                                                                                                                        |
| axios                           | Promise based HTTP client for the browser and node.js.                                                                                                                                                                                            |
| framer-motion                   | A production-ready motion library for React.<br /><br/> Ho scelto questa libreria per animare l'apertura e la chiusura del modal senza dover scrivere css vanilla                                                                                 |
| react-bootstrap-icons           | The brand new Bootstrap Icons library to use as React components.<br /><br/> Preferisco le icone di bt piuttosto che le heroicons o fontawesome poiché bt offre una gamma più limitata di icone ma più consistenti secondo il mio parere          |
| react-infinite-scroll-component | A component to make all your infinite scrolling.                                                                                                                                                                                                  |
| react-responsive-masonry        | A lightweight React responsive masonry component built with css flexbox.<br /><br/>Ho deciso di utilizzare una libreria per fare il mosaic layout viste le tempistiche                                                                            |
| tailwindcss                     | A utility-first CSS framework packed with classes<br /><br/>Per questo progetto ho deciso di utilizzare tailwind piuttosto che altre librerie come bt o material ui dato che non mi servivano componenti già strutturati ma solo flessibilità css |
