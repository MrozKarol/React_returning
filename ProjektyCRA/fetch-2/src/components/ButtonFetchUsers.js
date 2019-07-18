import React from 'react';
import Button from 'react-bootstrap/Button';




const ButtonFetchUsers = (props) => {
    return (
       <div>
        <Button bsStyle="primary"onClick={props.click}>Dodaj 5 uzytkowników</Button>
      </div>
    );
}

export default ButtonFetchUsers;