import React from 'react';
import { StyleSheet, Button, View, Text, Alert } from 'react-native';

const HomeScreen = () => (
    <View>
        <Button
            title="Log in"
            onPress={() => Alert.alert('Simple Button pressed')}
        />
    </View>
)

export default HomeScreen;