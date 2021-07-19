import React from 'react';
import { View, StyleSheet, Text, StatusBar, Platform} from 'react-native';


export const Flex = () => {
    return (

        <>
            <View>
                <View style={styles.Container1}>

                    <Text style={{
                        fontSize:20,
                        padding: 5,
                        fontWeight: '700',
                    }}>Requisito 1</Text>

                    <View style={styles.Boxes}>
                        <Text style={styles.Text}>Box 1</Text>
                    </View>

                    <View style={styles.Boxes}>
                        <Text style={styles.Text}>Box 2</Text>
                    </View>

                    <View style={styles.Boxes}>
                        <Text style={styles.Text}>Box 3</Text>
                    </View>
                </View>

                <View style={styles.Container2}>

                    <Text style={{
                        fontSize:20,
                        padding: 5,
                        fontWeight: '700',
                    }}>Requisito 2</Text>

                    <View style={styles.Container3}>
                        <View style={styles.Boxes2}>
                            <View style={styles.miniBoxes}>
                                <Text style={styles.Text}>Box 1</Text>
                            </View>
                            <View style={styles.miniBoxes}>
                                <Text style={styles.Text}>Box 2</Text>
                            </View>
                            <View style={styles.miniBoxes}>
                                <Text style={styles.Text}>Box 3</Text>
                            </View> 
                        </View>

                        <View style={styles.Boxes2}>
                            <View style={styles.miniBoxes}>
                                <Text style={styles.Text}>Box  1</Text>
                            </View>
                            <View style={styles.miniBoxes}>
                                <Text style={styles.Text}>Box  2</Text>
                            </View>
                            <View style={styles.miniBoxes}>
                                <Text style={styles.Text}>Box  3</Text>
                            </View> 
                        </View>

                        <View style={styles.Boxes2}>
                            <View style={styles.miniBoxes}>
                                <Text style={styles.Text}>Box 1</Text>
                            </View>
                            <View style={styles.miniBoxes}>
                                <Text style={styles.Text}>Box 2</Text>
                            </View>
                            <View style={styles.miniBoxes}>
                                <Text style={styles.Text}>Box 3</Text>
                            </View> 
                        </View>
                    </View>
                </View>

                <View style={styles.Container4}>
                    <Text style={{
                            fontSize:20,
                            padding: 5,
                            fontWeight: '700',
                    }}>Requisito 3</Text>

                    <View style={styles.Container5}>
                            <View style={styles.Boxes3}>
                                <Text style={styles.Text}>Box 1</Text>
                            </View>
                            <View style={styles.Boxes3}>
                                <Text style={styles.Text}>Box 2</Text>
                            </View>
                    </View>
                </View>
            </View>
        </>   
    );
}

const styles = StyleSheet.create({
    Container1: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
        backgroundColor: "#fff",
        marginLeft: 10,
    },

    Container2: {
        justifyContent: 'center',
        marginLeft: 100,
        alignItems: 'center',
    },

    Container3: {
        flexDirection: 'row',
    },

    Container4: {
        justifyContent: 'center',
        marginLeft: 100,
        alignItems: 'center',
    },

    Container5: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
    },

    Boxes: {
        width: 75,
        height: 100,
        borderWidth: 2,
        borderColor: "#1198F7",
        margin: 5, 
    },

    Boxes2: {
        width: 80,
        height: 190,
        borderWidth: 2,
        borderColor: "#1198F7",
        margin: 5,
        alignItems: 'center'
    },

    Boxes3: {
        width: 80,
        height: 85,
        borderWidth: 2,
        borderColor: "#1198F7",
        margin: 5,
        alignItems: 'center',
    },

    miniBoxes: {
        width: 50,
        borderWidth: 2,
        borderColor: "#1198F7",
        margin: 5,
    },

    Text: {
        fontSize: 20,
        textAlign: 'center',
    }
  });
