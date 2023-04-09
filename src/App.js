// import myHeader from './components/Header/header.js';
// import myFooter from "./components/footer/footer.js";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <h1>My first react app</h1>

//       </header>
//     </div>
//   );
// }

// export default App;

import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";

function App() {
 const arr=["vishal","ajay","lol","lal"];
  return (
    <div className="App">
      {arr.map((item)=>(
        <Header name={item}/>
      ))}
      <h1>My first react app</h1>
       <h2>fihaofndokf</h2>
     
    </div>
  );
}

export default App;



