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
var Navi = require('./code/navigator/navigatorDemo')

var app = React.createClass({
    render:function(){
        // return (<IndexView></IndexView>);
        return (<Navi></Navi>);
    }
});


AppRegistry.registerComponent('Demo',() => app);
