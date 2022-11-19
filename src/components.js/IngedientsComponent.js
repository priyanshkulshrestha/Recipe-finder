import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { RecipeName } from './RecipeCardComponent';
import styled from 'styled-components'

// import DialogActions from '@mui/material/DialogActions';

const SeeMoreText = styled.span`
  color: #eb3300;
  font-size: 18px;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
`;


const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;


const openFalse = (open) => {
  open = false;
  console.log(open, 1)
}

const IngedientsComponent = (props) => {
  const index = 1;
  const ingredients = props.ingredients;
  const lable = props.name;
  const url = props.link;
  const open = props.open;
  const [status, setStatus] = useState(open) 
  console.log( open)
  return (

        <Dialog key={index} open = {status}>
            <DialogTitle>Ingredients</DialogTitle>
            <DialogContent>
          <RecipeName key={index}>{lable}</RecipeName>
          <table>
            <thead>
              <th>Ingredient</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <SeeNewTab key={index} onClick={() => window.open(url)}>See More</SeeNewTab>
          <SeeMoreText onClick = {setStatus("")}>Close</SeeMoreText>
        </DialogActions>
        </Dialog>
  )
}

export default IngedientsComponent