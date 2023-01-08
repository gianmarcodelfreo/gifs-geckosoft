## Intro

Questo è il progetto sviluppato in [Next.js](https://nextjs.org/) per [Geckosoft](https://www.geckosoft.it/) da Gian Marco Del Freo. L'applicazione è basata su ReactJS, come concordato nel colloquio orale.

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
npm i &&
npm run build &&
npm run start
```

> Server in locale: [http://localhost:3000](http://localhost:3000)
>
> > NT. Ho lasciato volontariamente il .env nella repo in modo da non dover compiere ulteriori passaggi per la build 😉

## Components flow

- Layout
  - GifListItemModal
  - INDEX (page)
    - TopBar
      - SearchBar
      - SortButtons
      - FavoritesBtn
    - MosaicList
      - MosaicList | NoResults
        - MosaicListItem
  - FAVORITES (page)
    - NavigationBar
    - MosaicList | NoResults

> Riguardo al Modal component, ho deciso di non creare un componente riutilizzabile visto che l'app non ne necessità. Tuttavia se ci fosse ipoteticamente la necessità di usare più modal, allora varrebbe la pena creare un componente modello e gestire in maniera diversa gli stati in una sola slice redux.

## Libs

| Lib                             | Description                                                                                                                                                                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| redux                           | A Predictable State Container for JS Apps.                                                                                                                                                                                                        |
| axios                           | Promise based HTTP client for the browser and node.js.                                                                                                                                                                                            |
| framer-motion                   | A production-ready motion library for React.<br /><br/> Ho scelto questa libreria per animare l'apertura e la chiusura del modal senza dover scrivere css vanilla                                                                                 |
| react-bootstrap-icons           | The brand new Bootstrap Icons library to use as React components.<br /><br/> Preferisco le icone di bt piuttosto che quelle di heroicons o fontawesome poiché bt offre una gamma più limitata di icone ma più consistenti secondo il mio parere   |
| react-infinite-scroll-component | A component to make all your infinite scrolling.                                                                                                                                                                                                  |
| react-responsive-masonry        | A lightweight React responsive masonry component built with css flexbox.<br /><br/>Ho deciso di utilizzare una libreria per fare il mosaic layout viste le tempistiche                                                                            |
| tailwindcss                     | A utility-first CSS framework packed with classes<br /><br/>Per questo progetto ho deciso di utilizzare tailwind piuttosto che altre librerie come bt o material ui dato che non mi servivano componenti pre-strutturati ma solo flessibilità css |
