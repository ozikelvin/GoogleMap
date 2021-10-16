import React, { useState} from 'react';
import GoogleMapReact from 'google-map-react';
//import {locations} from './options';
import RoomIcon from '@mui/icons-material/Room';


const AnyReactComponent = ({showlo, tooltip, showOpt}) => <div >
    <RoomIcon onClick={showlo} style={{fontSize:'45px', color:'#FF0909'}} />

        {
           showOpt ? (
            <div  id='tooltip' >
            {tooltip}
            </div>
           ):(
               <span></span>
           )
        }

</div>;



function SimpleMap () {
  const pros = {
    center: {
      lat: 6.552,
      lng: 3.3291
    },
    zoom: 11
  };


  const [locations , setLocations] = useState( [
    {
    "type": "Feature",
    "properties": {
      "PARK_ID": 960,
      "FACILITYID": 100264,
      "NAME": "Dapo Aremu",
      "NAME_FR": "Pastor",
      "ADDRESS": "2, Titilayo Str,Balogun,off Niyi Ogunbameru str, Ajao Estate",
      "ADDRESS_FR": "The shepherd’s Place",
      "FACILITY_T": "flat",
      "FACILITY_1": "plat",
      "ACCESSCTRL": "no/non",
      "ACCESSIBLE": "no/non",
      "OPEN": null,
      "NOTES": "Outdoor",
      "MODIFIED_D": "2018/01/18",
      "CREATED_DA": null,
      "FACILITY": "Neighbourhood : smaller size facility to service population of 10,000 or less",
      "FACILITY_F": "De voisinage : petite installation assurant des services à 10 000 résidents ou moins.",
      "DESCRIPTIO": "Flat asphalt surface, 5 components",
      "DESCRIPT_1": "Surface d'asphalte plane, 5 modules",
      "PICTURE_LI": null,
      "PICTURE_DE": false,
      "PICTURE__1": null
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ 3.3540190699193313, 6.519230757422874]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "PARK_ID": 1219,
      "FACILITYID": 102312,
      "NAME": "Bob MacQuarrie Skateboard Park (SK8 Extreme Park)",
      "NAME_FR": "IGUNSABI SEYI",
      "ADDRESS": "Plot 13A, 112 Road, Festac Town, Lagos.",
      "ADDRESS_FR": "Vessel Of Honour",
      "FACILITY_T": "other",
      "FACILITY_1": "autre",
      "ACCESSCTRL": "no/non",
      "ACCESSIBLE": "no/non",
      "OPEN": null,
      "NOTES": "Outdoor",
      "MODIFIED_D": "2018/01/18",
      "CREATED_DA": null,
      "FACILITY": "Community: mid size facility to service population of 40,000 plus",
      "FACILITY_F": "Communautaire : installation de taille moyenne assurant des services à 40 000 résidents ou plus.",
      "DESCRIPTIO": "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer",
      "DESCRIPT_1": "Surface d'asphalte plane, 10 modules, programmes et camps de planche à roulettes en été géré par la Ville",
      "PICTURE_LI": null,
      "PICTURE_DE": false,
      "PICTURE__1": null
    },
    "geometry": {
      "type": "Point",
      "coordinates": [3.29289355498641,  6.471979911576086]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "PARK_ID": 1157,
      "FACILITYID": 100264,
      "NAME": "Gbenga Arogunmaya",
      "NAME_FR": "Planchodrome Walter-Baker",
      "ADDRESS": "127/129, Idimu Road, Ejigbo",
      "ADDRESS_FR": "House of grace",
      "FACILITY_T": "bowl",
      "FACILITY_1": "bol",
      "ACCESSCTRL": "no/non",
      "ACCESSIBLE": "no/non",
      "OPEN": null,
      "NOTES": "Outdoor",
      "MODIFIED_D": "2018/01/18",
      "CREATED_DA": null,
      "FACILITY": "Community : mid size facility to service population of 40,000 plus",
      "FACILITY_F": "Communautaire : installation de taille moyenne assurant des services à 40 000 résidents ou plus.",
      "DESCRIPTIO": "Concrete bowl, 7,000 sq ft",
      "DESCRIPT_1": "Bol de béton, 7 000 pi2",
      "PICTURE_LI": null,
      "PICTURE_DE": false,
      "PICTURE__1": null
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ 3.2921944989068717, 6.571714408008292]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "PARK_ID": 9,
      "FACILITYID": 102102,
      "NAME": "VICTOR PAUL EHIAGUINA",
      "NAME_FR": "VICTOR PAUL EHIAGUINA",
      "ADDRESS": "Magrellos Eatery, Amuwo/Festac link Road, Amuwo Odofin",
      "ADDRESS_FR": "Redemption House",
      "FACILITY_T": "other",
      "FACILITY_1": "autre",
      "ACCESSCTRL": "no/non",
      "ACCESSIBLE": "no/non",
      "OPEN": null,
      "NOTES": "Outdoor - Mobile",
      "MODIFIED_D": "2018/01/18",
      "CREATED_DA": null,
      "FACILITY": "Metcalfe Community Centre - Roving Skateboard Park Location",
      "FACILITY_F": "Centre communautaire de Metcalfe - Lieu de planchodrome itinérant",
      "DESCRIPTIO": "Flat surface, 5 components",
      "DESCRIPT_1": "Surface plane, 5 modules",
      "PICTURE_LI": null,
      "PICTURE_DE": false,
      "PICTURE__1": null
    },
    "geometry": {
      "type": "Point",
      "coordinates": [3.3105765825439635, 6.471318435010329]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "PARK_ID": 1160,
      "FACILITYID": 28007,
      "NAME": "EARNEST ABU ",
      "NAME_FR": "Lieu de planchodrome itinérant",
      "ADDRESS": "24, Ayoola Str, Oworonshoki",
      "ADDRESS_FR": "The Lord’s Ambassador",
      "FACILITY_T": "flat",
      "FACILITY_1": "plat",
      "ACCESSCTRL": "yes/oui",
      "ACCESSIBLE": "no/non",
      "OPEN": null,
      "NOTES": "Indoor - Summer",
      "MODIFIED_D": "2018/03/07",
      "CREATED_DA": null,
      "FACILITY": "Johnny Leroux Stittsville Community Arena - Roving Skateboard Park Location",
      "FACILITY_F": "Aréna communautaire de Stittsville Johnny-Leroux - Lieu de planchodrome itinérant",
      "DESCRIPTIO": "Flat surface, 5 components",
      "DESCRIPT_1": "Surface plane, 5 modules",
      "PICTURE_LI": null,
      "PICTURE_DE": false,
      "PICTURE__1": null
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ 3.4026586, 6.546858101796432]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "PARK_ID": 1693,
      "FACILITYID": 28016,
      "NAME": "Iyiola Oyinloye",
      "NAME_FR": "Planchodrome Legacy",
      "ADDRESS": "25, Anuoluwapo  Str off market street, Shomolu",
      "ADDRESS_FR": "Daystar",
      "FACILITY_T": "bowl",
      "FACILITY_1": "bol",
      "ACCESSCTRL": "no/non",
      "ACCESSIBLE": "no/non",
      "OPEN": null,
      "NOTES": "Outdoor",
      "MODIFIED_D": "2018/01/18",
      "CREATED_DA": null,
      "FACILITY": "District: larger facility to service population of 100,000 plus",
      "FACILITY_F": "De district : grande installation assurant des services à 100 000 résidents ou plus.",
      "DESCRIPTIO": "Large concrete bowl, many street and vertical components, 17,000 sq ft",
      "DESCRIPT_1": "Grand bol de béton, modules de rue et modules verticaux, 17 000 pi2",
      "PICTURE_LI": null,
      "PICTURE_DE": false,
      "PICTURE__1": null
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ 3.378518206351976, 6.5327238265740055]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "PARK_ID": 1717,
      "FACILITYID": 28018,
      "NAME": "Gbenga Odunowo",
      "NAME_FR": "Planchodrome de Greenboro",
      "ADDRESS": "Tantalizer’s Building, Shipeolu Str, Palm Groove",
      "ADDRESS_FR": "Discovery Centre",
      "FACILITY_T": "flat",
      "FACILITY_1": "plat",
      "ACCESSCTRL": "no/non",
      "ACCESSIBLE": "no/non",
      "OPEN": null,
      "NOTES": "Outdoor",
      "MODIFIED_D": "2018/01/18",
      "CREATED_DA": null,
      "FACILITY": "Neighbourhood : smaller size facility to service population of 10,000 or less",
      "FACILITY_F": "De voisinage : petite installation assurant des services à 10 000 résidents ou moins.",
      "DESCRIPTIO": "Flat asphalt surface, 5 components",
      "DESCRIPT_1": "Surface d'asphalte plane, 5 modules",
      "PICTURE_LI": null,
      "PICTURE_DE": false,
      "PICTURE__1": null
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ 3.391817506351976, 6.562910860917736]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "PARK_ID": 1907,
      "FACILITYID": 28097,
      "NAME": "Gbenga Odunowo",
      "NAME_FR": "Planchodrome de Greenboro",
      "ADDRESS": "1, Flourishing Cresent, Amuwo Odofin housing Estate Mile",
      "ADDRESS_FR": "Flourishing House",
      "FACILITY_T": "flat",
      "FACILITY_1": "plat",
      "ACCESSCTRL": "no/non",
      "ACCESSIBLE": "no/non",
      "OPEN": null,
      "NOTES": "Outdoor",
      "MODIFIED_D": "2018/01/18",
      "CREATED_DA": null,
      "FACILITY": "Neighbourhood : smaller size facility to service population of 10,000 or less",
      "FACILITY_F": "De voisinage : petite installation assurant des services à 10 000 résidents ou moins.",
      "DESCRIPTIO": "Flat asphalt surface, 5 components",
      "DESCRIPT_1": "Surface d'asphalte plane, 5 modules",
      "PICTURE_LI": null,
      "PICTURE_DE": false,
      "PICTURE__1": null
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ 3.316466986910815, 6.471009705696905]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "PARK_ID": 13907,
      "FACILITYID": 28007,
      "NAME": "Gbenga Odunowo",
      "NAME_FR": "Planchodrome de Greenboro",
      "ADDRESS": "35, Palm Avenue, Mushin",
      "ADDRESS_FR": "Flourishing House",
      "FACILITY_T": "flat",
      "FACILITY_1": "plat",
      "ACCESSCTRL": "no/non",
      "ACCESSIBLE": "no/non",
      "OPEN": null,
      "NOTES": "Outdoor",
      "MODIFIED_D": "2018/01/18",
      "CREATED_DA": null,
      "FACILITY": "Neighbourhood : smaller size facility to service population of 10,000 or less",
      "FACILITY_F": "De voisinage : petite installation assurant des services à 10 000 résidents ou moins.",
      "DESCRIPTIO": "Flat asphalt surface, 5 components",
      "DESCRIPT_1": "Surface d'asphalte plane, 5 modules",
      "PICTURE_LI": null,
      "PICTURE_DE": false,
      "PICTURE__1": null
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ 3.352002511379963, 6.605144296566172]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "PARK_ID": 16907,
      "FACILITYID": 28707,
      "NAME": "Gbenga Odunowo",
      "NAME_FR": "Planchodrome de Greenboro",
      "ADDRESS": "D cubicle Event Centre, Old Garage Idimu",
      "ADDRESS_FR": "Flourishing House",
      "FACILITY_T": "flat",
      "FACILITY_1": "plat",
      "ACCESSCTRL": "no/non",
      "ACCESSIBLE": "no/non",
      "OPEN": null,
      "NOTES": "Outdoor",
      "MODIFIED_D": "2018/01/18",
      "CREATED_DA": null,
      "FACILITY": "Neighbourhood : smaller size facility to service population of 10,000 or less",
      "FACILITY_F": "De voisinage : petite installation assurant des services à 10 000 résidents ou moins.",
      "DESCRIPTIO": "Flat asphalt surface, 5 components",
      "DESCRIPT_1": "Surface d'asphalte plane, 5 modules",
      "PICTURE_LI": null,
      "PICTURE_DE": false,
      "PICTURE__1": null
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ 3.251117705823967,  6.559951105366722 ]
    }
  },
])





  const handleShow = (id)=>{

    setLocations([...(locations.map(item =>{
        if(item?.properties?.PARK_ID === id){
            item.properties.PICTURE_DE = !item.properties.PICTURE_DE;
        }
        return item;
    }))])

  }


  const style = {
    headerContainer:{
        width:'100%',
        background:'#000000',
        height:'6vw',
        display:'flex',
        alignItems:'center'
    },
    logoText:{
        color:'#ffff',
        marginLeft:'1rem'
    },

}

    return (
        <div>
            <div style={style.headerContainer} >
                <div >
                    <h2 style={style.logoText} >Jerrex Maps</h2>
                </div>
            </div>

      <div style={{ height: '100vh', width: '100%', paddingTop:'20px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBKg2Dm8k0zo2V1Xp7sx1Sirha4u9qeypI', region:'NI' }}
          defaultCenter={pros?.center}
          defaultZoom={pros?.zoom}
          yesIWantToUseGoogleMapApiInternals={true}


        >


                   { locations.map(park => (
        <AnyReactComponent
          key={park?.properties?.PARK_ID}

            lat={ park?.geometry?.coordinates[1]}
            lng ={park?.geometry?.coordinates[0]}

            showlo={()=> handleShow(park?.properties?.PARK_ID)}
            tooltip={park?.properties?.ADDRESS}
            showOpt={park?.properties?.PICTURE_DE}
        />


      ))}



        </GoogleMapReact>
      </div>
      </div>
    );

}

export default SimpleMap;
