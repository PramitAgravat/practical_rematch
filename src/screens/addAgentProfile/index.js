import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, Button } from 'react-native'
import { images, fonts } from '../../assets/index'
import { lables } from '../../constant/labels';
import CustomButton from '../../components/buttons';
import CustomTextInput from '../../components/customTextInput';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import profile from '../../store/models';
import styles from './styles';

const AddAgentProfile = ({ profile, setProfile }) => {
    const navigation = useNavigation();
    const [isValid, setIsValid] = useState(false),
        [id, setId] = useState(''),
        [nameOfCompany, setNameOfCompany] = useState(''),
        [contactPersonName, setContactPersonName] = useState(''),
        [mobileNo, setMobileNo] = useState(''),
        [landlineNo, setlandlineNo] = useState(''),
        [liceriseNo, setLiceriseNo] = useState(''),
        [emailAddress, setEmailAddress] = useState(''),
        [secondEmailAddress, setSecondEmailAddress] = useState(''),
        
        { addManagingAgent, submit, cancel, nameOfTheCompany, nameOfContactPerson, mobileNumber, landlineNumber, liceriseNumber, primaryEmailAddress, secondryEmailAddress } = lables,
        { container, buttonStyle, cancelText, titleText } = styles;

    const validator = (type, value) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!value) {
            return false;
        }
        switch (type) {
            case 'nameOfCompany':
                return value !== '';
            case 'contactPersonName':
                return value !== '';
            case 'mobileNo':
                return value.length === 10 && value.match(/^[0-9]+$/);
            case 'landlineNo':
                return value.match(/^[0-9]+$/);
            case 'liceriseNo':
                return value.length === 6 && value.match(/^[0-9]+$/);
            case 'email':
                return reg.test(value)
            case 'secondEmail':
                return reg.test(value)
        }
    };

    const validateValues = () => {
        return (
            validator('nameOfCompany', nameOfCompany) &&
            validator('contactPersonName', contactPersonName) &&
            validator('mobileNo', mobileNo) &&
            validator('liceriseNo', liceriseNo) &&
            validator('landlineNo', landlineNo) &&
            validator('email', emailAddress) &&
            validator('secondEmail', secondEmailAddress)
        );
    };

    const handleUpdateProfile = () => {
        var uniqueNumber = new Date().getTime().toString()
        setProfile({
            isEmpty: false,
            id: uniqueNumber,
            nameOfCompany: nameOfCompany,
            contactPersonName: contactPersonName,
            mobileNo: mobileNo,
            landlineNo: landlineNo,
            liceriseNo: liceriseNo,
            emailAddress: emailAddress,
            secondEmailAddress: secondEmailAddress,
        });
    };

    return <View style={container}>
        <Pressable style={buttonStyle} onPress={() => {
            navigation.navigate('AddAgentProfile')
        }}>
            <Text style={cancelText}>
                {cancel}
            </Text>
        </Pressable>
        <Text style={titleText}>
            {addManagingAgent}
        </Text>
        <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
            <CustomTextInput placeholder={nameOfTheCompany} value={nameOfCompany} onChangeText={(text) => setNameOfCompany(text)} />
            <CustomTextInput placeholder={nameOfContactPerson} value={contactPersonName} onChangeText={(text) => setContactPersonName(text)} />
            <CustomTextInput placeholder={mobileNumber} value={mobileNo} onChangeText={(text) => setMobileNo(text)} />
            <CustomTextInput placeholder={landlineNumber} value={landlineNo} onChangeText={(text) => setlandlineNo(text)} />
            <CustomTextInput placeholder={liceriseNumber} value={liceriseNo} onChangeText={(text) => setLiceriseNo(text)} />
            <CustomTextInput placeholder={primaryEmailAddress} value={emailAddress} onChangeText={(text) => setEmailAddress(text)} />
            <CustomTextInput placeholder={secondryEmailAddress} value={secondEmailAddress} onChangeText={(text) => setSecondEmailAddress(text)} />
            <CustomButton
                disabled={validateValues() ? false : true}
                title={submit} onPress={() => {
                    handleUpdateProfile()
                    navigation.navigate('AgentList')
                }} />
        </ScrollView>
    </View>
}

const mapState = (state) => ({
    profile: state.profile,
});

const mapDispatch = (dispatch) => ({
    setProfile: dispatch.profile.setProfile,
});

export default connect(mapState, mapDispatch)(AddAgentProfile);