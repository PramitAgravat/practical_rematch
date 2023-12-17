import React, { useState, useEffect } from 'react'
import { View, TextInput } from 'react-native'
import { fonts } from '../../assets';

const CustomTextInput = (props) => {
    const { placeholder, value, onChangeText } = props,
        { medium, light } = fonts;
    return <TextInput
        style={{
            fontFamily: medium,
            borderRadius: 10,
            opacity: 1,
            backgroundColor: 'white',
            height: 60,
            marginVertical: 10,
            paddingHorizontal: 10,
        }}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
    />
}

export default CustomTextInput;