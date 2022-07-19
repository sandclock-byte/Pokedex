import React from 'react';
import { Text, Image, FlatList, ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { simplePokemonList, loadPokemons, isLoading } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View style={{
        alignItems: 'center',
      }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}

          //Header
          ListHeaderComponent={(
            <Text
              style={{
                ...styles.title,
                ...styles.globatMargin,
                top: top + 20,
                marginBottom: top + 20,
              }}
            >
              Pokedex
            </Text>
          )}

          renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
          // Infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          // Loading
          ListFooterComponent={(
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color='grey'
            />
          )}
        />
      </View>
    </>
  )
}
