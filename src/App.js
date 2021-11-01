import { useEffect, useState } from 'react';
import './App.css';
import Books from './components/books';
import Header from './components/header';
import SideBar from './components/sidebar';

function App() {

  const [books, setBooks] = useState([])

  useEffect(()=>{
    const sources = 'http://localhost:5000/books'
    fetch(sources)
    .then(responce => responce.json())
    .then(data => {
      setBooks(data)
    })
  })

  return (
    <div className="App">
      <Header />
      <div className='b_class row'>
        <div className='col-sm-4'>
          <SideBar />
        </div>
        <div className='col-sm-8' style={{padding:'2vw'}}>
          {books.map((item,i)=>{
            return <Books title={item.title} shortDescription={item.shortDescription} image={item.thumbnailUrl} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
