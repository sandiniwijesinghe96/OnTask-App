import React, {useState} from 'react';
import {Modal, TouchableHighlight, StyleSheet, View,ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo'
import NewTaskForm from '../../../forms/NewTaskForm';
import {Text} from 'react-native-elements'

export default function NewTaskModal(props){
  
  const [modalVisible,setModalVisible] = useState(false)

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <EIcon name="cross" size={35} style={styles.closeIcon} onPress={() => {
                  setModalVisible(false);
                }}/>
                 <ScrollView>
                 <NewTaskForm 
                    onFormSubmit={() => {
                        setModalVisible(false)
                        props.updateTasks()
                    }}
                    groupId={props.groupId}
                />
                 </ScrollView>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            setModalVisible(true);
          }}>
                        <Icon name="plus" size={30} style={styles.addIcon} />
        </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    addIcon: {paddingRight: '3%'},
    closeIcon: {
        textAlign: "right",
        padding: "2%",
        marginTop: "1%"
    }
})