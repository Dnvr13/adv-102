import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View style={styles.container}>

            <Link href="/about" style={styles.link}>About</Link>
            <Link href="/contact" style={styles.link}>Contact</Link>

           
            <Text style={styles.fullName}>Denver Sacragon</Text>

            <View style={styles.child1}>
                <View style={styles.child11}></View>
                <View style={styles.child12}></View>
            </View>
            <View style={styles.child2}></View>
            <View style={styles.child3}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a", 
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    fullName: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#c0aa6b", 
        textAlign: "center",
        textShadowColor: "rgba(0, 0, 0, 0.8)", 
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 4,
        fontFamily: "serif",
        marginVertical: 20,
    },
    link: {
        fontSize: 18,
        color: "#a88e5f",
        marginBottom: 10,
        textDecorationLine: "underline",
        textShadowColor: "rgba(0, 0, 0, 0.7)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    child1: {
        flex: 5,
        flexDirection: "row",
        backgroundColor: "#2b1f1e", 
        justifyContent: "center",
        gap: 50,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#5a4b3b", 
    },
    child2: {
        flex: 6,
        backgroundColor: "#0f0f0f", 
    },
    child3: {
        flex: 1,
        backgroundColor: "#3d2f2b", 
    },
    child11: {
        width: 20,
        height: 20,
        backgroundColor: "#754c24", 
        borderRadius: 4,
    },
    child12: {
        width: 20,
        height: 20,
        backgroundColor: "#8b5e34", 
        borderRadius: 4,
    },
});

