import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../../assets";

const { bold, medium } = fonts;

const styles = StyleSheet.create({
    container: { flex: 1, margin: 20 },
    closeContainer: { alignItems: 'flex-end', marginVertical: 10 },
    closeIconStyle: {
        width: 28,
        height: 28,
        resizeMode: 'contain'
    },
    heading: { fontSize: 32, fontFamily: medium, lineHeight: 36, color: 'black' },
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
    agentContainer: { flexDirection: 'row' },
    userIconStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    comapnyName: { marginHorizontal: 10, fontSize: 18, fontFamily: medium, lineHeight: 20, color: 'black' },
    contactPerson: { marginHorizontal: 10, fontSize: 18, fontFamily: medium, lineHeight: 20, color: 'black' },
    mobileNumber: { marginHorizontal: 10, fontSize: 18, fontFamily: medium, lineHeight: 20, color: 'black' },
    editStyle: { fontSize: 18, fontFamily: bold, lineHeight: 20, color: '#0F0059', textDecorationLine: 'underline' },
    divider: { width: '96%', height: 1, backgroundColor: '#d2d2d2', marginVertical: 10, alignSelf: 'center' },
    deleteStyle: { alignSelf: 'row', alignItems: 'center' },
    deleteText: { fontSize: 20, fontFamily: bold, lineHeight: 30, color: 'red', textDecorationLine: 'underline', marginVertical: 5 },
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backdropOpacity: 0.3 },
    modalChildContainer: { width: (Dimensions.get('window').width - 60), backgroundColor: 'white', padding: 20, alignItems: 'center', borderRadius: 25, alignSelf: 'center' },
    titleText: { fontSize: 18, fontFamily: bold, lineHeight: 24, color: 'black', marginVertical: 10 },
    detailText: { fontSize: 18, fontFamily: medium, lineHeight: 24, color: '', marginVertical: 10, textAlign: 'center' },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: 148,
        margin: 10, borderRadius: 25,
    },
    buttonText: { fontSize: 18, fontFamily: medium, lineHeight: 24, color: 'black', marginVertical: 10 },
});

export default styles