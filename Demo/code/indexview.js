import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

var Header = require('./header');
var List  = require('./newslist');
var ImportantNews = require('./importantNews');


var styles = StyleSheet.create({
   container: {
      marginTop:25,
      marginLeft:5,
      marginRight:5,
      borderWidth:1,
      borderColor:'red',
      flexDirection: 'row',
      height:84,
      borderRadius:5,
      padding:2,
      backgroundColor:'#ff0067'
   },
   item: {
      flex:1,
      height:80,
   },
   center:{
    justifyContent:'center',
    alignItems:'center'
   },
   flex:{
    flex:1
   },

   font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
   },
   lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff'
   },
   lineCenter:{
     borderBottomWidth:1/PixelRatio.get(),
     borderColor:'#fff'
   }
});


var IndexView = React.createClass({
   render: function(){
      return (
      <View>
      <Header></Header>
      <View >
        <List title='宇航员在太空宣布 三体 获奖'></List>
        <List title='宇航员在太空宣布 三体 获奖'></List>
        <List title='宇航员在太空宣布 三体 获奖'></List>
        <List title='宇航员在太空宣布 三体 获奖'></List>
        <List title='宇航员在太空宣布 三体 获奖'></List>
      </View>
      <ImportantNews news={['1.三体获奖啦，中国作家首次获奖,我们兴奋不已，哈哈哈哈哈哈哈哈哈','1.三体获奖啦，中国作家首次获奖','1.三体获奖啦，中国作家首次获奖','1.三体获奖啦，中国作家首次获奖']}></ImportantNews>
      <View style={styles.container}>
        <View style={[styles.item,styles.center]}>
             <Text style={styles.font}>海外酒店</Text>
        </View>
        <View style={[styles.item,styles.lineLeftRight]}>
           <View style={[styles.center,styles.flex,styles.lineCenter]}>
             <Text style={styles.font}>酒店</Text>
          </View>
          <View style={[styles.center,styles.flex]}>
             <Text style={styles.font}>特惠酒店</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={[styles.center,styles.flex,styles.lineCenter]}>
             <Text style={styles.font}>团购</Text>
          </View>
          <View style={[styles.center,styles.flex]}>
             <Text style={styles.font}>客栈</Text>
          </View>
        </View>
      </View>


      </View>
      );
   }
});

module.exports=IndexView;
