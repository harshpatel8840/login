import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const App = () => { 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftContainer}>
                    <TouchableOpacity style={styles.menuIcon}>
                        <Icon name="menu" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Taxpartner</Text>
                </View>
                <TouchableOpacity style={styles.profileIcon}>
                    <Icon name="person-circle" size={24} color="#333" />
                </TouchableOpacity>
            </View>

           
            <View style={styles.card}>
               
                <View style={styles.cardTop}>
                    <Text style={styles.cardTitle}>E-Wallet Current Balance</Text>
                    <TouchableOpacity style={styles.addMoneyButton}>
                        <Icon name="add-circle" size={28} color="#fff" />
                        <Text style={styles.addMoneyText}>Add Money</Text>
                    </TouchableOpacity>
                </View>
               
                <Text style={styles.balanceAmount}>Rs. 21.00</Text>

                <View style={styles.transactionStatus}>
                    <View style={styles.transactionRow}>
                        <Text style={styles.transactionTitle}>Application Credited</Text>
                        <View style={styles.transactionAmountContainer}>
                            <Text style={styles.transactionAmount}>200</Text>
                            <Icon name="checkmark-circle" size={20} color="#fff" />
                        </View>
                    </View>
                    <View style={styles.verticalLine} />
                    <View style={styles.transactionRow}>
                        <Text style={styles.transactionTitle}>Application in Progress</Text>
                        <View style={styles.transactionAmountContainer}>
                            <Text style={styles.transactionAmount}>200</Text>
                            <Icon name="checkmark-circle" size={20} color="#fff" />
                        </View>
                    </View>
                    <View style={styles.verticalLine} />
                    <View style={styles.transactionRow}>
                        <Text style={styles.transactionTitle}>Application Approved</Text>
                        <View style={styles.transactionAmountContainer}>
                            <Text style={styles.transactionAmount}>200</Text>
                            <Icon name="checkmark-circle" size={20} color="#fff" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 10,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    menuIcon: {
        paddingRight: 10,
    },
    headerTitle: {
        color: "#333",
        fontSize: 19,
        fontWeight: "500",
    },
    profileIcon: {
        padding: 5,
    },
    card: {
        backgroundColor: "#F7600F",
        margin: 10,
        borderRadius: 10,
        padding: 10,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    cardTop: { 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
    },
    cardTitle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "400",
        marginTop: -16
    },
    balanceAmount: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
        marginTop: -25, 
        fontWeight: "600",
        marginLeft: 0,
    },
    addMoneyButton: {
        alignItems: "center",
        marginTop: 8
    },
    addMoneyText: {
        fontSize: 12,
        color: "#fff",
        marginTop: 5, 
    },
    transactionStatus: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
    },
    transactionRow: {
        flex: 1,
        alignItems: "flex-start",
        paddingHorizontal: 8,
    },
    transactionTitle: {
        fontSize: 12,
        color: "#fff",
        marginBottom: 13,
    },
    transactionAmountContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10
    },
    transactionAmount: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    verticalLine: {
        width: 1,
        height: 70,
        backgroundColor: "#fff",
    },
});

export default App;
