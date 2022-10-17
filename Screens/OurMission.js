import React, { Component } from "react";
import Disclaimer from "./Disclaimer.js";
import {  
    View, 
    Text, 
    StyleSheet,
    ScrollView, 
    Image,    
    TouchableOpacity,
    TouchableHighlight

} from "react-native";

let mission = ""  

 


 export default class OurMission extends Component {
  
  constructor(props) {
    super(props);
  }


  render(navigation) {

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
          showsVerticalScrollIndicator={false}>
          <Image
            style={styles.userImg}
             //source={{uri:  'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' }}
            //source={{uri: '.\\assets\\icon.png'}}
            //source={require('./assets/icon.png')}
          />
          <Text style={styles.title}>Our Mission and Inspiration</Text>
          <Text> </Text>
       
          <View style={styles.center}>        
            <Text style={styles.value}>{mission}</Text>
            <Text></Text>   
          </View>
        
          <Text></Text>
          <Text >Currently, there are no universal tools that help search for free care in Massachusetts. Our easy to use, centralized app is a hassle free system that allows uninsured and underinsured to search one source (our app) for specific free healthcare providers by specialty (for example: dental care, pediatrics, etc.) in a specific radius in the given State.  Our app provides the free care clinic name, phone number, website, email address, date, time, and hours for walk in appointments and the available doctor specialties at each free clinic.</Text>
          <Text></Text>
          <Text>Our amazing friend Julia, who is a medical student in New York, is the one who inspired us to create this app.  She is one of many kind doctors that provide free care to those in need. We hope that our app connects the free care doctors/clinics with the uninsured/underinsured and help people in need receive services and stay healthy.  </Text>
          <Text></Text>
          <Text>Sincerally,</Text>
          <Text></Text>
          <Text>Thais and Lucia</Text>
          <Text></Text> 
          <Text></Text>
          <View style={styles.center}>
              <TouchableOpacity style={styles.link} onPress={() => {this.props.navigation.navigate("Disclaimer")}}>
                <Text style={styles.link}>Disclaimer</Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEDDE',
    padding: 0,
    margin:10
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A6071',
    marginTop: 1,
    textAlign: 'center',
    marginBottom: 10,
  },
 center: {
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  value: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  link: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2e64e5',
    textAlign: 'center',
  },
});