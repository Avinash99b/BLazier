import {Text, View, ScrollView, Pressable, Image, Animated, Easing} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {useEffect, useRef} from "react";
const logo = require('../assets/images/react-logo.png')
export default function Index() {
    const navigation = useNavigation();

    const pages = [
        {name:"AgeCalcPage",description:"Calculates and stores the age calculation",path:"Pages/AgeCalcPage",},
        {name:"AgeCalcPage",description:"Calculates and stores the age calculation",path:"Pages/AgeCalcPage",},
    ]

    const rotateAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
    }, []);
    useEffect(()=>{
        Animated.loop(Animated.timing(rotateAnim,{
            toValue:1,
            duration:1800,
            useNativeDriver:true,
            easing:Easing.linear
        })).start()
    },[rotateAnim])

    const spin = rotateAnim.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','360deg']
    })
    return (
        <View style={{backgroundColor:"black",height:"100%"}}>
            <Text style={{
                width:"100%",
                fontSize:20,
                fontWeight:"bold",
                textAlign:"center",
                marginTop:10,
                color:"white"
            }}>Choose Your Action</Text>
            <ScrollView
                horizontal={false}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap:7,
                    marginTop:30,
                    marginHorizontal:10,
                    flexDirection:'row'
                }}
            >
                {pages.map((page, index) => (<Pressable
                    key={String(index)}
                    style={{
                        backgroundColor:"#ff0202",
                        borderRadius:5,
                        padding:5,
                        width:"32%",
                        flex:1,
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                    onPress={()=>{navigation.navigate(page.path)}}
                >
                    <Animated.View
                    style={[{
                        transform:[{rotate:spin}]
                    }]}
                    >
                        <Image source={logo}></Image>
                    </Animated.View>
                    <Text style={{color:"white",fontWeight:"bold",marginTop:2}}>{page.name}</Text>
                    <Text style={{color:"white",fontSize:13,width:"100%",textAlign:"center",marginTop:3}}>{page.description}</Text>
                </Pressable>))}
            </ScrollView>
        </View>
    );
}
