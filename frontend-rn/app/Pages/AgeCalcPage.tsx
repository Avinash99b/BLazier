import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function AgeCalcPage() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Age Calculator Page</Text>
        </View>
    );
}
