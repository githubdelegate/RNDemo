import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  PixelRatio,
  NavigatorIOS,
  ScrollView,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
	flex:{
		// flex:1,
		marginTop:25,
	},
	row:{
		flexDirection:'row'
	},
	item:{
		fontSize:18,
		marginLeft:5,
		color:'#434343',
		backgroundColor:'red'
	},
	blue:{
		backgroundColor:'blue',
		height:40,
		width:50
	}
});

var Touch = React.createClass({
	show:function(text){
		alert(text);
	},

	render:function(){
		return (
			<View style={styles.row}>
				<TouchableHighlight onPress={this.show.bind(this,'时间')} underlayColor='#e1f6ff'>
					<Text style={[styles.item,styles.flex]}>入门</Text>
				</TouchableHighlight>
				<View style={styles.blue}></View>
			</View>
		);
	}
});

module.exports=Touch;