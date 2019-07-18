import React from 'react';
import Button from 'react-bootstrap/Button';




const ButtonFetchUsers = (props) => {
    return (
       <div>
        <Button size="lg" variant="info" onClick={props.click}>Dodaj użytkownika</Button>
      </div>
    );
}

export default ButtonFetchUsers;