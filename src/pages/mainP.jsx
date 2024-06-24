import React from 'react'
import ReactDOM from 'react-dom/client'
import ModEstNev from './est_nuevos'
import Menu from './menu'
import Menu_main from "./main_menu"
import DC from "./dreadcums"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div><Menu_main/>
    
    <div><Menu/></div>
    </div>
    <DC/>
    {/*<ModEstNev />
    */}
    
  </React.StrictMode>,
)