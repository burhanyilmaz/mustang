import React, { PureComponent } from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import styles from './stylesheet';
import MustangImage from '../../../../resources/images/mustang.png';
import SearchIcon from '../../../../resources/images/search.png';

export default class extends PureComponent {
    render() {
        const { mainContainer, navbarContainer, body, button } = styles;
        return (
            <View style={mainContainer}>
                <StatusBar hidden />
                <View style={navbarContainer._}>
                <TouchableOpacity style={navbarContainer.hamburger._}>
                    <View style={navbarContainer.hamburger.view._}>
                        <View style={navbarContainer.hamburger.view.view}/>
                        <View style={navbarContainer.hamburger.view._view}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={navbarContainer.icon} source={SearchIcon} />
                </TouchableOpacity>
                </View>
                <View style={body._}>
                    <Text style={body.text}> Join us on an</Text>
                    <Text style={body.text}> #untaggable journey</Text>
                    <Image style={body.image} source={MustangImage} />
                </View>
                <TouchableOpacity>
                    <View style={button._}>
                        <Text style={button.text}> Explore </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}