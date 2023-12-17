import { StyleSheet } from "react-native";
import { fonts } from "../../assets";
const { medium } = fonts;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f2f2f6' },
    buttonStyle: { marginVertical: 10 },
    cancelText: { fontSize: 18, fontFamily: medium, lineHeight: 36, color: 'black' },
    titleText: { marginVertical: 25, fontSize: 32, fontFamily: medium, lineHeight: 36, color: 'black' }
})

export default styles