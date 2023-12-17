import { View, Text, Pressable } from 'react-native'
import { fonts } from '../../assets/index'

const CustomButton = (props) => {
    const { title, bgColor, onPress, disabled } = props,
        { bold, medium } = fonts;

    return <Pressable
        disabled={disabled}
        onPress={onPress}
        style={{
            backgroundColor: disabled ?  '#A0A0A0':'#0F0059' ,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%', height: 48,
            borderRadius: 30,
            paddingBottom: 5
        }}>
        <Text style={{
            fontSize: 16,
            fontFamily: medium,
            color: 'white'
        }}>
            {title}
        </Text>
    </Pressable>
}

export default CustomButton;