import React, { useState} from 'react';

// export const locations = [
//     {
//     "type": "Feature",
//     "properties": {
//       "PARK_ID": 960,
//       "FACILITYID": 100264,
//       "NAME": "Dapo Aremu",
//       "NAME_FR": "Pastor",
//       "ADDRESS": "2, Titilayo Str,Balogun,off Niyi Ogunbameru str, Ajao Estate",
//       "ADDRESS_FR": "The shepherd’s Place",
//       "FACILITY_T": "flat",
//       "FACILITY_1": "plat",
//       "ACCESSCTRL": "no/non",
//       "ACCESSIBLE": "no/non",
//       "OPEN": null,
//       "NOTES": "Outdoor",
//       "MODIFIED_D": "2018/01/18",
//       "CREATED_DA": null,
//       "FACILITY": "Neighbourhood : smaller size facility to service population of 10,000 or less",
//       "FACILITY_F": "De voisinage : petite installation assurant des services à 10 000 résidents ou moins.",
//       "DESCRIPTIO": "Flat asphalt surface, 5 components",
//       "DESCRIPT_1": "Surface d'asphalte plane, 5 modules",
//       "PICTURE_LI": null,
//       "PICTURE_DE": null,
//       "PICTURE__1": null
//     },
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ 3.3540190699193313, 6.519230757422874]
//     }
//   },
//   {
//     "type": "Feature",
//     "properties": {
//       "PARK_ID": 1219,
//       "FACILITYID": 102312,
//       "NAME": "Bob MacQuarrie Skateboard Park (SK8 Extreme Park)",
//       "NAME_FR": "IGUNSABI SEYI",
//       "ADDRESS": "Plot 13A, 112 Road, Festac Town, Lagos.",
//       "ADDRESS_FR": "Vessel Of Honour",
//       "FACILITY_T": "other",
//       "FACILITY_1": "autre",
//       "ACCESSCTRL": "no/non",
//       "ACCESSIBLE": "no/non",
//       "OPEN": null,
//       "NOTES": "Outdoor",
//       "MODIFIED_D": "2018/01/18",
//       "CREATED_DA": null,
//       "FACILITY": "Community: mid size facility to service population of 40,000 plus",
//       "FACILITY_F": "Communautaire : installation de taille moyenne assurant des services à 40 000 résidents ou plus.",
//       "DESCRIPTIO": "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer",
//       "DESCRIPT_1": "Surface d'asphalte plane, 10 modules, programmes et camps de planche à roulettes en été géré par la Ville",
//       "PICTURE_LI": null,
//       "PICTURE_DE": null,
//       "PICTURE__1": null
//     },
//     "geometry": {
//       "type": "Point",
//       "coordinates": [3.29289355498641,  6.471979911576086]
//     }
//   },
//   {
//     "type": "Feature",
//     "properties": {
//       "PARK_ID": 1157,
//       "FACILITYID": 100264,
//       "NAME": "Gbenga Arogunmaya",
//       "NAME_FR": "Planchodrome Walter-Baker",
//       "ADDRESS": "127/129, Idimu Road, Ejigbo",
//       "ADDRESS_FR": "House of grace",
//       "FACILITY_T": "bowl",
//       "FACILITY_1": "bol",
//       "ACCESSCTRL": "no/non",
//       "ACCESSIBLE": "no/non",
//       "OPEN": null,
//       "NOTES": "Outdoor",
//       "MODIFIED_D": "2018/01/18",
//       "CREATED_DA": null,
//       "FACILITY": "Community : mid size facility to service population of 40,000 plus",
//       "FACILITY_F": "Communautaire : installation de taille moyenne assurant des services à 40 000 résidents ou plus.",
//       "DESCRIPTIO": "Concrete bowl, 7,000 sq ft",
//       "DESCRIPT_1": "Bol de béton, 7 000 pi2",
//       "PICTURE_LI": null,
//       "PICTURE_DE": false,
//       "PICTURE__1": null
//     },
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ 3.2921944989068717, 6.571714408008292]
//     }
//   },
//   {
//     "type": "Feature",
//     "properties": {
//       "PARK_ID": 9,
//       "FACILITYID": 102102,
//       "NAME": "VICTOR PAUL EHIAGUINA",
//       "NAME_FR": "VICTOR PAUL EHIAGUINA",
//       "ADDRESS": "Magrellos Eatery, Amuwo/Festac link Road, Amuwo Odofin",
//       "ADDRESS_FR": "Redemption House",
//       "FACILITY_T": "other",
//       "FACILITY_1": "autre",
//       "ACCESSCTRL": "no/non",
//       "ACCESSIBLE": "no/non",
//       "OPEN": null,
//       "NOTES": "Outdoor - Mobile",
//       "MODIFIED_D": "2018/01/18",
//       "CREATED_DA": null,
//       "FACILITY": "Metcalfe Community Centre - Roving Skateboard Park Location",
//       "FACILITY_F": "Centre communautaire de Metcalfe - Lieu de planchodrome itinérant",
//       "DESCRIPTIO": "Flat surface, 5 components",
//       "DESCRIPT_1": "Surface plane, 5 modules",
//       "PICTURE_LI": null,
//       "PICTURE_DE": false,
//       "PICTURE__1": null
//     },
//     "geometry": {
//       "type": "Point",
//       "coordinates": [3.3105765825439635, 6.471318435010329]
//     }
//   },
//   {
//     "type": "Feature",
//     "properties": {
//       "PARK_ID": 1160,
//       "FACILITYID": 28007,
//       "NAME": "EARNEST ABU ",
//       "NAME_FR": "Lieu de planchodrome itinérant",
//       "ADDRESS": "24, Ayoola Str, Oworonshoki",
//       "ADDRESS_FR": "The Lord’s Ambassador",
//       "FACILITY_T": "flat",
//       "FACILITY_1": "plat",
//       "ACCESSCTRL": "yes/oui",
//       "ACCESSIBLE": "no/non",
//       "OPEN": null,
//       "NOTES": "Indoor - Summer",
//       "MODIFIED_D": "2018/03/07",
//       "CREATED_DA": null,
//       "FACILITY": "Johnny Leroux Stittsville Community Arena - Roving Skateboard Park Location",
//       "FACILITY_F": "Aréna communautaire de Stittsville Johnny-Leroux - Lieu de planchodrome itinérant",
//       "DESCRIPTIO": "Flat surface, 5 components",
//       "DESCRIPT_1": "Surface plane, 5 modules",
//       "PICTURE_LI": null,
//       "PICTURE_DE": false,
//       "PICTURE__1": null
//     },
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ 3.4026586, 6.546858101796432]
//     }
//   },
//   {
//     "type": "Feature",
//     "properties": {
//       "PARK_ID": 1693,
//       "FACILITYID": 28016,
//       "NAME": "Iyiola Oyinloye",
//       "NAME_FR": "Planchodrome Legacy",
//       "ADDRESS": "25, Anuoluwapo  Str off market street, Shomolu",
//       "ADDRESS_FR": "Daystar",
//       "FACILITY_T": "bowl",
//       "FACILITY_1": "bol",
//       "ACCESSCTRL": "no/non",
//       "ACCESSIBLE": "no/non",
//       "OPEN": null,
//       "NOTES": "Outdoor",
//       "MODIFIED_D": "2018/01/18",
//       "CREATED_DA": null,
//       "FACILITY": "District: larger facility to service population of 100,000 plus",
//       "FACILITY_F": "De district : grande installation assurant des services à 100 000 résidents ou plus.",
//       "DESCRIPTIO": "Large concrete bowl, many street and vertical components, 17,000 sq ft",
//       "DESCRIPT_1": "Grand bol de béton, modules de rue et modules verticaux, 17 000 pi2",
//       "PICTURE_LI": null,
//       "PICTURE_DE": false,
//       "PICTURE__1": null
//     },
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ 3.378518206351976, 6.5327238265740055]
//     }
//   },
//   {
//     "type": "Feature",
//     "properties": {
//       "PARK_ID": 1717,
//       "FACILITYID": 28018,
//       "NAME": "Gbenga Odunowo",
//       "NAME_FR": "Planchodrome de Greenboro",
//       "ADDRESS": "Tantalizer’s Building, Shipeolu Str, Palm Groove",
//       "ADDRESS_FR": "Discovery Centre",
//       "FACILITY_T": "flat",
//       "FACILITY_1": "plat",
//       "ACCESSCTRL": "no/non",
//       "ACCESSIBLE": "no/non",
//       "OPEN": null,
//       "NOTES": "Outdoor",
//       "MODIFIED_D": "2018/01/18",
//       "CREATED_DA": null,
//       "FACILITY": "Neighbourhood : smaller size facility to service population of 10,000 or less",
//       "FACILITY_F": "De voisinage : petite installation assurant des services à 10 000 résidents ou moins.",
//       "DESCRIPTIO": "Flat asphalt surface, 5 components",
//       "DESCRIPT_1": "Surface d'asphalte plane, 5 modules",
//       "PICTURE_LI": null,
//       "PICTURE_DE": false,
//       "PICTURE__1": null
//     },
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ 3.391817506351976, 6.562910860917736]
//     }
//   },
//   {
//     "type": "Feature",
//     "properties": {
//       "PARK_ID": 17153,
//       "FACILITYID": 38018,
//       "NAME": "Obafemi Oyewumi",
//       "NAME_FR": "Planchodrome de Greenboro",
//       "ADDRESS": "136/138 Idimu Ikotun Rd, Freedom gate B/Stop, Ikotun",
//       "ADDRESS_FR": "On Eagles Wings",
//       "FACILITY_T": "flat",
//       "FACILITY_1": "plat",
//       "ACCESSCTRL": "no/non",
//       "ACCESSIBLE": "no/non",
//       "OPEN": null,
//       "NOTES": "Outdoor",
//       "MODIFIED_D": "2018/01/18",
//       "CREATED_DA": null,
//       "FACILITY": "Neighbourhood : smaller size facility to service population of 10,000 or less",
//       "FACILITY_F": "De voisinage : petite installation assurant des services à 10 000 résidents ou moins.",
//       "DESCRIPTIO": "Flat asphalt surface, 5 components",
//       "DESCRIPT_1": "Surface d'asphalte plane, 5 modules",
//       "PICTURE_LI": null,
//       "PICTURE_DE": false,
//       "PICTURE__1": null
//     },
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ 3.2765711529016284, 6.565249351112465]
//     }
//   },
//   {
//     "type": "Feature",
//     "properties": {
//       "PARK_ID": 17163,
//       "FACILITYID": 38023,
//       "NAME": "Ajayi Adeola",
//       "NAME_FR": "Planchodrome de Greenboro",
//       "ADDRESS": "19, Akowojo road, Opposite Ogunlana  Str Junction, Egbeda",
//       "ADDRESS_FR": "Cornerstone Assembly",
//       "FACILITY_T": "flat",
//       "FACILITY_1": "plat",
//       "ACCESSCTRL": "no/non",
//       "ACCESSIBLE": "no/non",
//       "OPEN": null,
//       "NOTES": "Outdoor",
//       "MODIFIED_D": "2018/01/18",
//       "CREATED_DA": null,
//       "FACILITY": "Neighbourhood : smaller size facility to service population of 10,000 or less",
//       "FACILITY_F": "De voisinage : petite installation assurant des services à 10 000 résidents ou moins.",
//       "DESCRIPTIO": "Flat asphalt surface, 5 components",
//       "DESCRIPT_1": "Surface d'asphalte plane, 5 modules",
//       "PICTURE_LI": null,
//       "PICTURE_DE": false,
//       "PICTURE__1": null
//     },
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ 3.2765711529016284, 6.565249351112465]
//     }
//   },
// ]


// export const styles = [
// {
//   featureType: "water",
//   elementType: "geometry",
//   stylers: [
//     {
//       color: "#004358"
//     }
//   ]
// },
// {
//   featureType: "landscape",
//   elementType: "geometry",
//   stylers: [
//     {
//       color: "#1f8a70"
//     }
//   ]
// },
// {
//   featureType: "poi",
//   elementType: "geometry",
//   stylers: [
//     {
//       color: "#1f8a70"
//     }
//   ]
// },
// {
//   featureType: "road.highway",
//   elementType: "geometry",
//   stylers: [
//     {
//       color: "#fd7400"
//     }
//   ]
// },
// {
//   featureType: "road.arterial",
//   elementType: "geometry",
//   stylers: [
//     {
//       color: "#1f8a70"
//     },
//     {
//       lightness: -20
//     }
//   ]
// },
// {
//   featureType: "road.local",
//   elementType: "geometry",
//   stylers: [
//     {
//       color: "#1f8a70"
//     },
//     {
//       lightness: -17
//     }
//   ]
// },
// {
//   elementType: "labels.text.stroke",
//   stylers: [
//     {
//       color: "#ffffff"
//     },
//     {
//       visibility: "on"
//     },
//     {
//       weight: 0.9
//     }
//   ]
// },
// {
//   elementType: "labels.text.fill",
//   stylers: [
//     {
//       visibility: "on"
//     },
//     {
//       color: "#ffffff"
//     }
//   ]
// },
// {
//   featureType: "poi",
//   elementType: "labels",
//   stylers: [
//     {
//       visibility: "simplified"
//     }
//   ]
// },
// {
//   elementType: "labels.icon",
//   stylers: [
//     {
//       visibility: "off"
//     }
//   ]
// },
// {
//   featureType: "transit",
//   elementType: "geometry",
//   stylers: [
//     {
//       color: "#1f8a70"
//     },
//     {
//       lightness: -10
//     }
//   ]
// },
// {},
// {
//   featureType: "administrative",
//   elementType: "geometry",
//   stylers: [
//     {
//       color: "#1f8a70"
//     },
//     {
//       weight: 0.7
//     }
//   ]
// }
// ]

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
])

