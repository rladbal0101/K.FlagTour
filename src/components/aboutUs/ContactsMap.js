import React, { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react';

function ContactsMap(props) {
  const [map, setMap ] = useState(null);
  const [marker, setMarker] = useState(null);

  const ref = useRef();

  useEffect(() => {
    const newMap = new window.google.maps.Map(ref.current, {
      center : { lat: 37.519203186035156, lng: 126.92858123779297 },
      zoom: 18,
    });

    if (ref.current && ! map) {
      setMap(newMap);
    }

  }, [ref, map]);

  // const Marker = (options) => {
  //   useEffect(() => {
  //     if (!marker) {
  //       marker.setMap(null);
  //     };
  
  //     return () => {
  //       if (marker) {
  //         marker.setMap(null);
  //       }
  //     };
  //   }, [marker]);
  
  //   useEffect(() => {
  //     if (marker) {
  //       marker.setOptions(options);
  //     }
  //   }, [marker, options]);
  //   return null;
  // };




  return (
    <div 
      ref={ref} 
      id='map'
      style={{width:"80%", height:"400px"}}
    >
    </div>
  );
}

export default ContactsMap;