import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  ScrollView,
  TabBarIOS,
  Image,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var Tar = React.createClass({
	getInitialState:function(){
		return {
			tab:'message'
		};
	},

	select:function(tabname){
		this.setState({
			tab:tabname
		});
	},

	render:function(){
		return (
			<TabBarIOS>
				<TabBarIOS.Item
					title="消息"
					// icon={require("image!message")}
					onPress={this.select.bind(this,'message')}
					selected={this.state.tab === 'message'}
				>
					<ScrollView>
						<View>
						  <Text></Text>
						  <Text>XXXXXXXXXXXXXX
						  XXXXXXXXXXXXXXXXXX
						  XXXXXXXXXXXXXXXXXXXX
						  XXXXXXXXXXXXXXXXXXXX</Text>
						</View>
					</ScrollView>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title="联系人"
					// icon={require{"image!phone"}}
					onPress={this.select.bind(this,'phonelist')}
					selected={this.state.tab === 'phonelist'}
				>
					<ScrollView>
						<Text>
							<Text>阿山</Text>
							<Text>121312312312</Text>
						</Text>
						<Text>
							<Text>阿山</Text>
							<Text>121312312312</Text>
						</Text>
						<Text>
							<Text>阿山</Text>
							<Text>121312312312</Text>
						</Text>
						<Text>
							<Text>阿山</Text>
							<Text>121312312312</Text>
						</Text>
					</ScrollView>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title="动态"
					// icon={require("image!star")}
					onPress={this.select.bind(this,'star')}
					selected={this.state.tab === 'star'}>
					<ScrollView>
						<Image style={{width:width,height:height}} source={{uri:'http://vczero.github.io/ctrip/star_page.jpg'}}/>
					</ScrollView>
				</TabBarIOS.Item>
			</TabBarIOS>
			);
	},
});


module.exports=Tar;
