import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#212121",
    paddingBottom: 32,
    textAlign: "center"
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#212121",
    marginTop: 16,
    marginHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 32
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212121"
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default styles