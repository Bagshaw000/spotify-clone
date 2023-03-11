import Login from "./Login";
import './App.css';
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

  const [{user,token}, dispatch] = useDataLayerValue();

  // const [token, setToken]= useState(null);
  useEffect(()=>{
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      // setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then(user =>{
        console.log(user);

        dispatch({
          type: "SET_USER",
          user: user
        })
      })
    }

  },[]);
  console.log(user)
  console.log(token)
  return (
    <div className="App">
      {
        token ? <Player spotify={spotify}/>:<Login />
      }
      
    </div>
  );
}

export default App;
