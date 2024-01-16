import styled from 'styled-components'

const ListItemContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10rem;

`

const List = styled.div`
display: flex;
justify-content: end;
align-items: center;
width: 80%;
height: 2rem;
font-size: 2rem;
padding: 3rem 3rem;
color: #072541;
margin-top: 1rem;
border-radius: 10rem;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
position: relative;
border: 8px solid #072541;
 &:hover {
    background-color: lightgray ;
 }
`

const DeleteListItem = styled.div`
position: absolute;
top: -2rem;
right: -1rem;
z-index: 99;
`

const IconDeleteListItem = styled.svg`
width: 3rem;
height: auto;
padding: 0px;
&:hover {
    transform: scale(1.2); 
  }
`

const EditListItem = styled.svg`
width: 4rem;
margin-left: 1rem;
background-color: #072541;
padding: .5rem;
border-radius: 1rem;
height: auto;
 &:hover {
    transform: scale(1.2); 
  }
`;

const CompleteListItem = styled.svg`
width: 4rem;
height: auto;
background-color: #072541;
padding: .5rem;
border-radius: 1rem;
 &:hover {
    transform: scale(1.2); 
  }
  `

const ItemDescription = styled.div`
display: flex;
align-items: center;
gap: 1rem;

`;


export { ItemDescription, IconDeleteListItem, ListItemContainer, List, DeleteListItem, EditListItem, CompleteListItem }