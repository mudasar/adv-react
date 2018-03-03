import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App.jsx';
import axios from 'axios';
import DataApi from '../DataApi';
import config from '../config';

const  serverRender = async () => {

    let initialData = {
        articles: {},
        authors: {},
      };

    try{
        const resp = await axios.get(`http://${config.host}:${config.port}/data`);
    
        const api = new DataApi(resp.data);
        initialData.articles = api.getArticles();
          initialData.authors = api.getAuthors();
          
    }
    catch(error){
        console.error(error);
    }

    return {initialMarkup:  ReactDOMServer.renderToString(<App initialData={initialData} />), initialData: initialData};
}

export default serverRender;