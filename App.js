import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          width: 300,
          height: 320,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          }}
          width={150}
          height={150}
          style={{
            borderRadius: 100,
          }}
        />

        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            gap: 10,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Aya Alsakkaf
          </Text>
          <Text
            style={{
              color: "gray",
            }}
          >
            Kuwait, Kuwait City
          </Text>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: "lightgrey",
            width: "100%",
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              // backgroundColor: "red",
              height: 80,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              80K
            </Text>
            <Text>Followers</Text>
          </View>
          <View
            style={{
              flex: 1,
              // backgroundColor: "blue",
              height: 80,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              803K
            </Text>
            <Text>Likes</Text>
          </View>
          <View
            style={{
              flex: 1,
              // backgroundColor: "yellow",
              height: 80,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              1.4K
            </Text>
            <Text>Photos</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    padding: 15,
    width: 350,
    marginTop: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#faedcd",
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  view1: {
    flex: 1,
    backgroundColor: "brown",
  },
  view2: {
    flex: 1,
    backgroundColor: "yellow",
  },
  view3: {
    flex: 1,
    backgroundColor: "green",
  },
});
