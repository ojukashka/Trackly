import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Maps = () => {
  return (
    <MapView showsUserLocation style={styles.maps}>
      <Marker
        title="title"
        coordinate={{
          latitude: 49.44,
          longitude: 99.98,
        }}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  maps: {
    width: '100%',
    height: '100%',
  },
});

export default Maps;
