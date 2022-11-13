import React, {useState} from 'react';
import Axios from 'axios';
import styled from 'styled-components'
import RecipeComponents from './RecipeComponents';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: black;
    color: white;
    padding: 10px 20px;
    font-size: larger;
    font-weight: bold;
    box-shadow: 0 3px 6px 0 #555;
`;

const AppName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Appicon = styled.img`
    height: 50px;
    margin: 0 10px;

`
const SearchBar = styled.div`
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    padding: 10px 10px;
    border-radius: 6px;
    margin-left: 20px;
    width: 50%;
    background-color: white;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const SearchBox = styled.input`
    color: black;
    font-size: 16px;
    font-weight: bold;
    border: none;
    margin-left: 15px;
    min-width: 10px;
    outline: none;
`;

const HeaderComponent = () => {
    const [timeOutId, setTimeOutId] = useState();
    // const [searchQuery, setSearchQuery] = useState("");
    const [recipeList, setRecipeList] = useState([]);

    const APP_ID = "89d09db3";
    const APP_KEY = "0dea32033846ce7d1b4b16aef610004a";

    const fetchData = async (searchString) => {
        const response = await Axios.get(
          `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
        );
        setRecipeList(response.data.hits);
        console.log(response)
    };

    const onTextChange = (event) => {
        clearTimeout(timeOutId);
        const timeout = setTimeout(() => fetchData(event.target.value), 1000);
        setTimeOutId(timeout);
        // console.log("hello")
    }
    


  return (
    <>
        <Header>
        <AppName>
            <Appicon src="/iicon.png" />
            Recipes Finder
        </AppName>
        <SearchBar>
            <SearchIcon src="/search.png" />
            <SearchBox placeholder='Search Recipes' onChange={onTextChange}/>
        </SearchBar>
        </Header>
      <RecipeComponents list = {recipeList}></RecipeComponents>

    </>
  )
}

export default HeaderComponent