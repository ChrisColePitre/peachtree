import React from 'react';
import ItemList from '../features/items/list'
import Card from '../features/cards/card'
const importedObj = {
    title: "Hello World Box",
    imageLink: null,//need to flesh out how to import scrolling images into these cards
    textBody: "Welcome to my site, this is my hello world box. Excuse the crudeness, just like myself, this site is a work-in-progress."
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