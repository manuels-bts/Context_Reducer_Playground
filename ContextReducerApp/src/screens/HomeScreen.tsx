import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ProfileContext } from '../context/profileContext'
import { SWCharacters, StarWarsButton } from '../components/StarWarsButton'

interface Props extends StackScreenProps<any, any> { }

export const HomeScreen = ({ navigation }: Props) => {

    const { top } = useSafeAreaInsets()
    const { state: { fullname, imgUrl } } = useContext(ProfileContext)


    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <TouchableOpacity
                    style={{
                        ...styles.profile,
                        top
                    }}
                    onPress={() => navigation.navigate('DetailScreen')}
                >
                    <Image
                        source={{ uri: imgUrl }}
                        style={styles.profile}
                    />
                </TouchableOpacity>

                <Text style={styles.name}>{fullname}</Text>

                <View style={{ marginTop: 100 }}>
                    <StarWarsButton character={SWCharacters.reset} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#D5FF45'
    },
    content: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    profile: {
        width: 200,
        height: 200,
        borderRadius: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    name: {
        fontSize: 23,
        top: 80,
        fontWeight: 'bold'
    }
});
