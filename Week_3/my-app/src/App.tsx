import React from 'react';
import logo from './logo.svg';
import './App.css';

import FavouritePlace from "./components/Favourite-Place";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header
      />
      <FavouritePlace
        IntroTitle = "Hannah, Debs and Arya's masterpiece"
        title = "A block of flats on a sunny day"
        area = "Thamesmead"
        city = "London"
        location = "https://goo.gl/maps/jBnnYUTsBrWeQjER8"
        MainImage = "https://hidden-london.com/wp-content/uploads/2011/09/Southmere-Flats-2012-George-Rex-742.png"
        Desc = "Block of flats"
        reason = "This is where I grew up!😢"
      />
      <FavouritePlace
        IntroTitle = ""
        title = "Hannah's Home"
        area = "Sornas"
        city = "Andorra"
        location = "https://goo.gl/maps/Cj4HnGVEGY21HDcZ7"
        MainImage = "https://image.shutterstock.com/image-photo/small-village-sornas-pyrenees-andorra-600w-1360398008.jpg"
        Desc = "Village square in mountains"
        reason = "This is my family home"
      />
      <FavouritePlace
        IntroTitle = ""
        title = "Cloud Gate"
        area = "Illinois"
        city = "Chicago"
        location = "https://goo.gl/maps/eHGWDNLbUXvNnpyB6"
        MainImage = "https://cdn.choosechicago.com/uploads/2019/05/loop-1800x900.jpg"
        Desc = "The cloud gate in chicago"
        reason = "Because they have a Nando's too"
      />
      <FavouritePlace
        IntroTitle = ""
        title = "The Hague"
        area = "The Netherlands"
        city = "Den Haag"
        location = "https://goo.gl/maps/aamzeRZEfG8iv7A79"
        MainImage = "https://lh5.googleusercontent.com/p/AF1QipMJQIy4zkmbQGocinG4CkfdieQ-INO7XBKdJrpS=w408-h273-k-no"
        Desc = "Centre of The Hague"
        reason = "This is where Hannah grew up"
      />
      <Footer
      />
    </div>
  );
}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
