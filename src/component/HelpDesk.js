import React from 'react'
import '../css/HelpDesk.css'
import Feed from './Feed';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
function HelpDesk() {
    return (
     <div className = "helpdesk">
       <Navbar />
       <div className = "helpdesk__content">
        <Sidebar />
        <Feed />
       </div>
     </div>
  );
}

export default HelpDesk;
