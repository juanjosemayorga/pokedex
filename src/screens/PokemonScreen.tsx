import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigator/Navigator';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { simplePokemon, color } = route.params;
  const { id, name, picture } = simplePokemon;
  const { top } = useSafeAreaInsets();

  return (
    <View>
      <View style={{
        ...styles.headerContainer,
        backgroundColor: color,
      }}>
        <TouchableOpacity
          style={{
            ...styles.backButton,
            top: top + 5,
          }}
          onPress={() => navigation.pop()}
          activeOpacity={0.8}>
          <Icon
            name="arrow-back-outline"
            color="white"
            size={35}
          />
        </TouchableOpacity>

        <Text
          style={{
            ...styles.pokemonName,
            top: top + 40,
          }}
        >
          {name + '\n'}#{id}
        </Text>

        <Image
          source={ require('../assets/pokebola-blanca.png') }
          style={styles.pokeball}
        />

        <FadeInImage
          uri={picture}
          style={styles.pokemonImage}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
});
