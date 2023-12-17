import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native'
import { images, fonts } from '../../assets/index'
import { lables } from '../../constant/labels';
import CustomButton from '../../components/buttons';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
const AddAgent = (profile) => {
    const { addAgentIcon, closeIcon, userIcon } = images,
        { bold, medium } = fonts,
        { manageAgent, addAgentBtn } = lables,
        { constainer, cardContainer, closeImg, titleText, addAgentContainer, addAgentImg } = styles;
    const navigation = useNavigation();

    return <View style={constainer}>
        <Pressable style={cardContainer}>
            <Image
                style={closeImg}
                source={closeIcon}
            />
        </Pressable>
        <Text style={titleText}>
            {manageAgent}
        </Text>
        <View style={{ flex: 1 }}>
            <View style={addAgentContainer}>
                <Image
                    style={addAgentImg}
                    source={addAgentIcon}
                />
            </View>
            <CustomButton title={addAgentBtn}
                disabled={false}
                onPress={() => {
                    navigation.navigate('AddAgentProfile')
                }} />
        </View>
    </View>
}

const mapState = (state) => ({
    profile: state.profile,
});

export default connect(mapState)(AddAgent);