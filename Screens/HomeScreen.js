import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class HomeScreen extends Component {
  state = {
    breweryList: null
  }

  componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries/').then(response => {
      return response.json();      
    }).then(data => {
      console.log(data);

      this.setState(prevState => ({
        breweryList: prevState.breweryList = data
      }))
    })
  }
  
    
  render() {
    const Item = ({ name }) => (
      <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item name={item.name} />
    );

    return (
        <View style={styles.container}>
          <FlatList
            data={this.state.breweryList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
});
