import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ProfileContext } from '../context/profileContext'

export enum SWCharacters {
    luke, obi, solo, artur, vader, reset
}

interface Props {
    character: SWCharacters
}

export const StarWarsButton = ({ character }: Props) => {

    const { changeProfile, reset } = useContext(ProfileContext)
    let name: string = ''
    let image: string = ''

    switch (character) {
        case SWCharacters.luke:
            name = 'Luke Skywalker'
            image = 'https://images.gr-assets.com/characters/1264613782p8/1783.jpg'
            break

        case SWCharacters.obi:
            name = 'Obi Wan'
            image = 'https://i.pinimg.com/736x/38/a6/7e/38a67e81f83d040f211eb7ed4175fc61.jpg'
            break

        case SWCharacters.solo:
            name = 'Han Solo'
            image = 'https://i.pinimg.com/280x280_RS/13/1b/12/131b1237a8d7bf528aa2f215d7197f6e.jpg'
            break

        case SWCharacters.artur:
            name = 'R2-D2'
            image = 'https://pbs.twimg.com/profile_images/1448706431398518785/FROneiaC_400x400.jpg'
            break

        case SWCharacters.vader:
            name = 'Dart Vader'
            image = 'https://preview.redd.it/8sqzvsj05l491.jpg?width=640&crop=smart&auto=webp&s=9b5872bf876ac92cb03f5b632d762e029333fdff'
            break

        case SWCharacters.reset:
            name = 'Reset'
            image = ''
            break
    }

    return (
        <TouchableOpacity
            style={styles.body}
            onPress={() => (character !== SWCharacters.reset) ?
                changeProfile(name, image)
                : reset()
            }
        >
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    body: {
        width: 150,
        height: 50,
        backgroundColor: '#303040',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'yellow',
        paddingHorizontal: 8
    }
});
