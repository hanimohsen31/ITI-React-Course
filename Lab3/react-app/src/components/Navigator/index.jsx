import React from 'react'
import '../../pages/ContactUs'
import { ContactUs } from '../../pages/ContactUs'
import { useHistory } from 'react-router-dom';

const Hello = () => {
  const history = useHistory();
  const handleClick = () => history.push('/goodbye');
  return (
      <ContactUs onClick={handleClick}/>
  );
};

export default Hello;