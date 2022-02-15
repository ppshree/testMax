import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image } from "react-native";
export default function DashBoard() {
  const [ProArray, setProArray] = useState([]);
  useEffect(() => {
    axios({
      method: "POST",
      url: "http://182.76.237.238/~teammaxtra/help_application/public/api/drugss",
      data: {
        offset: 0,
      },
    })
      .then((res) => {
        console.log(res.data);
        setProArray(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <View>
      <FlatList  data={ProArray} renderItem={({item})=>(
          <View style={{alignItems:'center'}}>
              <Image  style={{width:300,height:200}} source={{uri:item.images[0].image}} />
              <Text style={{paddingVertical:10,fontSize:18,fontWeight:'bold',textAlign:'center'}}>{item.drug_name}</Text>
      
          </View>
      )} />
    </View>
  );
}
