import React,{useState, useEffect, ReactDOM} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {View, Text, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, Button, Image,PermissionsAndroid, ActivityIndicator, FlatList} from 'react-native';
import {ScrollView, TextInput} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import Evilicon from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconRt from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import { and, color } from 'react-native-reanimated';
//import styled from "styled-components/native";
import Video from "react-native-video";
import Corona from "./corona.mp4";
import ReactFetchImage, { fetchBase64 } from 'react-fetch-image'
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import {launchImageLibrary} from 'react-native-image-picker/src';
import {Provider as PaperProvider, DarkTheme as PaperDarkTheme} from 'react-native-paper';


var back_img = require('./Bharat.png');
var logo_img = require('./Logo.png');
var company = require('./logo2.png');
var space = require('./space.jpeg');
var login = require('./login.png');
var lock = require('./lock.webp');
var IconName='toggle-left';






function CustomHeader({title, isHome, navigation}) {
    return (
        <View style={{flexDirection: 'row', height: 50}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                 {
                     isHome?
                     <View>
                     <View>
                     <TouchableOpacity 
                     onPress={() => navigation.openDrawer()}>
                          <IconFeather style={{marginLeft: 10}} name="menu" size={30}/>
                     </TouchableOpacity>
                     </View>
                     
                      <View>     
                     <TouchableOpacity>
                         <IconEntypo style={{flex: 1, marginRight: 10, position: 'absolute', left: 355, bottom: 0}} name="dots-three-vertical" size={25}/>
                     </TouchableOpacity>
                     </View>
                    </View>
        
                     :
                     <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}}
                     onPress={() => navigation.goBack()}>
                         <View style={{ flex: 1, justifyContent: 'center'}}>
                             <Ionicons style={{marginLeft: 10}} name="ios-chevron-back" size={30}/>
                         </View>
                     </TouchableOpacity>
                 }
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center'}}>
                <Text style={{textAlign: 'center'}}>{title}</Text>
            </View>
            <View style={{ flex: 1}}></View>

        </View>

     );
}



function CustomDrawerContent({Key,data,props}) {
    
    return(
        <SafeAreaView style={{flex: 1,top:20}}>
            <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
                <Evilicon name="user" size={200}/>
                <Text style={{color:'blue', fontWeight:'bold',fontSize:20}}>{data}</Text>
            </View>
                <TouchableOpacity style={{flexDirection: 'row', marginLeft: 10, marginTop: '17%', color:'blue'}} onPress={() => props.navigation.navigate('MenuTab')}>
                    <Ionicons name="home-outline" size={23}/>  
                    <Text style={{marginLeft: 30 ,marginTop: 1}}> Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', marginLeft: 10, marginTop: 10 , marginTop: 20, color:'blue'}} onPress={() => props.navigation.navigate('Notifications')}>
                    <Ionicons name="notifications-outline" size={23}/>
                    <Text style={{marginLeft: 30}}>Notifications</Text>
                    <View style={{marginLeft: 50, borderColor:'red', borderWidth:2, paddingLeft:2, paddingRight:2,backgroundColor:"red"}}>
                    <Text style={{color:"white",fontWeight:"bold"}}>{Key}</Text>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', marginLeft: 10, marginTop: 10 , marginTop: 20, color:'blue'}} onPress={() => props.navigation.navigate('AboutUs')}>
                    <IconEntypo name="info" size={23}/>
                    <Text style={{marginLeft: 30}}>About us</Text>
                </TouchableOpacity>

                <Text style={{marginTop: 35, marginLeft:17}}>Preferences</Text>
                <TouchableOpacity style={{flexDirection: 'row', marginLeft: '5%', marginTop:'10%', color:'blue'}} onPress={() => props.navigation.navigate('Login')}>
                    <Ionicons name="log-out-outline" size={23}/>
                    <Text style={{marginLeft: 30}}>Sign out</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
};


function HomeScreen({navigation}) {
    
    const [data, setData] = useState("");
    const [count, setcount] = useState("true");
    const [count2, setcount2] = useState("true");
   
    const [count3, setcount3] = useState("true");
    
    const [count4, setcount4] = useState("true");
    
    const [count5, setcount5] = useState("true");

    const flipName = ()=>{
          setcount(count ? false:true);
    };
    const flipName2 = ()=>{
        setcount2(count2 ? false:true);
    };
    const flipName3 = ()=>{
        setcount3(count3 ? false:true);
    };
    const flipName4 = ()=>{
        setcount4(count4 ? false:true);
    };
    const flipName5 = ()=>{
        setcount5(count5 ? false:true);
        count5?alert("Thanks for rating us"):alert("We will try to provide you better experince")
    };

    const Encryption=()=>{
        navigation.navigate('Encryption')
    }
    const Decryption=()=>{
        navigation.navigate('Decryption')
    }

     
      
      const getdata = ()=>{
          fetch('http://192.168.43.178:3000/SEDSuite/home')
          .then((response) => response.json())
          .then((responseJson) =>{
              setData(responseJson.key);
              console.log(responseJson);
          })
          .catch((error)=>{
              console.error(error);
          })
      };
      useEffect(()=>{
        getdata()
    })
    return(

        <SafeAreaView style={{flex:1, overflow:"scroll"}}>
            
            <CustomHeader title="Home" isHome={true} navigation={navigation} />
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{height:'35%', width:'96%', backgroundColor:"purple", borderRadius:25, overflow:"hidden"}}>
                    <ImageBackground
                    source={space}
                    style={{height:'100%', width:'100%',position:"absolute" }}
                    resizeMode='cover'>
                    </ImageBackground>
                    <Text style={{left:'5%',marginTop:'40%',color:"white", fontSize:40,fontWeight:"bold"}}>Welcome {data}!</Text>
                </View>
                <View style={{flex:0,marginTop:'5%',height:'14%', width:'96%', backgroundColor:"blue", borderRadius:25, flexDirection:"row"}}>
                    <Text style={{left:'17%',color:"white", fontSize:25,fontWeight:"bold",marginTop:'8%'}}>SE Encryption</Text>
                        <TouchableOpacity 
                        style={{color:"white", left:'140%', marginTop:'8%'}}
                        onPress={()=>Encryption()}>
                        <IconRt name ="rightcircle" color="white" size={40}/>
                        </TouchableOpacity>
        
                </View>
                <View style={{marginTop:'5%',height:'14%', width:'96%', backgroundColor:"blue", borderRadius:25, flexDirection:"row"}}>
                    <Text style={{left:'15%',color:"white", fontSize:25,fontWeight:"bold", marginTop:'8%'}}>SD Decryption</Text>
                    <TouchableOpacity 
                        style={{color:"white", left:'140%', marginTop:'8%'}}
                        onPress={()=>Decryption()}>
                        <IconRt name ="rightcircle" color="white" size={40}/>
                    </TouchableOpacity>
                
                
                
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center',marginTop:'10%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: '100%', textAlign: 'center',fontSize:20, fontWeight:"bold",color:'grey'}}>Rate us</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>
                
                <View style={{marginTop:'5%',height:'13%', width:'96%', backgroundColor:"blue", borderRadius:25, flexDirection:"row"}}>
                    
                    <View style={{flex:1,left:'3%', marginTop:'5%', flexDirection:"row"}}>
                    <TouchableOpacity 
                    style={{color:"white",marginLeft:48}}
                    onPress={()=>flipName()}>
                    <IconRt name ={count?'staro':'star'} color={count?'white':'yellow'} size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{color:"white",marginLeft:15}}
                    onPress={()=>flipName2()}>
                    <IconRt name ={count2?'staro':'star'} color={count2?'white':'yellow'} size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{color:"white",marginLeft:15}}
                    onPress={()=>flipName3()}>
                    <IconRt name ={count3?'staro':'star'} color={count3?'white':'yellow'} size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{color:"white",marginLeft:15}}
                    onPress={()=>flipName4()}>
                    <IconRt name ={count4?'staro':'star'} color={count4?'white':'yellow'} size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{color:"white",marginLeft:15}}
                    onPress={()=>flipName5()}>
                    <IconRt name ={count5?'staro':'star'} color={count5?'white':'yellow'} size={40}/>
                    </TouchableOpacity>
                    </View>

                </View>
                
               
            </View>
        </SafeAreaView>
        
    );
}

function HomeScreenDetail({navigation}) {
    return(
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title="HomeDetail" navigation={navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>HomeScreen</Text>
            </View>
        </SafeAreaView>
        
    );
}



function EncryptionScreen({navigation}) {
    const [message, setMessage] = useState("")
    const [key, setKey] = useState("")
    

    const sumbitData = () => {
        fetch(`http://192.168.43.178:3000/SEDSuite`,{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message,
              key
            }),
        })
          .then(res => res.json())
          .then(data=>{
              console.log(data);
          })
          .catch((error) => console.log(error))
      }
      
    const REMOTE_IMAGE_PATH ="http://192.168.43.178:3000/profile.png";
    const checkPermission = async () => {
        
        // Function to check the platform
        // If iOS then start downloading
        // If Android then ask for permission

        if (Platform.OS === 'ios') {
        downloadImage();
        } else {
        try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Storage Permission Required',
                message:
                'App needs access to your storage to download Photos',
            }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // Once user grant the permission start downloading
            console.log('Storage Permission Granted.');
            downloadImage();
            } else {
            // If permission denied then show alert
            alert('Storage Permission Not Granted');
            }
        } catch (err) {
            // To handle permission related exception
            console.warn(err);
        }
        }
    };

    const downloadImage = () => {
        // Main function to download the image
        
        // To add the time suffix in filename
        let date = new Date();
        // Image URL which we want to download
        let image_URL = REMOTE_IMAGE_PATH;    
        // Getting the extention of the file
        let ext = getExtention(image_URL);
        ext = '.' + ext[0];
        // Get config and fs from RNFetchBlob
        // config: To pass the downloading related options
        // fs: Directory path where we want our image to download
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
        fileCache: true,
        addAndroidDownloads: {
            // Related to the Android only
            useDownloadManager: true,
            notification: true,
            path:
            PictureDir +
            '/image_' + 
            'unhide' +
            ext,
            description: 'Image',
        },
        };
        config(options)
        .fetch('GET', image_URL)
        .then(res => {
            // Showing alert after successful downloading
            console.log('res -> ', JSON.stringify(res));
            alert('Image Downloaded Successfully.');
        });
    };

    const getExtention = filename => {
        // To get the file extension
        return /[.]/.exec(filename) ?
                /[^.]+$/.exec(filename) : undefined;
    };

    const getImage = ()=>{
        checkPermission();
        navigation.navigate('EncryptionDetail')

    };
    return(
        <SafeAreaView style={{flex :1}}>
            <CustomHeader title="Encryption" isHome={true} navigation={navigation}/>
            <View style={styles.MainContainer}>
            <TextInput
            label='message'
            value={message}
            onChangeText={text =>setMessage(text)}
            placeholder={"Plain Text"}
            placeholderTextColor={"rgb(0, 0, 255)"}
            style={styles.txtStyle}/>

            <TextInput
            label='key'
            value={key}
            placeholder={"Encryption Key"}
            onChangeText={text=>setKey(text)}
            placeholderTextColor={"rgb(0, 0, 255)"}
            keyboardType={"numeric"}
            style={styles.txtStyle}/> 

            <TouchableOpacity style={{marginTop: 20,backgroundColor:"orange",borderWidth:2, borderColor:"orange",borderRadius:50, marginBottom:10}} onPress={()=>sumbitData()}>
                <Text style={{padding:10,left:140,fontWeight:'bold',fontSize:20}}>Hide</Text>
                
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 20,backgroundColor:"orange",borderWidth:2, borderColor:"orange",borderRadius:50, marginBottom:10}} onPress={() => getImage()}>
                <Text style={{padding:10,left:100,fontWeight:'bold',fontSize:20}}>Download Image</Text>
                
            </TouchableOpacity>
        </View>
        </SafeAreaView>
        
    );
}

function EncryptionScreenDetail({navigation}) {
    return(
        <SafeAreaView style={{flex :1}}>
            <CustomHeader title="EncryptionDetail" navigation={navigation}/>
            <View style={styles.MainContainer}>
            

            <ImageBackground
            style={{ height: 264, width: 264 }}
            source={{uri:"http://192.168.43.178:3000/profile.png"}}>
            </ImageBackground>

           
        </View>
        </SafeAreaView>
        
    );
}

function DecryptionScreen({navigation}) {
    const [key, setKey] = useState("");
    const [photo, setphoto] = useState("");

   
    const handlePicker = () => {
        const options = {
            title: 'select Image',
            storageOptions:{
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
          console.log('Response = ', response);

          if (response.uri) {
              setphoto({photo:response})
          }
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = {uri: response.uri};
            const data = new FormData();

            data.append('decrypt', {
                uri : response.uri,
                type: response.type,
                name: response.fileName,
            });
            const config = {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            },
            body: data,
            };
        // image start to upload on server so on header set text is 'Updating..'
            fetch('http://192.168.43.178:3000/SEDSuite/images/decrypt/',config)
              .then((checkStatusAndGetJSONResponse)=>{
                  console.log(checkStatusAndGetJSONResponse);
              }).catch((error) => {
                console.log('upload error', error);
              });
          }
        });
      };

      const getdata = ()=>{
          fetch('http://192.168.43.178:3000/SEDSuite/',{method:'GET'})
          .then((response) => response.json())
          .then((responseJson) =>{
              alert(responseJson.message);
              console.log(responseJson.message);
          })
          .catch((error)=>{
              console.error(error);
          })
          
      };

    
    return(
        <SafeAreaView style={{ flex: 1}}>
        <CustomHeader title="Decryption" isHome={true} navigation={navigation}/>
        <View style={styles.MainContainer}>
            
            

            <TextInput
            label='key'
            placeholder={"Decryption Key"}
            placeholderTextColor={"rgb(0, 0, 255)"}
            keyboardType={"numeric"}
            onChangeText={text=>setKey(text)}
            style={styles.txtStyle}/> 

            <TouchableOpacity style={{marginTop: 20,backgroundColor:"orange",borderWidth:2, borderColor:"orange",borderRadius:50, marginBottom:10}} onPress={()=>handlePicker()}>
                <Text style={{padding:10,left:100,fontWeight:'bold',fontSize:20}}>Upload Image</Text>
                
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 20,backgroundColor:"orange",borderWidth:2, borderColor:"orange",borderRadius:50, marginBottom:10}} onPress={()=>getdata()}>
                <Text style={{padding:10,left:130,fontWeight:'bold',fontSize:20}}>Unhide</Text>
                
            </TouchableOpacity>
        </View>

        </SafeAreaView>
        
    );
}



function SettingsScreen({navigation}) {
    return(
        <SafeAreaView style={{ flex : 2}}>
            <CustomHeader title="what's new" isHome={true} navigation={navigation}/>
            <SafeAreaView >
            <View style={{flexDirection: 'row', alignItems: 'center',marginTop:'1%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: '100%', textAlign: 'center',fontSize:20, fontWeight:"bold",color:'green'}}>Current Version V.1.0</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={{margin:"5%",fontSize:17,color:'blue'}}>Features 
                    {"\n"} --Capable with image steganography
                    {"\n"}--using LSB Steganography Method 
                    {"\n"}--Use of Keys to encrypt and Decrypt data
                    {"\n"}--using symmetrical cryptography
                    {"\n"}--only process message with image
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center',marginTop:'5%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: '100%', textAlign: 'center',fontSize:20, fontWeight:"bold",color:'green'}}>Upcoming Version V.1.1</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={{margin:"5%", fontSize:17,color:'blue'}}>Features
                {"\n"}--Capable with image & mp3,mp4 steganography
                {"\n"}--using LSB Steganography Method 
                {"\n"}--Use of Keys to encrypt and Decrypt data
                {"\n"}--using symmetrical cryptography
                {"\n"}--only process message with image
                {"\n"}{"\n"}{"\n"}Release Date: 1 July 2021
            </Text>
            <Text style={{left:'40%',marginTop:'10%',fontWeight:'bold'}}> Version 1.0</Text>
            <Text style={{left:'23%',fontWeight:'bold'}}> Copyright {'\u00A9'} 2021 ALT technologies</Text>
            <Text style={{left:'36%',fontWeight:'bold'}}>All right reserved</Text>
        </SafeAreaView>
        </SafeAreaView>
        
    );
}

function NotificationsScreen({ navigation }) {
    const [message, setmessage] = useState(0);
    const getdata = ()=>{
        fetch('http://192.168.43.178:3000/SEDSuite/notifications')
        .then((response) => response.json())
        .then((responseJson) =>{
            setmessage(responseJson.message);
            console.log(responseJson);
        })
        .catch((error)=>{
            console.error(error);
        })
    };
    useEffect(()=>{
        getdata()
        
    })
    return (
        <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Notifications" navigation={navigation}/>
            <View style={{width:'100%',height:'10%',top:'0%',borderWidth:2,borderColor:'blue' }}>
            <ImageBackground
                    source={logo_img}
                    style={{height:'100%', width:'48%',position:"absolute" }}
                    resizeMode='cover'>
                    </ImageBackground>
                <Text style={{left:'25%',top:'20%', color:'blue',fontWeight:'bold',fontSize:20}}>{message}</Text>
            </View>
        </SafeAreaView>
     
    );
}



function AboutUsScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="AboutUs" navigation={navigation}/>
            <View style={{ flex: 1, alignItems: 'center'}}>
                <ImageBackground
                source={company}
                style={{flex : 1, height:'60%', width:'90%', overflow:'hidden', justifyContent:'center', alignContent:'center',position:'absolute', top: 20, left: 35}}
                resizeMode='contain'/>
                <Text style={{marginLeft:20, marginTop:290, marginRight:15,color:'blue'}}>ALT technologies always work for the betterment of society and aims to innovate and develop an idea into a technology. We always try to endorse the change through technology... We are launching Our first product called "SED Suite" in the field of Security and we will be always optimistic and try to achieve our organisation goal. The developemnt of any project needs an extraordinary workflow. You can also be part of our group. if you wanna part of our workflow just connect with us.</Text>
                <TouchableOpacity style={{flexDirection: 'row', marginLeft: 10, marginTop: 10 , marginTop: 20, color:'blue'}}>
                    <IconEntypo style={{margin:20}} name="linkedin" size={37}/>
                    <IconEntypo style={{margin:20}} name="github" size={37}/>
                    <IconEntypo style={{margin:20}} name="twitter" size={37}/>
                    <IconEntypo style={{margin:20}} name="email" size={37}/>

                    
                </TouchableOpacity>
            </View>


        </SafeAreaView>
     
    );
}


function LoginScreen({navigation}) {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const Loginuser = () => {
        fetch(`http://192.168.43.178:3000/SEDSuite/login`,{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Email,
              Password,
            }),
        })
          .then((response) => response.json())
          .then((responseJson)=>{
              if(responseJson.status==="400"){
                alert(responseJson.message);
              }
              else{
                alert("Login Successfull")
                navigation.navigate('HomeApp');
                
              }
                
          })
          .catch((error) => console.log(error))
      }
    return(
        <SafeAreaView style={{ flex: 1}}>
            <View style={{flex:1,backgroundColor:'blue'}} >
               <ImageBackground
                source={login}
               style={{height:'59%', width:'100%',top:'0%',bottom:'0%',overflow:'hidden',position:'absolute'}}
               resizeMode='cover'>
               </ImageBackground>
                <View style={styles.footer}>
                    
                    <Text style={{left:'39%',top:'5%',fontSize:34, fontWeight:'bold'}}>Login</Text>
                    
                    <View style={{zIndex:4,top:'3%',padding:20 }}>
                       
                        <TextInput
                        label='Email'
                        value={Email}
                        onChangeText={text =>setEmail(text)}
                        placeholder={"E-mail"}
                        placeholderTextColor={"rgb(0, 0, 255)"}
                        style={{borderBottomWidth:2,
                        borderBottomColor:'blue' ,zIndex: 4, backgroundColor:"white"
                        }}/>
    
                        <TextInput
                        label='Password'
                        secureTextEntry={true}
                        value={Password}
                        onChangeText={text =>setPassword(text)}
                        placeholder={"Password"}
                        placeholderTextColor={"rgb(0, 0, 255)"}
                        style={{borderBottomWidth:2,
                        borderBottomColor:'blue',
                        marginTop:'5%',
                        marginBottom:'1%',
                        }}/>
                        <Text style={{marginTop:0,left:'68%', fontWeight:"bold",color:'blue'}}>Forgot Password?</Text>
                        <TouchableOpacity style={{top: '10%', zIndex: 4, left:'1%',borderWidth: 2, borderColor: 'white',borderWidth: 2, borderRadius: 50, backgroundColor:'rgb(10, 10, 255)'}} onPress={() => Loginuser()} >
                            <Text style={{left:'30%', fontSize: 20, color:'rgb(255, 255, 255)', padding:'3%', paddingLeft:'10%', paddingRight:'10%'}}>Login</Text>
                        </TouchableOpacity>
                        

                        
                        <Text style={{marginTop:'19%', left: '40%',marginBottom:'10%'}}>or, login with...</Text>
                        
                        <View style={{flexDirection:"row", left:'8%',bottom:'5%'}}>
                            <TouchableOpacity style={[styles.container,{backgroundColor:'#3b5c8f'}]}>
                                <Icon style={styles.accIcon} name="facebook"/>
                                <Text style={styles.textTitle}>Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.container,{backgroundColor:'#ec482f'}]}>
                                <Icon style={styles.accIcon} name="google"/>
                                <Text style={styles.textTitle}>Google</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center', top:'0%'}}>
                            <Text style={{top:'1%'}}>New to SEDSuite?</Text>
                            <TouchableOpacity style={{zIndex: 4, left:'4%'}} onPress={() => navigation.navigate('Register')} >
                            <Text style={{fontSize:20, color:'rgb(10, 20, 254)'}}>Register</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
               </View>
            </View>
           
        </SafeAreaView>
    );
}

function RegisterScreen({navigation}) {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    

    const registerUser = () => {
        fetch(`http://192.168.43.178:3000/SEDSuite/registerUser`,{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Name,
              Email,
              Password
            }),
        })
          .then((response) => response.json())
          .then((responseJson) =>{
            alert(responseJson.message || "Registered Successfully");
        })
          .catch((error) => console.log(error))
      };
      
    return (
        <SafeAreaView style={{ flex: 2}}>
            <CustomHeader title="Register" navigation={navigation}/>
            <View style={{height:'40%',width:'100%'}}>
                <Text style={{fontSize:30, fontWeight:'bold', left:'12%'}}>#SAY NO TO CORONA</Text>
                <Video
                source={Corona}                                   
                  rate={1.0}                              
                  volume={1.0}                            
                  muted={false}                           
                  paused={false}                          
                  resizeMode="contain"                     
                  repeat={true}                           
                  playInBackground={false}                
                  playWhenInactive={false}                
                  ignoreSilentSwitch={"ignore"}           
                  progressUpdateInterval={250.0}          
                style={styles.video}
                />
            </View>
            <View style={{zIndex:4,padding:'5%',top:'8%' }}>
                        <TextInput
                        label='Name'
                        value={Name}
                        onChangeText={text =>setName(text)}
                        placeholder={"Name"}
                        placeholderTextColor={"rgb(0, 0, 255)"}
                        style={{borderBottomWidth:2,
                        borderBottomColor:'blue' ,zIndex: 4
                        }}/> 
                        

                        <TextInput
                        label='Email'
                        value={Email}
                        onChangeText={text =>setEmail(text)}
                        placeholder={"E-mail"}
                        placeholderTextColor={"rgb(0, 0, 255)"}
                        style={{borderBottomWidth:2,
                        borderBottomColor:'blue' ,zIndex: 4
                        }}/>
    
                        <TextInput
                        label='Password'
                        secureTextEntry={true}
                        value={Password}
                        onChangeText={text =>setPassword(text)}
                        placeholder={"Password"}
                        placeholderTextColor={"rgb(0, 0, 255)"}
                        keyboardType={"numeric"}
                        style={{borderBottomWidth:2,
                        borderBottomColor:'blue',
                        marginTop:10,
                        marginBottom:25,
                        }}/> 
                        <TouchableOpacity style={{top: '5%', zIndex: 4, left:'2%',borderWidth: 2, borderColor: 'white',borderRadius: 50, backgroundColor:'rgb(10, 10, 255)'}} onPress={() => registerUser()} >
                            <Text style={{left:'37%', fontSize: 20, color:'rgb(255, 255, 255)', padding:10,}}>Register</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center', top:'5%'}}>
                            <Text style={{top:6}}>Already Registered?</Text>
                            <TouchableOpacity style={{zIndex: 4, left:'3%'}} onPress={() => navigation.navigate('Login')} >
                            <Text style={{fontSize:20, color:'rgb(10, 20, 254)'}}>Login</Text>
                            </TouchableOpacity>
                        </View>

            </View>
        </SafeAreaView>
     
    );
}

function splash({navigation}) {
    setTimeout(() => {
        navigation.replace('Login');
    }, 9000);
    return(
            <View style = {styles.splasContainer}>
                
                
            <ImageBackground
            source={logo_img}
            style={{flex : 1, height:'55%', width:'70%', overflow:'hidden', justifyContent:'center', alignContent:'center',position:'absolute', top:'5%', left:'27%'}}
            resizeMode='contain'>
            </ImageBackground>
            <Text style={{color:'black',fontSize:45, top:'0%'}}>SED Suite</Text>
                <Text style={{color: 'white', marginTop:'30%', left:'1%'}}>powered by</Text>
                <ImageBackground
                source={company}
               style={{flex : 1, height:'55%', width:'40%', overflow:'hidden', justifyContent:'center', alignContent:'center',position:'absolute', top:'57%', left:'43%'}}
               resizeMode='contain'>
            </ImageBackground>
                <Text style={{color: 'white', fontSize:30}}>ALT technologies</Text>
            <ImageBackground
            source={back_img}
            style={{flex : 1, height:'60%', width:'90%', overflow:'hidden', justifyContent:'center', alignContent:'center',position:'absolute', top:'75%', left:'10%'}}
            resizeMode='contain'
            >
            </ImageBackground>
            </View>
            
        );
}


const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
    headerShown: false
})
const StackHome = createStackNavigator();
function HomeStack() {
    return (
        <StackHome.Navigator initialRouteName="Home">
            <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
            <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
        </StackHome.Navigator>
    );
}
const StackEncrypt = createStackNavigator();
function EncryptionStack() {
    return (
        <StackEncrypt.Navigator initialRouteName="Home">
            <StackEncrypt.Screen name="Encryption" component={EncryptionScreen} options={navOptionHandler}/>
            <StackEncrypt.Screen name="EncryptionDetail" component={EncryptionScreenDetail} options={navOptionHandler}/>
        </StackEncrypt.Navigator>
    );
}
const StackDecrypt = createStackNavigator();
function DecryptionStack() {
    return (
        <StackDecrypt.Navigator initialRouteName="Home">
            <StackDecrypt.Screen name="Decryption" component={DecryptionScreen} options={navOptionHandler}/>
        </StackDecrypt.Navigator>
    );
}
const StackSettings = createStackNavigator();
function SettingsStack() {
    return (
        <StackSettings.Navigator initialRouteName="Home">
            <StackSettings.Screen name="Settings" component={SettingsScreen} options={navOptionHandler}/>
        </StackSettings.Navigator>
    );
}

function TabNavigator() {
    return(
        <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
              
                          if (route.name === 'Home') {
                            iconName = focused
                              ? 'home'
                              : 'home-outline';
                          } else if (route.name === 'Encryption') {
                            iconName = focused ? 'lock-closed' : 'lock-closed-outline';
                          } else if (route.name === 'Decryption') {
                            iconName = focused ? 'lock-open' : 'lock-open-outline';
                          } else if (route.name === "what's new") {
                            iconName = focused ? 'md-rocket' : 'md-rocket-outline';
                          }
              
                          // You can return any component that you like here!
                          return <Ionicons name={iconName} size={size} color={color} />;
                        },
                      })}
                      tabBarOptions={{
                        activeTintColor: 'blue',
                        inactiveTintColor: 'black',
                      }}>
                <Tab.Screen name="Home"  component={HomeStack} />
                <Tab.Screen name="Encryption" component={EncryptionStack} />
                <Tab.Screen name="Decryption" component={DecryptionStack} />
                <Tab.Screen name="what's new" component={SettingsStack} />
            </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
        const [Key, setKey] = useState(0);
        const [data, setData] = useState("")
        const getdata = ()=>{
            fetch('http://192.168.43.178:3000/SEDSuite/home1')
            .then((response) => response.json())
            .then((responseJson) =>{
                setKey(1);
                console.log(responseJson);
            })
            .catch((error)=>{
                console.error(error);
            })
        };
        useEffect(()=>{
            getdata()
            
        })
        const getname = ()=>{
            fetch('http://192.168.43.178:3000/SEDSuite/home')
            .then((response) => response.json())
            .then((responseJson) =>{
                setData(responseJson.key);
                console.log(responseJson);
            })
            .catch((error)=>{
                console.error(error);
            })
        };
        useEffect(()=>{
          getname()
      })

    return(
        <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props =>CustomDrawerContent({Key,data,props})}>
            <Drawer.Screen name="MenuTab" component={TabNavigator} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
        </Drawer.Navigator>
    )
}

const StackApp = createStackNavigator()
export default function Nav() {
    return(
        <PaperProvider theme={PaperDarkTheme}>
        <NavigationContainer>
            <StackApp.Navigator initialRouteName="Splash">
            <StackApp.Screen name="Splash" component={splash} options={navOptionHandler}/>
                <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
                <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
                <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
            </StackApp.Navigator>
        </NavigationContainer>
        </PaperProvider>
    )
}

const styles = StyleSheet.create(
    {
     
    MainContainer: 
    {
    flex: 1,
    padding:20,
    marginTop:10,
    },

    txtStyle:
    {
        borderBottomWidth:2,
        borderBottomColor:'blue',
        marginTop:10,
        marginBottom:20,
        zIndex:4
    },
    splashContainer: 
    {
     
    flex: 1,
     
    // Set content's vertical alignment.
    //justifyContent: 'center',
     
    // Set content's horizontal alignment.
    //alignItems: 'center',
     
    // Set hex color code here.
    backgroundColor: 'rgb(30, 160, 120)',
    },
    splasContainer: 
    {
     
    flex: 1,
     
    // Set content's vertical alignment.
    justifyContent: 'center',
     
    // Set content's horizontal alignment.
    alignItems: 'center',
     
    // Set hex color code here.
    backgroundColor: 'rgb(30, 160, 120)',
     
    },
    footer: {
        top:'30%',
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex:4
       
    },
    container:{
        flexDirection:'row',
        width:135,
        height:45,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:5,
    },
    accIcon:{
        color:'white',
        fontSize: 20,
        marginVertical:10,
        marginHorizontal:10,
    },
    textTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        marginVertical:10,
        marginHorizontal:5
    },
    video:{
        width:'100%',
        height:'100%'

    }
});
