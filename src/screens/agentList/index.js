import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native'
import { images, fonts } from '../../assets/index'
import { lables } from '../../constant/labels';
import CustomButton from '../../components/buttons';
import { connect } from 'react-redux';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

const AgentList = ({ profile, setProfile }) => {
    const [isModalVisible, setModalVisible] = useState(false),
        { addAgentIcon, closeIcon, userIcon } = images,
        { manageAgent, addAgentBtn, deleteTitle, deleteDescription, cancelLabel, deleteLabel, deleteAgent, editLabel } = lables,
        { nameOfCompany, contactPersonName, mobileNo } = profile?.profile,
        { container, closeContainer, closeIconStyle, heading, agentContainer, userIconStyle, comapnyName, contactPerson, mobileNumber, editStyle, divider, deleteStyle, deleteText, modalContainer, modalChildContainer, buttonContainer, titleText, detailText, buttonStyle, buttonText } = styles;
    const navigation = useNavigation();

    const deleteItem = () => {
        // Use filter to create a new array without the item with the specified ID
        setProfile({
            isEmpty: false,
            id: "uniqueNumber",
            nameOfCompany: "nameOfCompany",
            contactPersonName: "contactPersonName",
            mobileNo: "mobileNo",
            landlineNo: "landlineNo",
            liceriseNo: "liceriseNo",
            emailAddress: "emailAddress",
            secondEmailAddress: "secondEmailAddress",
        });
        navigation.navigate('AddAgent')
    };

    return <View style={{ flex: 1 }}>
        <View style={container}>
            <Pressable style={closeContainer}>
                <Image
                    style={closeIconStyle}
                    source={closeIcon}
                />
            </Pressable>
            <Text style={heading}>
                {manageAgent}
            </Text>
            <View style={[styles.card, styles.shadowProp]}>
                <View style={agentContainer}>
                    <Image
                        style={userIconStyle}
                        source={userIcon}
                    />
                    <View style={{ width: "80%", }}>
                        <Text style={comapnyName}>
                            {nameOfCompany}
                        </Text>
                        <Text style={contactPerson}>
                            {contactPersonName}
                        </Text>
                        <Text style={mobileNumber}>
                            {mobileNo}
                        </Text>
                    </View>
                    <Pressable
                        onPress={() => navigation.navigate('AddAgentProfile')}>
                        <Text style={editStyle}>
                            {editLabel}
                        </Text>
                    </Pressable>
                </View>
                <View style={divider} />
                <Pressable style={deleteStyle} onPress={() =>
                    setModalVisible(true)}
                >
                    <Text style={deleteText}>
                        {deleteAgent}
                    </Text>
                </Pressable>
            </View>
        </View>

        {isModalVisible &&
            <View style={modalContainer}>
                <Modal isVisible={true}>
                    <View style={modalChildContainer}>
                        <Text style={titleText}>{deleteTitle}</Text>
                        <Text style={detailText}>{deleteDescription}</Text>
                        <View style={buttonContainer}>
                            <Pressable
                                style={[buttonStyle, { backgroundColor: '#0F0059' }]}
                                onPress={() =>
                                    setModalVisible(false)
                                } >
                                <Text style={[buttonText, { color: 'white' }]}>
                                    {cancelLabel}
                                </Text>
                            </Pressable>
                            <Pressable
                                style={[buttonStyle, { backgroundColor: '#1AFFEE' }]}
                                onPress={() => {
                                    setModalVisible(false)
                                    deleteItem()
                                }}>
                                <Text style={[buttonText, { color: 'black' }]}>
                                    {deleteLabel}
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>

        }

    </View>
}

const mapState = (state) => ({
    profile: state.profile,
});

const mapDispatch = (dispatch) => ({
    setProfile: dispatch.profile.setProfile,
});


export default connect(mapState, mapDispatch)(AgentList);