import React, { Component } from "react"; 
import Marker from "react-native-maps";
import MapView from "react-native-maps";

import { 
  View, 
  Text, 
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
  
let markers= []
let type = "";

export default class MapNew extends Component {

  constructor(props) {
    type = props.route.params.item.key
    markers= []
    super();
  }

  componentDidMount() {
   
    console.log("entered")
   //fetch("http://192.168.0.114/thais/response.php")
    responseJson=[
      {"id":"1","name":"Free Medical Clinic Watertown","address":"35 Church St, Watertown, MA 02472",
       "latitude":"42.367199","logitude":"-71.184448","timing":"closed from 3/15/20 until further notice",
       "phone":"5776787567", 
       "email":"metrobostonfreeclinic@gmail.com",
       "category":["Primary Care","Lab Testing","Pediatric", "Pulmonology","Women Health"],
       "description":"First aid\r\nminor illness\r\nwell child\r\nblood pressure testing\r\nblood sugar testing\r\nevaluate digestive problems\r\ntreat aches & pains\r\ndiagnose sinusitis\r\nbronchitis and pneumonias\r\nurine pregnancy tests\r\nprovide prescriptions\r\nfamily planning\r\n and more",
       "website": "https://www.metrobostonclinic.com/"},
       
      {"id":"2","name":"MetroWest Free Medical Program \r\n Adult Medicine","address":"Edward M. Kennedy\r\nCommunity Health Center\r\n3rd Floor 354 Waverly Street\r\nFramingham, MA 01702",
       "latitude":"42.27709","logitude":"-71.41385","timing":"Tuesday 5:30 pm - 8:30 pm",
       "phone":"5086560741", 
       "email":"",
       "category":["Primary Care"],
       "description":"General medical care\r\nPrescription medications\r\nReferrals for labs\r\nReferrals for x-rays\r\nReferrals for specialist care",
       "website": "https://metrowestfreemedicalprogram.org/"},

      {"id":"3","name":"MetroWest Free Medical Program \r\n Women's Health","address":"Edward M. Kennedy\r\nCommunity Health Center\r\n3rd Floor 354 Waverly Street\r\nFramingham, MA 01702",
       "latitude":"42.27709","logitude":"-71.41385","timing":"Thursday 5:30 pm - 8:30 pm",
       "phone":"5086560834", 
       "email":"",
       "category":["Women Health"],
       "description":"Exams\r\nPrescription medications\r\nReferrals for labs\r\nReferrals for x-rays\r\nReferrals for specialist care",
       "website": "https://metrowestfreemedicalprogram.org/"},
       
      {"id":"4","name":"MetroWest Free Medical Program : Vision","address":"Lexington Eye Associates\r\n534 Boston Post Road\r\nSudbury, MA 01776",
       "latitude":"42.36064","logitude":"-71.43120","timing":"Monthly Monday 5:30 pm - 8:30 pm",
       "phone":"5086560885", 
       "email":"",
       "category":["Vision"],
       "description":"Eye exams\r\n  Referrals to specialist care\r\nPrescriptions for eyeglasses\r\nReferrals for eyeglasses \r\nto get glasses at a low-cost",
       "website": "https://metrowestfreemedicalprogram.org/"},
       

      {"id":"5","name":"Boston Health Care for \r\nthe Homeless Program","address":"780 Albany Street\r\nBoston, MA 02118",
       "latitude":"42.33825684","logitude":"-71.06681824","timing":"based on services call for details",
       "phone":"8576541000", 
       "email":"info@bhchp.org",
       "category":["Primary Care","Mental Health","Pediatric","Medical Respite Care","Dentist","Specialized Services"],
       "description":"Adult Primary Care\r\nBehavioral Health\r\nFamily Services\r\nMedical Respite Care\r\nOral Health Services\r\nSpecialized Services",
       "website": "https://www.bhchp.org/"},
       
       
       
      {"id":"6","name":"The Sharewood Project","address":"First Church of Malden\r\n2 Elm Street\r\nMalden, MA 02148",
       "latitude":"42.42727","logitude":"-71.07951","timing":"Closed until further notice\r\n(Tuesday 6:30 pm - 9 pm)",
       "phone":"6176273616", 
       "email":"sharewood.director@gmail.com",
       "category":["Primary Care","Pediatric","Lab Testing"],
       "description":"school physicals\r\noral cancer screenings\r\nconfidential STD/HIV testing\r\n blood pressure screenings",
       "website": "https://medicine.tufts.edu/local-global-engagement/sharewood-project"},

      {"id":"7","name":" Cambridge Health Alliance at Malden\r\n(CHA Malden Family Medicine Center)","address":"CHA Malden Family Medicine Center\r\n195 Canal Street\r\nMalden, MA 02148",
      "latitude":"42.42012","logitude":"-71.07271","timing":" Closed until further notice",
      "phone":"7813380500", 
      "email":"",
      "category":["Primary Care","Pediatric","Lab Testing"],
      "description":"school physicals\r\noral cancer screenings\r\nconfidential STD/HIV testing\r\n blood pressure screenings",
      "website": "https://www.challiance.org/"},

      {"id":"8","name":"Volunteera in Medicine Bershire","address":"777 Main Street\r\nGreat Barrington, MA 01230",
      "latitude":"42.17981","logitude":"-73.36296","timing":"Monday – Friday 9 am – 5 pm",
      "phone":"4135284014", 
      "email":"",
      "category":["Primary Care","Dentist","Vision","Nutrition", "Pain Management", "Mental Health"],
      "description":"Medical\r\nDental\r\nBehavioral health\r\nOptometry\r\nNutrition counseling\r\nExercise therapy\r\nIntegrative pain management",
      "website": "https://vimberkshires.org/"},


      {"id":"9","name":"Trailside Health","address":"111 Bridge St\r\nShelburne Falls, MA 01370",
      "latitude":"42.60389","logitude":"-72.73495","timing":"Mon, Tues, and Thurs at 4 pm",
      "phone":"4136256240", 
      "email":"",
      "category":["Primary Care","Pediatric","Women Health","Mental Health"],
      "description":"Infants and children of all ages\r\nAdolescents, adults and all ages\r\nWomen with pregnancy and prenatal needs\r\n Mental health and addiction",
      "website": "https://cottagemed.org/"},

      {"id":"10","name":"AMHERST SURVIVAL CENTER\r\nFREE CLINICS","address":"138 Sunderland Rd\r\nAmherst, MA 01002",
      "latitude":"42.41485","logitude":"-72.53303","timing":"Monday  12 pm - 1 pm",
      "phone":"4135493968 ext.107", 
      "email":"lev@amherstsurvival.org",
      "category":["Primary Care","Pediatric"],
      "description":"Available for patients ages 2+",
      "website": "https://amherstsurvival.org"},

      {"id":"11","name":"BRIDGE OVER TROUBLED WATERS, INC.","address":"47 West Street\r\nBoston, MA 02111",
      "latitude":"42.35530","logitude":"-71.06304","timing":"Monday - Friday, 9:00 am - 4:30 pm",
      "phone":"6174239575", 
      "email":"jmorton@bridgeotw.org",
      "category":["Primary Care","Pediatric"],
      "description":"Our Mobile Medical Van,\r\nthe first program of its kind in the nation,vconnects with the street outreach team each weeknight.\r\n" +
      "The van is a national model\r\n for providing critical care: \r\nmedical attention, \r\nsurvival kits,\r\n clothes, \r\nfood, and \r\nreferrals to in-depth, \r\n"+
      "low barrier, \r\nopen intake services at Bridge,\r\n and other agencies.",
      "website": "https://www.bridgeotw.org/"},

      {"id":"11","name":"Health Care Without Walls","address":"41 West Street, 6th Floor\r\nBoston, MA 02111",
      "latitude":"42.35519","logitude":"-71.06257","timing":"Monday - Friday, 9:00 am - 4:30 pm",
      "phone":"8573155089", 
      "email":"jpeters@healthcarewithoutwalls.org",
      "category":["Primary Care","Women Health","Mental Health"],
      "description":"Acute illness diagnoses and referrals\r\nChronic disease management including:\r\n1. Blood pressure monitoring\r\n"+
                   "2. Blood sugar testing\r\nMedication management\r\nPrimary and specialist care referrals\r\n Health education",
      "website": "https://www.healthcarewithoutwalls.org/"},

      {"id":"12","name":"Outreach Van Project","address":"Boston University School of Medicine\r\n15 Albany St., L-109\r\nBoston, MA 02118",
      "latitude":"42.33500","logitude":"-71.07215","timing":"Every Thursday",
      "phone":"6178727782", 
      "email":"outreach@bu.edu",
      "category":["Primary Care","Immunization","Lab Testing"],
      "description":"basic medical screening\r\nincluding blood pressure and glucose checks\r\nas well as administer flu shots",
      "website": "https://www.bumc.bu.edu/busm/student-affairs/student-life/service-learning/outreach-van-project-2/"},
    

      {"id":"13","name":"Gratus Healthcare","address":"10 Pearl St.\r\nFramingham, MA 01701",
      "latitude":"42.28007","logitude":"-71.42001","timing":"Every Thursday",
      "phone":"4016476896", 
      "email":"gratishealthcare@gmail.com",
      "category":["Primary Care","Mental Health"],
      "description":"free medical and \r\nmental health services ",
      "website": "www.gratishealth.org"},
      
      {"id":"14","name":"Duffy Health Center","address":"94 Main Street\r\nHyannis, MA 02601",
      "latitude":"41.65647","logitude":"-70.27450","timing":"Monday - Friday, 9:00 am - 4:30 pm",
      "phone":"5087719599", 
      "email":"lisajones@duffyhealthcenter.org",
      "category":["Primary Care","Mental Health","Care Management"],
      "description":"Medical Care \r\nMental Health\r\nCare Management\r\nMedication Assisted Treatment",
      "website": "www.duffyhealthcenter.org"},

      {"id":"15","name":"Cape Cod Free Clinic\r\n Moore Nicola L MD","address":"107 Commercial St\r\nMashpee, MA 02649",
      "latitude":"41.60749","logitude":"-70.49063",
      "timing":"",
      "phone":"987788934", 
      "email":"",
      "category":["Primary Care"],
      "description":"Primary Care",
      "website": ""},
      

      {"id":"27","name":"Akwaaba Free Health Program","address":"International Central Gospel Church\r\n67 Vernon Street\r\nWorcester, MA 01610",
       "latitude":"42.25110","logitude":"-71.79457","timing":"Thursday 6 pm - 8 pm \r\n Closed: 11/25, 12/23, and 12/30 for the holidays",
       "phone":"5085560234","email":"worcesterfreeclinics@gmail.com",
       "category":["Primary Care","Lab Testing","Case Management"],
       "description":"Checkups\r\nSick Visits\r\nWork Physicals\r\nPrescription Refills\r\nCase Management\r\nLab Testing\r\nTB Reading",
       "website": "https://www.worcesterfreecare.org/akwaaba/"},

      {"id":"20","name":"Epworth Free Health Program","address":"Epworth Methodist Church\r\n64 Salisbury Street\r\nWorcester, MA 01609",
       "latitude":"42.27541","logitude":"-71.80256","timing":"Monday 6 pm - 8 pm",
       "phone":"5087522376","email":"worcesterfreeclinics@gmail.com",
       "category":["Primary Care","Lab Testing","Dentist","Vision","Pediatric"],
       "description":"Checkups\r\nSick Visits\r\nLab testing\r\nTB testing\r\nDental services (screening & exam)\r\nPediatric vaccinations (Patients 18 and under)\r\nEye clinic",
       "website": "https://www.worcesterfreecare.org/epworth/"},
      
      {"id":"21","name":"Wesley Eye and Ear Clinic","address":"Wesley United Methodist Church\r\n114 Main St\r\nWorcester, MA 01608",
       "latitude":"42.26926","logitude":"-71.80073","timing":"1st and 3rd Mondays each month, 6-8pm",
       "phone":"5087994191","email":"worcesterfreeclinics@gmail.com",
       "category":["Vision"],"description":"Vision Exams\r\nLow costs eyeglasses",
       "website": "https://www.worcesterfreecare.org/EyeAndEar"},

      {"id":"22","name":"Greenwood Street Free \r\nMedical Program","address":"Salem Covenant Church\r\n215 Mountain Street East\r\nWorcester, MA 01606",
       "latitude":"42.31865","logitude":"-71.77509","timing":"currently closed for the foreseeable future",
       "phone":"5088534071","email":"worcesterfreeclinics@gmail.com",
       "category":["Primary Care","Immunizations","Pediatric","Social Services"],
       "description":"Physical exams (work, school, general)\r\nCheck-ups\r\nSick visits\r\nImmunizations\r\nSocial services",
       "website": "https://www.worcesterfreecare.org/greenwood"},

      {"id":"23","name":"India Society Worcester\r\n Free Health Stop","address":"India Center’s Free Health Stop\r\n152 Main Street\r\nShrewsbury, MA 01545",
       "latitude":"42.29333","logitude":"-71.74907","timing":"Wednesday 6 pm - 8 pm",
       "phone":"5088429795","email":"FreeHealthStop@gmail.com",
       "category":["Primary Care","Pediatric","Dentist","Mental Health", "Nutrition","Cardiology"],
       "description":"Physical exams\r\nSick visits\r\nPediatrician-Weekly\r\nPsychiatrist available on request \r\n Dentist available on request \r\nDietitian available on request \r\n Cardiologist \r\n available on request",
       "website": "https://www.worcesterfreecare.org/imane"},

      {"id":"24","name":"St. Anne's Free Medical Program","address":"St. Anne's Church\r\n130 Boston Turnpike (Rt. 9)\r\nShrewsbury, MA 01545",
       "latitude":"42.27475","logitude":"-71.74876","timing":"Tuesdays 6pm - 8pm \r\n (Currently by appointments only) ",
       "phone":"5085236138","email":"worcesterfreeclinics@gmail.com",
       "category":["Primary Care","Pediatric","Lab Testing","Immunization","Social Services"],
       "description":"Work Physicals\r\nSchool Physical Exams\r\nSick Visits\r\nPrescription Refills\r\nImmunizations\r\nTuberculosis Testing\r\nHealth Insurance Help and Assistance\r\nPediatric services",
       "website": "https://www.worcesterfreecare.org/stAnnes"},

      {"id":"25","name":"St. Peter's Free Medical Program","address":"St. Peter’s Church\r\n929 Main St.\r\nWorcester, MA 01610",
       "latitude":"42.25118","logitude":"-71.82110","timing":"Tuesdays 6pm - 8pm ",
       "phone":"5085236500","email":"worcesterfreeclinics@gmail.com",
       "category":["Primary Care","Lab Testing","Case Management"],
       "description":"Work Physicals\r\nAdult Sick Visits\r\nPrescription Refills\r\nCase Management\r\nTuberculosis Testing",
       "website": "https://www.worcesterfreecare.org/stPeters"},

      {"id":"26","name":"Worcester Islamic Center\r\n Social Services (WICSS)","address":"Worcester Islamic Center\r\n248 East Mountain Street\r\nWorcester, MA 01606",
       "latitude":"42.31569","logitude":"-71.77392","timing":"Thursday 6pm - 8pm ",
       "phone":"7744202636","email":"worcesterfreeclinics@gmail.com",
       "category":["Primary Care","Pediatric","Lab Testing","Mental Health", "Neurology"],
       "description":"School Physical Exams\r\nSick visits\r\nCheckups\r\nLab testing- $50 charge\r\nTB Readings\r\nPediatrics (every 1st and 3rd Thursdays)\r\nPsychiatry available monthly \r\n Neurology available monthly per demand",
       "website": "https://www.worcesterfreecare.org/wicss"},
   
      {"id":"30","name":"UMass Memorial Ronald McDonald Care Mobile \r\n Autumn Woods Apartments","address":"Autumn Woods Apartments\r\n15 Upland Gardens Drive\r\nWorcester, MA 01607",
       "latitude":"42.22304","logitude":"-71.80353","timing":"Tuesdays and Wednesdays from 9am-3pm",
       "phone":"5083346073","email":"",
       "category":["Primary Care","Pediatric","Lab Testing","Dentist","Social Services"],
       "description":"Physical exams\r\nNon-urgent Sick visits\r\nWell-child and adolescent car\r\nLab testing\r\nDental\r\nSocial services",
       "website": "https://www.ummhealth.org/umass-memorial-medical-center/locations/ronald-mcdonald-care-mobile"},

      {"id":"31","name":"UMass Memorial Ronald McDonald Care Mobile \r\n Plumley Village","address":"Plumley Village\r\n34 Laurel Street\r\nWorcester, MA 01608",
       "latitude":"42.26938","logitude":"-71.79450","timing":"Tuesdays and Wednesdays from 9am-3pm",
       "phone":"5083346073","email":"",
       "category":["Primary Care","Pediatric","Lab Testing","Dentist","Social Services"],
       "description":"Physical exams\r\nNon-urgent Sick visits\r\nWell-child and adolescent car\r\nLab testing\r\nDental\r\nSocial services",
       "website": "https://www.ummhealth.org/umass-memorial-medical-center/locations/ronald-mcdonald-care-mobile"},

      {"id":"32","name":"UMass Memorial Ronald McDonald Care Mobile \r\n Bell Pond","address":"Bell Pond - Next to basketball court\r\nBelmont Street\r\nWorcester, MA 01605",
       "latitude":"42.27362","logitude":"-71.78037","timing":"Tuesdays and Wednesdays from 9am-3pm",
       "phone":"5083346073","email":"",
       "category":["Primary Care","Pediatric","Lab Testing","Dentist","Social Services"],
       "description":"Physical exams\r\nNon-urgent Sick visits\r\nWell-child and adolescent car\r\nLab testing\r\nDental\r\nSocial services",
       "website": "https://www.ummhealth.org/umass-memorial-medical-center/locations/ronald-mcdonald-care-mobile"},

      {"id":"33","name":"UMass Memorial Ronald McDonald Care Mobile \r\n Worcester Youth Center","address":"Worcester Youth Center\r\n326 Chandler Street\r\nWorcester, MA 01602",
       "latitude":"42.26195","logitude":"-71.82586","timing":"Tuesdays and Wednesdays from 9am-3pm",
       "phone":"5083346073","email":"",
       "category":["Primary Care","Pediatric","Lab Testing","Dentist","Social Services"],
       "description":"Physical exams\r\nNon-urgent Sick visits\r\nWell-child and adolescent car\r\nLab testing\r\nDental\r\nSocial services",
       "website": "https://www.ummhealth.org/umass-memorial-medical-center/locations/ronald-mcdonald-care-mobile"},

      {"id":"34","name":"UMass Memorial Ronald McDonald Care Mobile \r\n Friendly House","address":"Friendly House\r\n36 Wall Street\r\nWorcester, MA 01604",
       "latitude":"42.25864","logitude":"-71.78549","timing":"Tuesdays and Wednesdays from 9am-3pm",
       "phone":"5083346073","email":"",
       "category":["Primary Care","Pediatric","Lab Testing","Dentist","Social Services"],
       "description":"Physical exams\r\nNon-urgent Sick visits\r\nWell-child and adolescent car\r\nLab testing\r\nDental\r\nSocial services",
       "website": "https://www.ummhealth.org/umass-memorial-medical-center/locations/ronald-mcdonald-care-mobile"},
   
      {"id":"35","name":"UMass Memorial Ronald McDonald Care Mobile \r\n Green Island/Crompton Park","address":"Green Island/Crompton Park\r\n50 Canton Street\r\nWorcester, MA 01610",
       "latitude":"42.24990","logitude":"-71.80278","timing":"Tuesdays and Wednesdays from 9am-3pm",
       "phone":"5083346073","email":"",
       "category":["Primary Care","Pediatric","Lab Testing","Dentist","Social Services"],
       "description":"Physical exams\r\nNon-urgent Sick visits\r\nWell-child and adolescent car\r\nLab testing\r\nDental\r\nSocial services",
       "website": "https://www.ummhealth.org/umass-memorial-medical-center/locations/ronald-mcdonald-care-mobile"},

      {"id":"36","name":"UMass Memorial Ronald McDonald Care Mobile \r\n South Worcester Neighborhood Center","address":"South Worcester Neighborhood Center\r\n47 Camp Street\r\nWorcester, MA 01603",
       "latitude":"42.24264","logitude":"-71.81654","timing":"Tuesdays and Wednesdays from 9am-3pm",
       "phone":"5083346073","email":"",
       "category":["Primary Care","Pediatric","Lab Testing","Dentist","Social Services"],
       "description":"Physical exams\r\nNon-urgent Sick visits\r\nWell-child and adolescent car\r\nLab testing\r\nDental\r\nSocial services",
       "website": "https://www.ummhealth.org/umass-memorial-medical-center/locations/ronald-mcdonald-care-mobile"},
      
      {"id":"37","name":"UMass Memorial Ronald McDonald Care Mobile \r\nYMCA Central Branch","address":"YMCA Central Branch\r\n766 Main Street\r\nWorcester, MA 01610",
       "latitude":"42.25766","logitude":"-71.80981","timing":"Tuesdays and Wednesdays from 9am-3pm",
       "phone":"5083346073","email":"",
       "category":["Primary Care","Pediatric","Lab Testing","Dentist","Social Services"],
       "description":"Physical exams\r\nNon-urgent Sick visits\r\nWell-child and adolescent car\r\nLab testing\r\nDental\r\nSocial services",
       "website": "https://www.ummhealth.org/umass-memorial-medical-center/locations/ronald-mcdonald-care-mobile"},
   
      {"id":"38","name":"UMass Memorial Ronald McDonald Care Mobile \r\n Our Lady of Loreto Church","address":"Our Lady of Loreto Church\r\n33 Massasoit Road\r\nWorcester, MA 01604",
       "latitude":"42.24969","logitude":"-71.77879","timing":"Tuesdays and Wednesdays from 9am-3pm",
       "phone":"5083346073","email":"",
       "category":["Primary Care","Pediatric","Lab Testing","Dentist","Social Services"],
       "description":"Physical exams\r\nNon-urgent Sick visits\r\nWell-child and adolescent car\r\nLab testing\r\nDental\r\nSocial services",
       "website": "https://www.ummhealth.org/umass-memorial-medical-center/locations/ronald-mcdonald-care-mobile"},

      {"id":"39","name":"UMass Memorial Ronald McDonald Care Mobile \r\n Clinton Public School Building","address":"Clinton Public School Building\r\n150 School Street\r\nClinton, MA 01510",
       "latitude":"42.41781","logitude":"-71.68656","timing":"Tuesdays and Wednesdays from 9am-3pm",
       "phone":"5083346073","email":"",
       "category":["Primary Care","Pediatric","Lab Testing","Dentist","Social Services"],
       "description":"Physical exams\r\nNon-urgent Sick visits\r\nWell-child and adolescent car\r\nLab testing\r\nDental\r\nSocial services",
       "website": "https://www.ummhealth.org/umass-memorial-medical-center/locations/ronald-mcdonald-care-mobile"}
      ]

 
   
        //.then((response) => 
      //response.json())
      
     // .then((responseJson) => 
    // {
    console.log("selected type is : " +  type)
    console.log("responce is : "+responseJson)
    responseJson.map(item =>  {
      console.log("response is :"+item.address)
      console.log("response is :"+item.category)
      item.category.map(c => {
        if(c == type ) {
          markers.push({ 
            title: item.name,
            category: item.category,
            description: item.description,
            address : item.address,
            snippet : item.phone,
            email : item.email,
            hours : item.timing,
            website : item.website,
            coordinates: {
              latitude: parseFloat(item.latitude),
              longitude: parseFloat(item.logitude),
            },  
          })
        }
      } )           
      this.setState({})
    });
   
  }
  //)
      //.catch((error) => { 
     //   this.setState({
        
    //  })
    //    console.log("responce is exceptio  ");
    //    console.error(error);
    //    Alert.alert("Alert", "API Fal " );
     // }//);
  //}

 
  render() { 

    return (
      <View style={styles.MainContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude:  42.367199,
            longitude: -71.43386078,
          //latitude: markers[0].latitude,
          // longitude: markers[0].longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 1,
          }}
        >
        {markers.map(marker => (
          <MapView.Marker 
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}  
          >
          <MapView.Callout onPress={() =>  this.props.navigation.navigate("Details", {
            marker,
            })}>
          <TouchableHighlight  underlayColor='#B5BCB7'>
            <View style={styles.detailsView}>
              <Text style={styles.title}>{marker.title}</Text>
              <Text></Text>
              <Text style={styles.label}>Specialties</Text>
              {marker.category.map(specialty => (
                <Text style={styles.specialtyName}>{specialty}</Text>
              ))} 
              <Text></Text>
              <Text style={styles.link}>click here for details</Text>
            </View>
          </TouchableHighlight>
         </MapView.Callout>
      </MapView.Marker>
      ))}
  </MapView>
</View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    flexDirection: 'column',
  },
  title: { 
    fontSize: 14,
    fontWeight: "bold", 
    fontStyle:"italic", 
    color: '#4A6071' 
  },
  specialtyName: { 
    fontSize: 12,
    color: '#4A6071',
    textAlign: 'center', 
  },
  link: { 
    fontSize: 12,
    color: '#2e64e5',
    textAlign: 'center', 
  },
  detailsView:{
    underlayColor:'#B5BCB7',
    justifyContent: "center",
    flex:1,
  },
  label: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#4A6071',
      marginBottom: 5,
      textAlign: 'center',
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});







