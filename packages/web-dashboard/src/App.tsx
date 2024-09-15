import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// TODO: Module Architecture

function App() {
    const [displayMode, setDisplayMode] = useState('Loading....');

    console.log(displayMode);

    useEffect(() => {
        async function fetchDisplayMode() {
            const res = await axios.get(
                'http://192.168.0.240:6969/display/mode'
            );

            if (!ignore && res.data.displayMode === 2)
                setDisplayMode('"Couch"');
            else if (!ignore && res.data.displayMode === 1)
                setDisplayMode('"Office"');
        }

        let ignore = false;
        fetchDisplayMode();
        return () => {
            ignore = true;
        };
    }, []);

    const toggleDisplayMode = async () => {
        const res = await axios.post('http://192.168.0.240:6969/display/mode');

        //console.log(JSON.stringify(res.data, null, 2));
        if (res.data.displayMode === 2) setDisplayMode('"Couch"');
        else if (res.data.displayMode === 1) setDisplayMode('"Office"');
    };

    //TODO: Toggle Box "Start Steam when switching to Couch Mode"

    return (
        <Container className="align-items-center">
            <h1>Display Mode is Currently {displayMode}</h1>
            <Button onClick={toggleDisplayMode}>Toggle Display Mode</Button>
        </Container>
    );
}

export default App;
