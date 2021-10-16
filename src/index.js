import React from 'react';
import ReactDOM from 'react-dom';

// importing css
import './styles/index.css';

// stateless functional components
// function name should be capital
// always return JSX
// function Greetings() {
//   return <h3>My React component</h3>;
// }

// function Greetings() {
//   return (
//     <div>
//       <h1>HELLO</h1>
//       <p>This is my first react-app</p>
//     </div>
//   );
// }

// const Greetings = () => {
//   // createElement takes three parameters:
//   // elements,  props object , children(content of element)
//   return React.createElement('h1', {}, 'Hello World1');
// };

// const Greetings = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World2')
//   );
// };

// JSX rules:
// 1. return single element
// 2. div/ section/ article/ fragment(use HTML semantics or React.Fragment)
// 3. camleCase for HTML attributes
// 4. className instead of class
// 5. close every element with closing tag
// 6. formatting
// 7. <>...</> means <React.Fragment>...</React.Fragment>

// function Greetings() {
//   return (
//     <React.Fragment>
//       <div>
//         <h2>HELLO</h2>
//         <ul>
//           <li>
//             <a href='#'>Donot Click Here,</a>
//           </li>
//         </ul>
//       </div>
//     </React.Fragment>
//   );
// }

// function Greetings() {
//   return (
//     <>
//       <div>
//         <h2 className='headings'>HELLO</h2>
//         <ul>
//           <li>
//             <a href='#'>Donot Click Here,</a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// Nested Components:

// function Profile() {
//   return (
//     <div>
//       <Person></Person>
//       <Message></Message>
//     </div>
//   );
// }

// const Person = () => {
//   return <h1>Bibash Thapa Magar</h1>;
// };

// const Message = () => {
//   return <p>Love yourself or Nobody will</p>;
// };

// function BookList() {
//     return (
//         <section className='books-box'>
//             <Book></Book>
//             <Book></Book>
//             <Book></Book>
//         </section>
//     );
// }

// const Book = () => {
//     return (
//         <article className='book-box'>
//             <Image></Image>
//             <Title></Title>
//             <Author></Author>
//         </article>
//     );
// };
// const Image = () => {
//     return (
//         <img src = 'https://m.media-amazon.com/images/I/91PU12hpz8S._AC_UY327_FMwebp_QL65_.jpg' alt = '' className='image' />
//     );
// };

// const Title = () => {
//     return <h1 className='title-name'> The Last Thing He Told Me </h1>;
// };

// const Author = () => {
//     // here, the first curly backet is for entering into js worlf and the second one is for creating object
//     return <h4 style={{letterSpacing: '2px', color:'#605d5d'}} className='author-name'> Laura Dave </h4>;
// };

// // setting-up variables:
// const title = 'The Last Thing He Told Me';
// const author = 'Laura Dave';
// const img = 'https://m.media-amazon.com/images/I/91PU12hpz8S._AC_UY327_FMwebp_QL65_.jpg';

// const BookList = () => {
//     return(
//         <section className = 'books-box'>
//             <Book></Book>
//         </section>
//     );
// };

// const Book = () => {
//     return(
//         <article className = 'book-box'>
//             <img src = {img} alt = '' className='image' />
//             <h1 className='title-name'> {title} </h1>
//             <h4 className='author-name'> {author} </h4>
//             <div className='price'>Rs. 800/-</div>
//         </article>
//     );
// };

// // setting-up variables:
// const firstBook = {
//     img: 'https://pos.booksmandala.com/images/3936',
//     title: 'Sold',
//     author: ' Patricia McCormick'
// }
// const secondBook = {
//     img: 'https://pos.booksmandala.com/images/5226',
//     title: 'The Fifth mountain',
//     author: 'Paulo Coelho'
// }
// const thirdBook = {
//     img: 'https://pos.booksmandala.com/images/8525',
//     title: 'Kara',
//     author: 'Sushil Karki'
// }

// const BookList = () => {
//     return(
//         <section className='books-box'>
//             <Book
//                 img = {firstBook.img}
//                 title = {firstBook.title}
//                 author = {firstBook.author}>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto natus cupiditate dolores corporis magni dolorum facere, quos nisi sint officia quia! Ut odio doloribus porro. Dicta quam laborum perspiciatis!
//                 </p>
//             </Book>
//             <Book
//                 img = {secondBook.img}
//                 title = {secondBook.title}
//                 author = {secondBook.author}>
//             </Book>
//             <Book
//                 img = {thirdBook.img}
//                 title = {thirdBook.title}
//                 author = {thirdBook.author}>
//             </Book>
//         </section>
//     );
// };

// const Book = (props) => {
//     const {img, title, author, children} = props;
//     return(
//         <article className='book-box'>
//             <img src={img} alt="" className='image' />
//             <h1 className='title-name'> {title} </h1>
//             <h4 className='author-name'> {author} </h4>
//             {children}
//         </article>
//     );
// };

// // setting-up variables:
// const books = [
// {
//     img: 'https://pos.booksmandala.com/images/3936',
//     title: 'Sold',
//     author: ' Patricia McCormick'
// },
// {
//     img: 'https://pos.booksmandala.com/images/5226',
//     title: 'The Fifth mountain',
//     author: 'Paulo Coelho'
// },
// {
//     img: 'https://pos.booksmandala.com/images/8525',
//     title: 'Kara',
//     author: 'Sushil Karki'
// }
// ];

// const BookList = () => {
//     return(
//         <section className='books-box'>
//             {books.map((book) => {
//                 return(
//                     <Book book = {book}></Book>
//                 );
//             })}
//         </section>
//     );
// };

// const Book = (props) => {
//     const {img, title, author} = props.book;
//     return(
//         <article className='book-box'>
//             <img src={img} alt={img} className='image' />
//             <h1 className='title-name'> {title} </h1>
//             <h4 className='author-name'> {author} </h4>
//         </article>
//     );
// };

// ReactDOM.render( <BookList></BookList> , document.getElementById('root'));

// // setting-up variables:
// const books = [
// {
//     id: 1,
//     img: 'https://pos.booksmandala.com/images/3936',
//     title: 'Sold',
//     author: ' Patricia McCormick'
// },
// {
//     id: 2,
//     img: 'https://pos.booksmandala.com/images/5226',
//     title: 'The Fifth mountain',
//     author: 'Paulo Coelho'
// },
// {
//     id: 3,
//     img: 'https://pos.booksmandala.com/images/8525',
//     title: 'Kara',
//     author: 'Sushil Karki'
// }
// ];

// const BookList = () => {
//     return(
//         <section className='books-box'>
//             {books.map((book) => {
//                 return(
//                     // passing unique key to props
//                     // using spread operators
//                     <Book key={book.id} {...book}></Book>
//                 );
//             })}
//         </section>
//     );
// };

// const Book = (props) => {
//     const {img, title, author} = props;
//     return(
//         <article className='book-box'>
//             <img src={img} alt={img} className='image' />
//             <h1 className='title-name'> {title} </h1>
//             <h4 className='author-name'> {author} </h4>
//         </article>
//     );
// };

// ReactDOM.render( <BookList></BookList> , document.getElementById('root'));

// // setting-up variables:
// const books = [
// {
//     id: 1,
//     img: 'https://pos.booksmandala.com/images/3936',
//     title: 'Sold',
//     author: ' Patricia McCormick',
//     price: 1000
// },
// {
//     id: 2,
//     img: 'https://pos.booksmandala.com/images/5226',
//     title: 'The Fifth mountain',
//     author: 'Paulo Coelho',
//     price: 800
// },
// {
//     id: 3,
//     img: 'https://pos.booksmandala.com/images/8525',
//     title: 'Kara',
//     author: 'Sushil Karki',
//     price: 500
// }
// ];

// const BookList = () => {
//     return(
//         <section className='books-box'>
//             {books.map((book) => {
//                 return(
//                     // passing unique key to props
//                     // using spread operators
//                     <Book key={book.id} {...book}></Book>
//                 );
//             })}
//         </section>
//     );
// };

// const Book = (props) => {
//     const {img, title, author, price} = props;

//     // events
//     const clickHandler = () => {
//         window.alert("Thank you for buying!")
//     };
//     return(
//         <article className='book-box'>
//             <img src={img} alt={img} className='image' />
//             <h1 className='title-name'> {title} </h1>
//             <h4 className='author-name'> {author} </h4>
//             <div className='price'>Rs. {price}/-</div>
//             // clickHandler() automatically invokes without any events
//             // whereas clickHandler doesnot
//             <button type='button' className='buy-btn' onClick= {clickHandler}>Buy</button>
//         </article>
//     );
// };

// ReactDOM.render( <BookList></BookList> , document.getElementById('root'));

// import components:

// import { books } from './basics/books';
// import Book from './basics/Book';

// const BookList = () => {
//   return (
//     <section className='books-box'>
//       {books.map((book) => {
//         return (
//           // passing unique key to props
//           // using spread operators
//           <Book key={book.id} {...book}></Book>
//         );
//       })}
//     </section>
//   );
// };

// ReactDOM.render(<BookList></BookList>, document.getElementById('root'));

// Advance react-js

import App from './App.js';

ReactDOM.render( <App></App>, document.getElementById('root'));