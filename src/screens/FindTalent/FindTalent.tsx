import {
  StyleSheet,
  Text, View,
  Pressable,
  TextInput
} from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { COLOR, FONTSIZE } from '../../constants/contants'
import {Picker} from "@react-native-picker/picker"

const FindTalent = () => {
  const submitTalentRequestForm = (values: any) => {
    console.log(values)
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          padding:5
        }}
      >
        <Text style={styles.title}>Tell us about your need.</Text>
        <Text style={styles.description}>
          Start engaging our team to find the right solution for you.
        </Text>
      </View>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          company: '',
          lookingFor: '',
          message: '',
        }}
        onSubmit={submitTalentRequestForm}
      >
        {(
          {
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            isValid,
            isSubmitting,
          }
        ) => (
          <View
            style={styles.formContainer}
          >
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder='Name'
              style={styles.inputContainer}
            />
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder='Email'
              style={styles.inputContainer}
            />
            <TextInput
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              placeholder='Phone'
              style={styles.inputContainer}
            />
            <TextInput
              onChangeText={handleChange('company')}
              onBlur={handleBlur('company')}
              value={values.company}
              placeholder='Company/Organization'
              style={styles.inputContainer}
            />
            <View
              style={{
                borderWidth: 1,
                margin: 10,
                borderRadius: 10,
                borderColor:COLOR.B_300
              }}
            >
              <Picker
                selectedValue={values.lookingFor}
                onValueChange={handleChange('lookingFor')}
              >
                <Picker.Item
                  label="Select a Role"
                  value=""
                />
                <Picker.Item
                  label="New Software develoepr"
                  value="NewDeveloper"
                />
                <Picker.Item
                  label="Assistance to developer a software"
                  value="assistantDeveloper"
                />
                <Picker.Item
                  label="Support for my existing IT team"
                  value="supportIT"
                />
                <Picker.Item
                  label="Tool to manage/sale my training program"
                  value="toolManager"
                />
              </Picker>
            </View>
            <TextInput
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
              value={values.message}
              placeholder='Enter details here...'
              style={styles.inputContainer}
              multiline
            />

            <Pressable
              // accessibilityRole='button'
              onPress={handleSubmit}
              style={styles.button}
              // disabled={isSubmitting}
            >
              <Text
                style={{
                  color: COLOR.WHITE,
                  textAlign:'center'
                }}
              >
                SEND
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default FindTalent

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLOR.WHITE,
    flex:1
  },
  text: {

  },
  title: {
    fontSize:FONTSIZE.TITLE_1
  },
  description: {
    
  },
  button: {
    alignSelf: 'center',
    backgroundColor: COLOR.B_300,
    padding: 5,
    borderRadius: 5,
    width:'95%'
  },
  formContainer: {
    padding:10
  },
  inputContainer: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    borderColor:COLOR.B_300
  }
})