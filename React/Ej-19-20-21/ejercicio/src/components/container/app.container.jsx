import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { getJoke } from '../../services/axiosService';
import './app.container.css';
import Voting from '../pure/voting';
import Generator from '../pure/generator';


const AppContainer = () => {

    const [joke, setJoke] = useState(null);

    useEffect(() => {
        obtainJoke();
    }, []);

    function obtainJoke() {
        getJoke()
            .then((response) => {
                setJoke(response.data.value);
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <div className='app-container'>
            <div className="text-screen">
                <p>
                    {joke}
                </p>
            </div>
            <div className="interactive-container">
                <row className="voting-row">
                    <Voting></Voting>
                </row>
                <row>
                    <Generator></Generator>
                </row>
            </div>
        </div>
    );
};


AppContainer.propTypes = {

};


export default AppContainer;
