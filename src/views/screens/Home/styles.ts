import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#212121",
    paddingBottom: 32
  },
  card: {
    width: "45%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8
  },
  cardText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold"
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default styles