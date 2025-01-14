import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SignUpScreen = ({ toggleScreen }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
    
    const nameRegex = /^[a-zA-Z\s]+$/;
    
    const handleSignUp = () => {
        if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
            if (name.trim() === "" && email.trim() === "" && password.trim() === "") {
                return;
            }
            Alert.alert("Error", "All fields are required");
            return;
        }
    
        if (!isValidEmail(email)) {
            Alert.alert("Error", "Please enter a valid email address");
            return;
        }
    
        if (!nameRegex.test(name)) {
            Alert.alert("Error", "Name should contain only alphabets");
            return;
        }
    
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            Alert.alert("Invalid Password", "Password should have at least one uppercase letter, one special character, and one digit.");
            return;
        }
    
        console.log("Signing up with:", name, email, password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign Up</Text>
            <Text style={styles.subHeader}>Create account and enjoy our services</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.input, styles.passwordInput]}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    style={styles.eyeIcon}
                >
                    <Icon
                        name={isPasswordVisible ? "eye" : "eye-slash"}
                        size={20}
                        color="#666"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleScreen("login")}>
                <Text style={styles.switchScreenText}>
                    Already have an account?{" "}
                    <Text style={styles.signInText}>Sign In</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "flex-start",
        paddingTop: 20, 
        paddingHorizontal: 20, 
    },
    header: {
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subHeader: {
        fontSize: 14,
        marginBottom: 11,
        color: "#666",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
    },
    input: {
        height: 38,
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 15,
        borderRadius: 5,
        width: "100%",
    },
    passwordInput: {
        paddingRight: 40,
    },
    button: {
        backgroundColor: "#F7600F",
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 35,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    },
    switchScreenText: {
        color: "#666",
        textAlign: "center",
        marginTop: 20,
    },
    signInText: {
        color: "#F7600F",
        fontWeight: "bold",
    },
    passwordContainer: {
        position: "relative",
    },
    eyeIcon: {
        position: "absolute",
        right: 15,
        paddingBottom: 20,
        padding: 5,
    },
});

export default SignUpScreen;
