// import React from 'react';
// import axios from 'axios';

// const fethArticlesWithQuery = (searchQuery, page = 0) => {
//     return axios
//         .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}`)
//         .then(response => response.data.hits)

//         }
//         export default {
//             fethArticlesWithQuery,
//         }

  //-------------------------------------------------      
//         import axios from 'axios';

// const baseUrl = 'https://pixabay.com/api/?q=';
// const keyApi = "16592129-67c5d546392e0470201b3bb2a";

// const fethArticlesWithQuery = (searchQuery, page = 1) => {

//     const requestParams = `&page=${page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`;

//         return axios.get(baseUrl + searchQuery + requestParams).then(response => response.data.hits)

//         }
//         export default {
//             fethArticlesWithQuery,
//         }

        // return axios
        // .get(baseUrl + searchQuery + requestParams)
        // .then(response => console.log(response.data.hits))
        // .catch(error => this.setState({error}))
        // .finally(() => this.setState({loading: false }));

//------------------------------------------------

import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/?q=';
const ApiKey = '15216450-d096caa7dd5d740f777344039';

export default {
    page: 1,

    fethArticlesWithQuery(query) {
        const queryParams = `&page=${this.page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`

        return axios.get(baseUrl + query + queryParams)
            .then(({ data }) => {
                this.incrementPage()
                // console.log(data.hits);
                return data.hits
            })
    },
    incrementPage() {
        this.page += 1;
    },
    resetPage() {
        this.page = 1;
    }
}


