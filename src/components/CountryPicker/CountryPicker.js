import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api';

 function CountryPicker(props) {
   const {handleCountryChange} = props;  
   const [fetchedCountries,setFetchedCountries] = useState([]);

    useEffect(() => {
     const fetchAPI = async () =>{
       setFetchedCountries(await fetchCountries());
     }
     fetchAPI();
    },[]);
    


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries&&fetchedCountries.map((country,i)=>
                <option key={i} value={country}>{country}</option>
                )}
            </NativeSelect>   
        </FormControl>
    )
}

export default CountryPicker;