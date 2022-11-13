import React from 'react'
import styled from 'styled-components'
import RecipeCardComponent from './RecipeCardComponent'


const RecipeList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
    gap: 20px;

`


const RecipeComponents = (props) => {
    const recipeList = props.list;
  return (
    <RecipeList>
        {
            recipeList.length && recipeList.map((recipeObject, index) => {
            return <RecipeCardComponent key={index} recipeObject={recipeObject.recipe} />
            }
        )}
       

    </RecipeList>
    )
}

export default RecipeComponents