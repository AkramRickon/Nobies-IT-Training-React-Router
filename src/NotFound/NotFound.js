import React from 'react';
import './NotFound.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'
import './NotFound.css';

const arrowIcon = <FontAwesomeIcon className="fas fa-long-arrow-alt-left fa-lg" icon={faLongArrowAltLeft}/>

const NotFound = () => {

    const history=useHistory();
    const handleReturn=()=>
    {
        history.push('/home');
    }
    return (
        <div className="page-container margin">
            <div className="text-center mb-5">
                    <h1><span className="text-danger">404</span> Page Not Found</h1>
            </div>
            <div className="text-center mt-3">
                
                <Button onClick={handleReturn} className="btn btn-danger rounded">{arrowIcon} Back to Home</Button>

            </div>
        </div>
    );
};

export default NotFound;