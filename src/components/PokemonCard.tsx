import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import ImageColors from 'react-native-image-colors';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
            .then(colors => {

                if (isMounted.current) {
                    (colors.platform === 'android')
                        ? setBgColor(colors.dominant || 'grey')
                        : (colors.platform === 'ios')
                        && setBgColor(colors.background || 'grey');
                }
            })
        return () => {
            isMounted.current = false;
        }
    }, [])


    return (
        <TouchableOpacity
            activeOpacity={0.9}
        >
            <View
                style={{
                    ...styles.cardContainer,
                    backgroundColor: bgColor,
                }}
            >

                {/* Nombre del pokemon y ID */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: windowWidth * 0.4,
        borderRadius: 10,
        marginBottom: 25,
    },

    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },

    pokebola: {
        position: 'absolute',
        width: 100,
        height: 100,
        bottom: -25,
        right: -25,
        opacity: 0.5,
    },

    pokemonImage: {
        position: 'absolute',
        width: 120,
        height: 120,
        right: -8,
        bottom: -5,
    },

    pokebolaContainer: {
        position: 'absolute',
        width: 100,
        height: 100,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
    },

});