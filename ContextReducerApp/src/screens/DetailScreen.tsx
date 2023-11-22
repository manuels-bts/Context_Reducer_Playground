import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SWCharacters, StarWarsButton } from '../components/StarWarsButton';

export const DetailScreen = () => {
    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <StarWarsButton character={SWCharacters.luke} />
                <StarWarsButton character={SWCharacters.solo} />
                <StarWarsButton character={SWCharacters.artur} />
                <StarWarsButton character={SWCharacters.vader} />
                <StarWarsButton character={SWCharacters.obi} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#EAF2FC'
    },
    content: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});