import {StyleSheet, Text, View} from 'react-native';
import {list_data} from "./helpers/constants";

export default function App() {
    return (
        <View style={styles.container}>
          <Text style={{alignSelf: "center"}}>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
