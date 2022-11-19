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

const Box = styled.div`
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Placeholder = styled.img`
    display: flex;
    align-self: center;
    justify-self: center;
    opacity: 50%;
`

const Text = styled.div`
    font-size: larger;
    font-weight: bold;

`

const RecipeComponents = (props) => {
    const recipeList = props.list;
  return (
    <RecipeList>
        {
            recipeList.length ? recipeList.map((recipeObject, index) => {
            return <RecipeCardComponent key={index} recipeObject={recipeObject.recipe} />
            }
        ): <Box><Placeholder src = "/Recipe-finder/iicon.png" /><Text>Find Something To Cook!</Text></Box>}
       

    </RecipeList>
    )
}

export default RecipeComponents