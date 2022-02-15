// import React from 'react';

// const FavoriteThings = () => (
//     <div>
//         <h2>Favorite Things</h2>
//     </div>
// );

// export default FavoriteThings;

import React from 'react';
import Things from './Things';
import { Route, Link } from 'react-router-dom';

const FavoriteThings = ({ match }) => (
    <div>
        <h2>Favorite Things</h2>
        <ul>
            <li>
                <Link to={`${match.url}/Tesla`}>Favorite Car</Link>
            </li>
            <li>
                <Link to={`${match.url}/Noodles`}>Favorite Food</Link>
            </li>
            <li>
                <Link to={`${match.url}/ Life is beautiful`}>Favorite Movie</Link>
            </li>
        </ul>
        <Route path={`${match.url}/:thingsId`} component={Things} />
        <Route exact path={match.url} render={() => <h3>Please select a favorite thing to display it</h3>} />
    </div>
);

export default FavoriteThings;