import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState();

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) { 
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        };

        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -22.8963676, longitude: -47.0469528}}>
                <Image style={styles.avatar} source={{uri: 'https://avatars1.githubusercontent.com/u/7130275?s=460&v=4'}} />
                <Callout onPress={() => {
                    navigation.navigate('Profile', {github_username: 'bhabermann'});
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Bruno Habermann</Text>
                        <Text style={styles.devBio}>Uma bio aleatória só pra encher linguiça nesta parte da aula e ver como fica o resultado</Text>
                        <Text style={styles.devTechs}>.Net, Delphi, React, SQL Server</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    )  
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#ffffff'
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    }
})

export default Main;