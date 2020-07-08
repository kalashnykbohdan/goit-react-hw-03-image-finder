import React, {Component} from 'react';

import Sections from './Sections';

import Loader from 'react-loader-spinner';

import Notification from './Notification'
import ImageGallery from './ImageGallery'
import Searchbar from './Searchbar';
import Button from './Button';
import Modal from './Modal';

import articlesApi from '../services/articlesApi';
import './App.css';



export default class App extends Component{
  state = {
    images: [],
    loading: false,
    showModal: false,
    largeImageURL: '',
    error: null,
    searchQuery:'',
    page: 1
    
  };

  componentDidMount() {
    window.addEventListener('click', this.openModalImage);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.openModalImage);
}

  componentDidUpdate(prevProps, prevState){
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if(prevQuery !== nextQuery){
      this.fethArticles();
    }
  }

  fethArticles = () => {
    const {searchQuery, page} = this.state;

    this.setState({loading: true});

    articlesApi
      .fethArticlesWithQuery(searchQuery, page)
      .then(images => {this.setState(prevState => ({images: [...prevState.images, ...images], page: prevState.page + 1}))
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
  })
      .catch(error => this.setState({error}))
      .finally(() => this.setState({loading: false }));
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
  }  

  handleSearchFormSubmit = query => {
    this.setState({searchQuery: query, page: 1, images: []});
  }


  toggleModal = () =>{
    this.setState(state => ({ showModal: !state.showModal}));
  }

  openModalImage = (e) => {
      if (this.state.showModal === true) {
        this.toggleModal();
      }else{
      if (e.target.nodeName === "IMG") {
        this.setState({ showModal: true })

        const imagelarge = e.target.getAttribute('data-sourse');
        this.setState({ largeImageURL: imagelarge })
      }
    }
  }


  render() {
    const {images, loading, error, showModal, largeImageURL} = this.state;
    return (
      <>
        <Sections>
          <Searchbar onSubmit={this.handleSearchFormSubmit}/>
          {error && <Notification message={error.message}/>}
          {loading && <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />}
          {images.length > 0 && <ImageGallery items={images}/>}
          {images.length > 0 && !loading && <Button onLoadMore={this.fethArticles}/>}

          {showModal && <Modal onClose={this.toggleModal}>
            {<img src={largeImageURL} alt="img" />}
          </Modal>}


        </Sections>
      </>
    )
  };
}


