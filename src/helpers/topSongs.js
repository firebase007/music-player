import axios from 'axios';
// import { API_BASE_URI, API_KEY } from "./apiBase";


const getTopSongs = () => {

    return axios
      .get(
        "https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&country=US&apikey=ee423f7ba4c3bf7cd399c3d178a9e874"
      )
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(function(error) {
        console.log(error);
      });
}

export default getTopSongs;