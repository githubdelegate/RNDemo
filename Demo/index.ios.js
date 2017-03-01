/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

var IndexView = require('./code/indexview');
var Navi = require('./code/navigator/navigatorDemo');
var Search = require('./code/textinput/textinput');
var Touch = require('./code/touchable/touchable');
var Tabbar = require('./code/tabbar/tabbar');


var app = React.createClass({
    render:function(){
        // 基本
        // return (<IndexView></IndexView>);
        // 导航
        // return (<Navi></Navi>);
        //  textinput
        // return (<Search></Search>);
        //  touchable
        // return (<Touch></Touch>);
        return (<Tabbar></Tabbar>);
    }
});

AppRegistry.registerComponent('Demo',() => app);
