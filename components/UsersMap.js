import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {
    let userLocationMarker = null;

    if (props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation}></MapView.Marker>;
    }

    return (
        <View style={styles.mapContainer}>
            <MapView 
                initialRegion={{
                    latitude: 47.5856087,
                    longitude: 19.0443254,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
            }}
            region={props.userLocation}
            style={styles.map}>
            {userLocationMarker}</MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200,
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default usersMap;