import { Dimensions } from "react-native";

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffbc00"
  },
  navbarContainer: {
    _: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24
    },
    icon: {
      height: 18,
      resizeMode: "contain",
      marginRight: 24
    },
    hamburger: {
      _: {},
      view: {
        _: {
          marginLeft: 28,
          marginTop: 5
        },
        view: {
          height: 1.5,
          width: 20,
          backgroundColor: "#fff",
          marginBottom: 5
        },
        _view: {
          height: 1.5,
          width: 20,
          backgroundColor: "#fff"
        }
      }
    }
  },
  body: {
    _: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      fontSize: 28,
      color: "#fff",
      fontWeight: "bold",
      paddingLeft: 24
    },
    image: {
      width: Dimensions.get("screen").width + 50,
      resizeMode: "contain"
    }
  },
  button: {
    _: {
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      marginBottom: 24,
      padding: 12,
      width: Dimensions.get("screen").width - 48,
      borderRadius: 5
    },
    text: {
      fontSize: 18,
      color: "#ffbc00"
    }
  }
};

export default styles;
