import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  PixelRatio,
  NavigatorIOS,
  ScrollView
} from 'react-native';

var onePT = 1 / PixelRatio.get();

var styles = StyleSheet.create({
		flex:{
			flex:1,
		},
		flexDirection:{
			flexDirection:'row',
		},
		topStatus:{
			marginTop:25
		},
		input:{
			height:45,
			borderWidth:1,
			marginLeft:5,
			paddingLeft:5,
			borderColor:'#ccc',
			borderRadius:4
		},
		btn:{
			width:55,
			marginLeft:-5,
			marginRight:5,
			backgroundColor:'#23beff',
			height:45,
			alignItems:'center',
			justifyContent:'center'
		},
		search:{
			color:'#fff',
			fontSize:15,
			fontWeight:'bold'
		},
		result:{
			marginTop:onePT,
			marginLeft:5,
			marginRight:5,
			height:200,
			borderColor:'#ccc',
			borderTopWidth:onePT
		},
		item:{
			fontSize:16,
			padding:5,
			paddingTop:10,
			paddingBottom:10,
			borderWidth:onePT,
			borderColor:'#ddd',
			borderTopWidth:0
		}

});

var Search = React.createClass({
	getInitialState:function(){
		return {
			show:false
		};
	},
	getValue:function(text){
		var value= text;
		this.setState({
			show:true,
			value:value
		});
	},
	hide:function(val){
		this.setState({
			show:false,
			value:val
		});
	},

	render:function(){
		return (
			<View>
				<View style={[styles.flex,styles.flexDirection,styles.topStatus]}>
					<View style={styles.flex}>
						<TextInput style={styles.input} returnKeyType="search"/>
					</View>
					<View style={styles.btn}>
						<Text style={styles.search}>搜索</Text>
					</View>
				</View>
				{
					this.state.show ? 
					<View style={[styles.result]}>
						<Text onPress={this.hide.bind(this,this.state.value + '庄')} 
							style={styles.item} numberOfLines={1}>{this.state.value}庄</Text>
					</View>
					: null
				}
			</View>
			);
	}
});

module.exports=Search;

