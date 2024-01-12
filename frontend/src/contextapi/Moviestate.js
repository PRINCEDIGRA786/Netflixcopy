import React, { useState, useEffect } from 'react'

import Moviecon from './Moviecontext';
import axios from 'axios';
// import response from '../data.json'

export default function Moviestate(props) {
    const[response,setresponse]=useState([]);

    const fetchfunction = async () => {
        const options = {
            method: 'GET',
            url: 'https://imdb-top-100-movies.p.rapidapi.com/series',
            headers: {
                'X-RapidAPI-Key': '3e7305e481msh16d5298bb37f8e5p1e53cdjsn661d86249e66',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        }

        try {
            const obj = await axios.request(options);
            // console.log(obj.data)

            setresponse(obj.data.slice(0, 10))


            //  console.log(response);
            //   var arr1=[];
            //   response.forEach((element)=>{
            //       if(element.genre in arr1){
            //       }
            //       else{
            //         arr1.push(element.genre)
            //       }
            //   })
            // console.log(arr1)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchfunction();
    }, []);

    const host = "https://netflixcopy-eight.vercel.app"

    const initiallist = []//for the intial lsit fetch
    const [list, setlist] = useState(initiallist);
    const getList = async () => {
        const response = await fetch(`${host}/api/list/fetchalllist`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });

        var json = await response.json();
        // console.log(json)
        setlist(json)
    }

    // Add a list:
    const addList = async (title, description, image) => {
        const response = await fetch(`${host}/api/list/addlist`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, image })
        });

        const json = response.json();
        console.log(json)


        const listtoadd = {
            "_id": "6586c915802a792f21889490",
            "user": "6586922840a1653f03234482",
            "title": title,
            "description": description,
            "image": image,
            "date": "1703332117130",
            "__v": 0
        };
        setlist(list.concat(listtoadd))
    }

    // Del a list:
    const delList = async (id) => {
        const response = await fetch(`${host}/api/list/deletelist/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const newlist = list.filter((list) => { return list._id !== id })
        setlist(newlist)

    }

    return (
        <>

            <Moviecon.Provider value={{ getList, list, setlist, response, addList, delList }}>
                {props.children}
            </Moviecon.Provider>

        </>
    )
}
