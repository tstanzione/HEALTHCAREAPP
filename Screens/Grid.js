import React, { Component } from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  FlatList,
  Alert, 
  TouchableOpacity,
  Platform
} from "react-native";

  export default class Grid extends Component {
    constructor(props) {
      super(props);

      this.state = {
        GridViewItems: [
          { key: "Primary Care" },
          { key: "Pediatric" }, 
          { key: "Lab Testing" },
          { key: "Pulmonology" },
          { key: "Cardiology" },
          { key: "Neurology"},
          { key: "Dentist" },
          { key: "Mental Health" },
          { key: "Case Management" },
          { key: "Women Health" },
          { key: "Nutrition" },
          { key: "Vision" },
          { key: "Medical Respite Care" },
          { key: "Specialized Services" },
          { key: "Pain Management" },
          { key: "Immunization" },
          { key: "Social Services" } 
        ],
      };
    }

  //  GetGridViewItem(item) {
      //Alert.alert(item);
   // }

   // onClickListener = (viewId) => {
      //Alert.alert("Alert", "Button pressed " + viewId);
  //  };

    render(navigation){
  
      return (
        <View style={styles.MainContainer}>
          <FlatList
            data={this.state.GridViewItems}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.GridViewBlockStyle}
                 onPress={() => {this.props.navigation.navigate("MapNew", {item})}}
              >
                <Text style={styles.GridViewTextStyle} key={item.key} >{item.key}</Text>
              </TouchableOpacity>
            )}
            numColumns={2}
          />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    backgroundColor: "#EFEDDE",
    flex: 1,
    margin: 0,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
  GridViewBlockStyle: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 70,
    margin: 5,
    backgroundColor: "#4A6071",
  },
  GridViewTextStyle: {
    color: "#fff",
    padding: 5,
    fontSize: 18,
    justifyContent: "center",
  },
});