import React, { Component } from 'react';
import {
	AppRegister,
	StyleSheet,
	View,
	Text,
	PixelRatio
} from 'react-native';


var styles = StyleSheet.create({
	flex:{
		flex:1,
	},
	list_item:{
		height:40,
		marginLeft:10,
		marginRight:10,
		borderBottomWidth:1,
		borderBottomColor:'#ddd',
		justifyContent:'center'
	},
	list_item_font:{
		fontSize:16
	}
});

var List = React.createClass({
	render: function(){
		return (
			<View style={styles.list_item}>
				<Text style={styles.list_item_font}>{this.props.title}</Text>
			</View>
		);
	}
});

module.exports = List;
