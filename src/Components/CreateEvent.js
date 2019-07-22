import React, { Component } from "react"
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"
import { API_KEY } from "../config/config"
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import firebase from 'firebase'
import {updateUserId} from '../ducks/userReducer';

const MY_API_KEY = API_KEY // fake

class GoogleSuggest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            value: "",
            title: '',
            date: '',
            category: '',
            description: '',
            fileName: '',
            fileUrl: 'https://via.placeholder.com/100x100.png?text=EVENT+PHOTO',
            userid: ''
        };
        this.handleFormDataChange = this.handleFormDataChange.bind(this);
        this.userImgHandler = this.userImgHandler.bind(this);
        this.handleAddEvent = this.handleAddEvent.bind(this);
        this.handleAddImage = this.handleAddImage.bind(this);
    }

    componentDidMount( ) {this.setState({userid: firebase.auth().currentUser.uid})
        
    
    }
    componentDidUpdate(prevState){
        if (prevState.userid !== this.state.userid) this.props.updateUserId(this.state.userid)
    }
    userImgHandler(file) {
        this.setState({
            fileName: file,
            fileUrl: URL.createObjectURL(file)
        });
    }

    handleLocationChange = e => {
        this.setState({ search: e.target.value, value: e.target.value })
    }

    handleFormDataChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
        this.setState({ search: "", value: geocodedPrediction.formatted_address })
        console.log(this.state.value)
    }

    handleNoResult = () => {
        console.log('No results for ', this.state.search)
    }

    handleStatusUpdate = (status) => {
        console.log(status)
    }
    handleAddImage(e) {
        e.preventDefault();


        const data = new FormData();
        data.append('image', this.state.fileName, this.state.fileName.name);

        axios
            .post('/api/events/image', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
            .then(res => {
                const {img_aws_key, img_aws_url} = res.data;
                this.handleAddEvent(img_aws_key, img_aws_url)
            })
    }
    handleAddEvent(img_aws_key, img_aws_url) {
        const newValues = {
            awskey: img_aws_key,
            awsurl: img_aws_url,
            title: this.state.title,
            date: this.state.date,
            category: this.state.category,
            description: this.state.description,
            value: this.state.value,
            userid: this.state.userid

        }
        
        axios
            .post('/api/events', newValues)
            .then(() => {
                alert('submitted')
                this.props.history.push('/events');
            })
    }

    render() {

        console.log(this.state.userid)
        const { search, value } = this.state

        return (
            <form className='create-form' action="">
                <div className='create-inputs'>
                    {/* IMAGE */}
                    <img src={this.state.fileUrl} alt='Event' />
                    <span>
                        <input
                            type='file'
                            id='selectedFile'
                            style={{ display: 'none' }}
                            onChange={e => this.userImgHandler(e.target.files[0])}
                        />
                        <button onClick={e => {
                            e.preventDefault();
                            document.getElementById('selectedFile').click()}
                        }>Choose</button>
                    </span>
                    {/* TITLE */}
                    <input
                        placeholder='title'
                        type='text'
                        value={this.state.title}
                        name='title'
                        onChange={this.handleFormDataChange}
                    />
                    {/* DATE */}
                    <input
                        type='date'
                        value={this.state.date}
                        name='date'
                        onChange={this.handleFormDataChange}
                    />

                    {/* // BEGIN GOOGLE ADDRESS INPUT */}
                    <GoogleMapLoader
                        params={{
                            key: MY_API_KEY,
                            libraries: "places,geocode",
                        }}
                        render={googleMaps =>
                            googleMaps && (
                                <GooglePlacesSuggest
                                    googleMaps={googleMaps}
                                    autocompletionRequest={{
                                        input: search,
                                        // Optional options
                                        // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                                    }}
                                    // Optional props
                                    onNoResult={this.handleNoResult}
                                    onSelectSuggest={this.handleSelectSuggest}
                                    onStatusUpdate={this.handleStatusUpdate}
                                    textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                                    customRender={prediction => (
                                        <div className="customWrapper">
                                            {prediction
                                                ? prediction.description
                                                : "My custom no results text"}
                                        </div>
                                    )}
                                >
                                    <input
                                        type="text"
                                        value={value}
                                        placeholder="Search a location"
                                        onChange={this.handleLocationChange}
                                    />
                                </GooglePlacesSuggest>
                            )
                        }
                    />
                    {/* // END GOOGLE ADDRESS INPUT */}

                    {/* CATEGORY */}
                    <select
                        value={this.state.category}
                        name='category'
                        onChange={this.handleFormDataChange}
                    >
                        <option value='' disabled selected>category:</option>
                        <option value='auto'>Auto, Boat, and Air</option>
                        <option value='business'>Business</option>
                        <option value='charity'>Charity and Causes</option>
                        <option value='family'>Family and Education</option>
                        <option value='fashion'>Fashion</option>
                        <option value='media'>Film and Media</option>
                        <option value='food'>Food and Drink</option>
                        <option value='government'>Government</option>
                        <option value='health'>Health</option>
                        <option value='hobbies'>Hobbies</option>
                        <option value='holiday'>Holiday</option>
                        <option value='lifestyle'>Home and Lifestyle</option>
                        <option value='music'>Music</option>
                        <option value='other'>Other</option>
                        <option value='performing'>Performing and Visual Arts</option>
                        <option value='school'>School Activities</option>
                        <option value='tech'>Science and Tech</option>
                        <option value='spirituality'>Spirituality</option>
                        <option value='sports'>Sports and Fitness</option>
                        <option value='outdoor'>Travel and Outdoor</option>
                     </select>

                    {/* DESCRIPTION */}
                    <textarea
                        placeholder='event description'
                        value={this.state.description}
                        name='description'
                        onChange={this.handleFormDataChange}
                    />

                    {/* FORM BUTTONS */}
                    <div>
                        <button onClick={this.handleAddImage} >Submit</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </form>





        )
    }
}

export default withRouter(connect(null,
    {
        updateUserId
    }
)(GoogleSuggest))

