import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { globalStyles } from '../theme/appTheme';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, isLoading, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.pokebolaBG}
      />
      <View
        style={{ alignItems: 'center' }}
      >
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          // to show in two columns
          numColumns={2}
          // header
          ListHeaderComponent={
            <Text
              style={{
                ...globalStyles.title,
                ...globalStyles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          // Infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};
