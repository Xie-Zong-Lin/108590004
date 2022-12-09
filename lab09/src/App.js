import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Outlet, Link, useSearchParams, useNavigate } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Title/>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
     <Sidebar>
         <Menu>
           <Link to="/"><MenuItem> Home </MenuItem></Link>
           <Link to="/search?q="><MenuItem> Search </MenuItem></Link>
         </Menu>
     </Sidebar>
     <Outlet />
   </div>
  );
}


function Title() {
  return(
    <nav class="bg-dark navbar-dark navbar">
        <div className="row col-12 d-flex justify-content-center text-white">
            <h2>Welcome to NTUT Web Programming</h2>
        </div>
    </nav>
  )
}

function Home() {
  return (
    <div>
     <h2>This is our Home</h2>
   </div>
  );
}



function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/search')
  };

  return (
    <div>
        <h2>Your search term: {searchParams.get('st')}</h2>
        <form>
          <label>
            Search:&nbsp;
            <input name="st" type="text" />&nbsp;
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
  );
}

export default App;
