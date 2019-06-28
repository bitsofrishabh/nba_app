import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_item';

const SideNavigation = (props) => 
    (
        <div>
        <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
            backgroundColor: '#242424',
            maxWidth: '180px'
        }}>
                <SideNavItems/>
        </SideNav>
           
        </div>
    )


export default SideNavigation;