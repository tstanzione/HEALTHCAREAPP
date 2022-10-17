import React, { Component } from "react";

import {  
    View, 
    Text, 
    StyleSheet,
    ScrollView, 
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Linking
} from "react-native";


 export default class Disclaimer extends Component {
  
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
            style={styles.userImg} />
          <Text style={styles.title}>Disclaimer</Text>
          <Text></Text>
       
          <View style={styles.center}>        
            <Text style={styles.value}>Last updated: September 24, 2022</Text>
            <Text></Text> 
            <Text style={styles.value}>Interpretation and Definitions </Text> 
            <Text style={styles.value}>==============================</Text>
            <Text></Text> 
            <Text style={styles.value}>Interpretation  </Text>
            <Text style={styles.value}>--------------</Text>
            <Text></Text> 
            <Text style={styles.value}>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Text>
            <Text></Text> 
            <Text style={styles.value}>Definitions  </Text>
            <Text style={styles.value}>-----------</Text>
            <Text></Text> 
            <Text style={styles.value}>For the purposes of this Disclaimer:</Text>
            <Text></Text> 
            <Text style={styles.value}> * Company (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to FreeCare MD.</Text>
            <Text></Text> 
            <Text style={styles.value}> * Service refers to the Application.</Text>
            <Text></Text> 
            <Text style={styles.value}> * You means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Text>
            <Text></Text> 
            <Text style={styles.value}>* Application means the software program provided by the Company downloaded by You on any electronic device named FreeCare MD.</Text>
            <Text></Text> 
            <Text></Text> 
            <Text style={styles.value}>Disclaimer  </Text>
            <Text style={styles.value}>==========</Text>
            <Text></Text> 
            <Text style={styles.value}>The information contained on the Service is for general information purposes only.</Text>
            <Text></Text> 
            <Text style={styles.value}>The Company assumes no responsibility for errors or omissions in the contents of the Service.</Text>
            <Text></Text> 
            <Text style={styles.value}>In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the [TermsFeed Disclaimer Generator](https://www.termsfeed.com/disclaimer-generator/).</Text>
            <Text></Text> 
            <Text style={styles.value}> The Company does not warrant that the Service is free of viruses or other harmful components.</Text>
            <Text></Text> 
            <Text style={styles.value}>External Links Disclaimer  </Text>
            <Text style={styles.value}> =========================</Text>
            <Text></Text> 
            <Text style={styles.value}> The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.</Text>
            <Text></Text> 
            <Text style={styles.value}> Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</Text>
            <Text></Text> 
            <Text style={styles.value}> Errors and Omissions Disclaimer  </Text>
            <Text style={styles.value}> ===============================</Text>
            <Text></Text> 
            <Text style={styles.value}> The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.</Text>
            <Text></Text> 
            <Text style={styles.value}> The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</Text>
            <Text></Text> 
            <Text style={styles.value}> Fair Use Disclaimer  </Text>
            <Text style={styles.value}> ===================</Text>
            <Text></Text> 
            <Text style={styles.value}> The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.</Text>
            <Text></Text> 
            <Text style={styles.value}> The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.</Text>
            <Text></Text> 
            <Text style={styles.value}> If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.</Text>
            <Text></Text> 
            <Text style={styles.value}> Views Expressed Disclaimer  </Text>
            <Text style={styles.value}> ==========================</Text>
            <Text></Text> 
            <Text style={styles.value}> The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.</Text>
            <Text></Text> 
            <Text style={styles.value}> Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.</Text>
            <Text></Text> 
            <Text style={styles.value}> No Responsibility Disclaimer  </Text>
            <Text style={styles.value}> ============================</Text>
            <Text></Text> 
            <Text style={styles.value}> The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.</Text>
            <Text></Text> 
            <Text style={styles.value}> In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.</Text>
            <Text></Text> 
            <Text style={styles.value}> "Use at Your Own Risk" Disclaimer  </Text>
            <Text style={styles.value}> ==========</Text>
            <Text></Text> 
            <Text style={styles.value}> All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</Text>
            <Text></Text> 
            <Text style={styles.value}> The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.</Text>
            <Text></Text> 
            <Text></Text> 
            <Text style={styles.value}> Contact Us  </Text>
            <Text style={styles.value}> ==========</Text>
            <Text></Text> 
            <Text style={styles.value}> If you have any questions about this Disclaimer, You can contact Us:</Text>
            <Text></Text>            
            <Text style={styles.value}> * By email: </Text>
            <Text></Text> 
            <TouchableOpacity style={styles.linkText} onPress={()=>{Linking.openURL('mailto:FreeCareMD@gmail.com');}}>
                <Text style={styles.link}>{'FreeCareMD@gmail.com'}</Text>
            </TouchableOpacity> 
            <Text></Text> 
            <Text></Text>   
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
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2e64e5',
    textAlign: 'center',
  },
});
