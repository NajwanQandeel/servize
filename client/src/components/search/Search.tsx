import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../actions/Users/usersActions';
import ProviderContainer from "../Provider-container/Provider-container";
import './Search.css';
const axios = require('axios');
const $ = require('jquery');

const Search = () => {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");
    const [results, setResults] = useState([
        {
            name: "Nablus",
            serviceProviders: [{
                name: "adam",
                phone: "1254782",
                picture: "https://api.fixawy.net/storage/images/categories/cat_1.svg",
                catname: "Electrician"
            }]
        }]);

    const handleClick = async () => {
            await axios.get(`http://localhost:8000/location/city/`,      //url for sending the request ?
                {
                    city: city,
                    // category: category
                })

                .then((result: any) => {
                    console.log("axios", result.data)
                    // dispatch(store(result.data))  store the values in the redux store
                    setResults(result.data)
                    // redirect to the provider page  path= '/provider'

                })
                .catch((err: any) => {
                    console.error("err===== =>", err);
                })
        // }
        console.log("========", results)
        // const handleChange = () => {

        }
        console.log(category)

        return (

            <div>
                <input type="text" placeholder="search.."></input>

                <div className="cat dropdown">
                    {/* <button className="dropbtn" onClick={()=>{setCat(!cat)}}>Category</button> */}
                    <select className="dropdown-cat" onChange={(e) => { setCategory(e.target.value) }}>
                        <option>Electrician</option>
                        <option>Plumber</option>
                        <option>Carpenter</option>
                    </select>
                </div>

                <div className="city dropdown">
                    {/* <button className="dropbtn" onClick={()=>{setCity(!city)}}>City</button> */}
                    <select className="dropdown-city" onChange={(e) => { setCity(e.target.value) }}>
                        <option>Ramallah</option>
                        <option>Nablus</option>
                        <option>Hebron</option>
                        <option>Jenin</option>
                        <option>Tulkarem</option>
                        <option>Jericho</option>


                    </select>
                </div>
                <button onClick={handleClick}>Submit</button>
                {/* <ProviderContainer results={results} city={city} category={category} /> */}
            </div>
        )
    }

    export default Search;