import React, { Component } from "react";

import {  
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    ScrollView, 
    Image, 
    Linking
} from "react-native";

let name = ""
let desc = ""
let address = ""
let phone = ""
let email = ""
let hours = ""
let website =""

 export default class Details extends Component {
  
  constructor(props) {
    name = props.route.params.marker.title
    desc = props.route.params.marker.description
    address = props.route.params.marker.address
    phone = props.route.params.marker.snippet
    email = props.route.params.marker.email
    hours = props.route.params.marker.hours
    website = props.route.params.marker.website
    super(props);
  }


  render(navigation) {
    const onClick = async () => {
      const url = website;
      await Linking.canOpenURL(url);
      Linking.openURL(url);
    };
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
          <Text style={styles.clinicName}>{name}</Text>
          <Text> </Text>
       
          <View style={styles.callToPhone}>
            <TouchableOpacity style={styles.calltoPhoneButton} onPress={()=>{Linking.openURL('tel:' + phone);}}>
              <Text style={styles.callText}>Call to {phone}</Text                                                                                                               >
            </TouchableOpacity>
          </View>
          
          <View style={styles.center}>
            <Text style={styles.label}>Email: </Text>
            <TouchableOpacity style={styles.linkText} onPress={()=>{Linking.openURL('mailto:' + email);}}>
              <Text style={styles.linkText}>{email}</Text>
            </TouchableOpacity>
            <Text></Text>
            
            <Text style={styles.label}>Address: </Text>
            <Text style={styles.value}>{address}</Text>
            <Text></Text>
            <Text style={styles.label}>Working hours:</Text>
            <Text style={styles.value}>{hours}</Text>
            <Text></Text>
            <Text style={styles.label}>Specialties</Text>
            <Text style={styles.value}>{desc}</Text>
          </View>
        
          <Text></Text>
          <Text style={styles.label}>Visit website for details</Text>

          <View style={styles.openWebsite}>
            <TouchableOpacity style={styles.linkButton} onPress={onClick}>
              <Text style={styles.linkText}>{website}</Text>
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
  clinicName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A6071',
    marginTop: 1,
    textAlign: 'center',
    marginBottom: 10,
  },
  callToPhone: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  calltoPhoneButton: {
    borderColor: '#4A6071',
    borderWidth: 2,
    marginHorizontal: 2,
    elevation: 6,
    backgroundColor: "#4A6071",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 8
  },
  linkButton: {
    borderColor: '#254058',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  linkText: {
    fontSize: 16,
    color: '#2e64e5',
    justifyContent: 'center'
  },
  callText: {
    fontSize: 16,
    color: '#FFF',
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
});