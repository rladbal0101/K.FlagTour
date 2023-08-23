import React, { useEffect, useRef, useState } from 'react';

function ContactsMap(props) {
  const [map, setMap ] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const newMap = new window.google.maps.Map(ref.current, {
      center : { lat: 37.519203186035156, lng: 126.92858123779297 },
      zoom: 18,
    });

    setMap(newMap);
  }, [])

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