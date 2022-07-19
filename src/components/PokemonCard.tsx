import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
        >
            <View style={styles.cardContainer}>

                {/* Nombre del pokemon y ID */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

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

});