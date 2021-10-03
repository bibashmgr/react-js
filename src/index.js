import React from 'react';
import ReactDOM from 'react-dom';

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

function BookList() {
  return (
    <section>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};
const Image = () => {
  return (
    <img
      src='https://m.media-amazon.com/images/I/91PU12hpz8S._AC_UY327_FMwebp_QL65_.jpg'
      alt=''
    />
  );
};

const Title = () => {
  return <h2>The Last Thing He Told Me: A Novel</h2>;
};

const Author = () => {
  return <h4> Laura Dave</h4>;
};

ReactDOM.render(<BookList />, document.getElementById('root'));
