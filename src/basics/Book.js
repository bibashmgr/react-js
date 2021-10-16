// two ways to export:
// export components;
// export default components;

import React from 'react';

const Book = (props) => {
    const { img, title, author, price } = props;

    // events
    const clickHandler = () => {
        window.alert('Thank you for buying!');
    };
    return ( <
        article className = 'book-box' >
        <
        img src = { img }
        alt = { img }
        className = 'image' / >
        <
        h1 className = 'title-name' > { title } < /h1> <
        h4 className = 'author-name' > { author } < /h4> <
        div className = 'price' > Rs. { price }
        /-</div > { /* clickHandler() automatically invokes without any events */ } { /* whereas clickHandler doesnot */ } <
        button type = 'button'
        className = 'buy-btn'
        onClick = { clickHandler } >
        Buy <
        /button> <
        /article>
    );
};

export default Book;