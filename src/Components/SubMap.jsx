import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

 const SubMap = () =>{

    return(
        <div>
            <GoogleMap 
                defaultZoom={10}
                defaultCenter={{
                    lat:42.3601,
                    lng:-71.0589
                }}
                googleMapUrl={
                    `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`
                }
                loadingElement={<div style={{height:'100%'}} />}
                containerElement={<div style={{height:'100%'}} />}
                mapElement={<div style={{height:'100%'}} />}
            />
        </div>
    )
}
 
export const WithMapper = withScriptjs(withGoogleMap(SubMap));