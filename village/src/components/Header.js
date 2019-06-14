import React from "react";
import styled from "styled-components";

const HomeTitle = styled.header`
  text-align: center;
  font-size: 2rem;
  color: light-grey;
  font-weight: bold;
`;



const Header = () => {
  return (
    <div>
      <HomeTitle>Greetings from the Smurf Village!</HomeTitle>
    </div>
    
    
  );
};

export default Header;