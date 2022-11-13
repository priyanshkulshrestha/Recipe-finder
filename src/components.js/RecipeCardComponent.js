import React from 'react'
import styled from 'styled-components'


const RecipeCard = styled.div`
    display: flex;
    ${'' /* height: 250px; */}
    width: 300px;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 3px 10px 0 #aaa;

`

const RecipeImg = styled.img`
    object-fit: cover;
    height: 200px;
`

const RecipeName = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: black;
    margin: 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const RecipeIngredients = styled.div`
    color: green;
    border: solid 1px green;
    margin-bottom: 12px;
    border-radius: 3px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
    text-align: center;
`

const RecipeComplete = styled.div`
    color: #eb3300;
    font-size: 18px;
    text-align: center;
    border: solid 1px #eb3300;
    border-radius: 3px;
    padding: 10px 15px;
    cursor: pointer;
`



const RecipeCardComponent = (props) => {
    console.log(props)
    const { label, image, ingredients, url } = props.recipeObject;
    // const index = props.key;
  return (
    <RecipeCard key={props.key}>
        {/* {console.log("index", index)} */}
        <RecipeImg src={image} />
        <RecipeName>{label}</RecipeName>
        <RecipeIngredients>Ingredients</RecipeIngredients>
        <RecipeComplete>See Complete Recipe</RecipeComplete>
    </RecipeCard>
  )
}

export default RecipeCardComponent