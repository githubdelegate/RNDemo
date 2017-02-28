import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  NavigatorIOS,
  ScrollView
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

var Detail = React.createClass({
	render:function(){
		return (<ScrollView>
			<Text>详情页</Text>
			<Text>这就是信息很少的详情</Text>
		</ScrollView>
		);
	}
});


var NV = React.createClass({
	render:function(){
		return (<NavigatorIOS
				style={{flex:1}}
				initialRoute={{
					component: List,
					title: '游轮',
					passProps:{}
				}}
			/>);
	}
});


var List = React.createClass({
	goTo:function(){
		this.props.navigator.push({
			component:Detail,
			title: '游轮详情',
			rightButtonTitle:'购物车',
			onRightButtonPress: function(){
				alert('进入购物测');
			}
		});
	},
	render:function(){
		return (<ScrollView>
			<Text style={styles.list_item} onPress={this.goTo}> 豪华游轮啦啦啦啦啦啦啦</Text>
			<Text style={styles.list_item} onPress={this.goTo}> 豪华游轮啦啦啦啦啦啦啦</Text>
			<Text style={styles.list_item} onPress={this.goTo}> 豪华游轮啦啦啦啦啦啦啦</Text>
			<Text style={styles.list_item} onPress={this.goTo}> 豪华游轮啦啦啦啦啦啦啦</Text>
		</ScrollView>);
	}
});


module.exports=NV;