import {Pressable, StyleSheet, Text, View} from "react-native";
import {SwipeListView, SwipeRow} from "react-native-swipe-list-view";
import {sampleData} from "./helpers/constants";

export default function App() {
    const listData = sampleData;
    const closeRow = (rowMap: any, rowKey: any) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };
    const renderItem = (data: any, rowMap: any) => {
        return (
            // @ts-ignore
            <SwipeRow
                disableLeftSwipe={parseInt(data.index) === 0}
                disableRightSwipe
                rightOpenValue={-75}
            >
                <View style={styles.rowBack}>
                    <Pressable
                        style={styles.backText}
                        onPress={() => {
                            alert(`Pressed ${data.item.label}`)
                            closeRow(rowMap, data.item.key);
                        }}
                    >
                        <Text>Press</Text>
                    </Pressable>
                </View>
                <View style={styles.rowFront}>
                    <Text style={styles.title}>{data.item.label}</Text>
                    <Text>{data.item.value}</Text>
                </View>
            </SwipeRow>
        );
    };
    return (
        <View style={[{top: 80}, styles.container]}>
            <Text style={styles.mainTitle}>Swipe List View Example</Text>
            <SwipeListView data={listData} renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    standalone: {
        marginTop: 30,
        marginBottom: 30,
    },
    standaloneRowFront: {
        alignItems: "center",
        backgroundColor: "#CCC",
        justifyContent: "center",
        height: 50,
    },
    standaloneRowBack: {
        alignItems: "center",
        backgroundColor: "#8BC645",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    backTextWhite: {
        color: "#FFF",
    },
    spacer: {
        height: 50,
    },
    rowFront: {
        backgroundColor: "#fff",
        justifyContent: "center",
        height: 80,
        paddingHorizontal: 20,
    },
    rowBack: {
        alignItems: "center",
        flex: 1,
        height: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 15,
    },
    backText: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: 75,
        backgroundColor: "#C6F95A",
        right: 0,
    },
    title: {
        fontWeight: "bold",
        marginBottom: 8,
    },
    mainTitle: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 24,
        padding: 20,
    },
});
