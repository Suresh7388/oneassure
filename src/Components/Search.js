import React from 'react';
import Recipiecard from './RecipieCard';
export default function Searchapi() {
    const [query, setQuery] = React.useState("");
    const [recipies, setRecipies] = React.useState([]);
    const [health, setHealth] = React.useState("alcohol-free");
    var url = `https://api.edamam.com/search?q=${query}&app_id=476a536d&app_key=a3948ac7ddc737a85e078deb9483a12a&health=${health}`;
    React.useEffect(() => {
        getRecipies();
    }, []);
    async function getRecipies() {
        var result = await fetch(url);
        result.json().then((data) => {
            setRecipies(data.hits);
        });
    }
    let healthLabel = ['alcohol-free', 'alcohol-cocktail', 'egg-free', 'fish-free', 'kidney-friendly', 'low-potassium', 'low-sugar', 'No-oil-added', 'red-meat-free'];
    return <div className='recipie'>
        <h1>Recipes EasyMeals</h1>
        <form className='search-form' onSubmit={(event) => event.preventDefault()}>
            <input className='search-input' type='text' placeholder='search .....' value={query} onChange={(event) => setQuery(event.target.value)} />
            <input className='search-button' onClick={() => getRecipies()} type="button" value="Search"></input>
            <select className='recipie-filter'>
                {healthLabel.map(el => {
                    return <option onClick={(event) => {
                        getRecipies();
                        return setHealth(event.target.value);
                    }} value={el}>{el.toUpperCase()}</option>;
                })};
            </select>
        </form>
        <div className='map-recipies'>
            {recipies.map((el) => {
                return <p><Recipiecard recipies={el} /></p>
            })}
        </div>
    </div>
}