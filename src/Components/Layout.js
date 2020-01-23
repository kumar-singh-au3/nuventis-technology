import React from 'react';
import { withRouter} from 'react-router-dom';
import {Link} from "react-router-dom";

function Layout({title,children}) {
    return (
        <div>
        <header>
           <Link to="/"><i className="fa fa-home" style={{fontSize:"54px", color:'black', marginRight: "30px"}}></i></Link>
            <h2 className="header">{title}</h2>
        </header>
        {children}
        </div>
    )
}

export default withRouter(Layout);
