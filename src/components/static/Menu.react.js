import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import PageNotFound from '../error/PageNotFound.react';
import DeliveryPayment from '../delivery/DeliveryPayment.react';
import Contacts from '../contacts/Contacts.react';
import Home from '../home/Home.react';

const Menu = () => {
    return (
        <div>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/delivery-payment">Delivery & Payment</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            </ul>
            
            <hr/>
            <Switch>
                <Route exact  path="/" component = {Home}/>
                <Route path="/delivery-payment" component = {DeliveryPayment}/>
                <Route path="/contacts" component = {Contacts}/>
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default Menu;