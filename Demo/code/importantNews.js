import React, { Component} from 'react';
import {
	AppRegister,
	StyleSheet,
	View,
	Text,
	PixelRatio
} from 'react-native';


var styles = StyleSheet.create({

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
	},
	news_title:{
		fontSize:20,
		fontWeight:'bold',
		color:'#cd1d1c',
		marginLeft:10,
		marginTop:15
	},
	news_item:{
		marginLeft:10,
		marginRight:10,
		fontSize:15,
		lineHeight:20
	}
});

var ImportantNews = React.createClass({

	show: function(title){
		alert(title);
	},

	render: function(){
		var news = [];
		for (var i in this.props.news){
			var text = (<Text
				onPress={this.show.bind(this,this.props.news[i])}
				numberOfLines={2}
				style={styles.news_item}>{this.props.news[i]}
			</Text>
		);
			news.push(text);
		}
		return (<View>
			<Text style={styles.news_title}>今日要闻</Text>
			{news}
		</View>);
	},
});

module.exports = ImportantNews;