import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Store from 'src/components/Store/Store.js';
import Details from 'src/components/Details/Details.js';
import Checkout from 'src/components/Checkout/Checkout.js';

export default(
    <Switch>
        <Route exact path='/' component={Store} />
        <Route path='/details/:id' compnent={Details} />
        <Route path='/checkout' component={Checkout} />
    </Switch>
);