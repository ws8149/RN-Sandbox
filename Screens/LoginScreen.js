import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import { withFormik } from 'formik';




export class LoginScreen extends Component {
  
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Your App Name </Text>
        <TextInput
          style={styles.formInput}
          onChangeText={email => this.props.setFieldValue('email', email)}
          placeholder='Email'
        />
        <Text style={styles.validationText}>{this.props.errors.email}</Text>
        
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          onChangeText={password => this.props.setFieldValue('password',password)}
          placeholder='Password'
        />
        <Text style={styles.validationText}>{this.props.errors.password}</Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {this.props.handleSubmit()}}
          // onPress={() => this.props.navigation.navigate('Home')}
          >
          <Text>Login</Text>          
        </TouchableOpacity>
               
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 40
  },
  validationText: {
    marginTop: 2,
    marginBottom: 8,
    color: 'red',    
  },
  formInput: {
    width: 300,
    height: 60,
    borderColor: '#B5B4BC',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8
  },

  button: {
    backgroundColor: '#b5b4bc',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 300
  }
});

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: ''}),
  validate: (values,props) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email';
    }

    if (!values.password) {
      errors.password = 'Password required';
    }

    return errors;

  },
  handleSubmit: (values, {props}) => {
    console.log(values);        
    props.navigation.navigate('Home')
  },
})(LoginScreen);