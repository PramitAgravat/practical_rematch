import { StyleSheet } from "react-native";
import { fonts } from "../../assets";
const { medium } = fonts;

const styles = StyleSheet.create({
    constainer: { flex: 1, margin: 20 },
    cardContainer: { alignItems: 'flex-end', marginVertical: 10 },
    closeImg: {
        width: 28,
        height: 28,
        resizeMode: 'contain'
    },
    titleText: { fontSize: 32, fontFamily: medium, lineHeight: 36, color: 'black' },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    addAgentContainer: { flex: 1, marginVertical: 10, justifyContent: 'center', alignItems: 'center' },
    addAgentImg: {
        width: 181,
        height: 262,
        resizeMode: 'contain'
    },
});

export default styles