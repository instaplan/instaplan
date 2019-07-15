import React, {Component} from "react"
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"
 
const MY_API_KEY = "AIzaSyCGPX51O0IgwslhB7sVp6Y9Wh26Ts2Z9KU" // fake
 
export default class GoogleSuggest extends Component {
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
         fileUrl: 'https://via.placeholder.com/100x100.png?text=EVENT+PHOTO'
      };
      this.handleFormDataChange = this.handleFormDataChange.bind(this);
      this.userImgHandler = this.userImgHandler.bind(this);
   }
    userImgHandler(file) {
        this.setState({
           fileName: file,
           fileUrl: URL.createObjectURL(file)
        });
     }
 
    handleLocationChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
    }

    handleFormDataChange(e) {
       const {name, value} = e.target;
       this.setState({ [name]: value })
    }
 
    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
        this.setState({search: "", value: geocodedPrediction.formatted_address})
    }
    
    handleNoResult = () => {
        console.log('No results for ', this.state.search)
    }
 
    handleStatusUpdate = (status) => {
        console.log(status)
    }
 
    render() {
        const {search, value} = this.state

        return (
            <div>
               {/* IMAGE */}
               <img src={this.state.fileUrl} alt='Event' />
               <span>
                  <input
                     type='file'
                     id='selectedFile'
                     style={{display: 'none'}}
                     onChange={e => this.userImgHandler(e.target.files[0])}
                  />
                  <button onClick={() => document.getElementById('selectedFile').click()}>Choose</button>
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
            <option value='' disabled selected>category</option>
            <option value='food'>Food</option>
            <option value='music'>Music</option>
            <option value=''>More categories to populate from db</option>
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
            <button>Submit</button>
            <button>Cancel</button>
         </div>
      </div>



        )
    }
}


