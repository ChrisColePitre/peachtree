import React from 'react';
import ItemList from '../features/items/list'
import Card from '../features/cards/card'
const importedObj = {
    title: "Data Injection Example",
    imageLink: null,//need to flesh out how to import scrolling images into these cards
    textBody: "Thanks for viewing my examples! This is a box that is a generic component that I can pass a piece of JSON data as props. If you're a fellow software dev I'm sure you see it, the extensibility of features like this is vital to me creating seamless ecommerce sites. Once I figure out the most cost effective image hosting I will be able to craft sale listings in the most popular formats on the web."
}
const App = () => {
    return(
        <>
        <Card props={importedObj}/>
        <ItemList />
        </>
        )
}

export default App