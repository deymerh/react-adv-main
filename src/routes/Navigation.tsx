import { BrowserRouter, Routes,Route,NavLink, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload-module/pages';
import { ShoppingPage } from "../component-patterns/pages/ShoppingPage";
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/shopping"
                className={({isActive}:any)=>isActive? 'nav-active': ''}
                >
                  Shopping page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy1"
                className={({isActive}:any)=>isActive? 'nav-active': ''}
                >
                  Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({isActive}:any)=>isActive? 'nav-active': ''}
                >
                  Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({isActive}:any)=>isActive? 'nav-active': ''}
                >
                  Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/shopping' element={ <ShoppingPage /> } />
          <Route path='/lazy1' element={ <LazyPage1 /> } />
          <Route path='/lazy2' element={ <LazyPage2 /> } />
          <Route path='/lazy3' element={ <LazyPage3 /> } />
          <Route path='/*' element={<Navigate to="/shopping" replace />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}