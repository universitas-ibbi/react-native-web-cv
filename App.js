import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";

import * as Progress from "react-native-progress";

import Profile from "./components/profile";

import data from "./profile.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ paddingHorizontal: 30 }}>
          <Profile />
          <LineSeparator />
          <Expertise />
          <LineSeparator />
          <Skill />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Expertise() {
  return (
    <>
      <Text style={styles.TextExpertises}>Expertise</Text>

      {data.expertises.map((expertise) => (
        <>
          <Text style={styles.TextExpertise}>{expertise.expertise}</Text>
          <Text style={styles.TextKeterangan}>{expertise.keterangan}</Text>
        </>
      ))}
    </>
  );
}

function Skill() {
  return (
    <>
      <Text style={styles.TextExpertises}>Skills</Text>

      {data.skills.map((skill) => (
        <>
          <Text style={styles.TextExpertise}>{skill.title}</Text>
          <Progress.Bar
            progress={skill.percentage / 100}
            width={null}
            height={20}
            color={"rgb(255, 193, 7)"}
            borderRadius={10}
            style={{ marginBottom: 10 }}
          />
        </>
      ))}
    </>
  );
}

function LineSeparator() {
  return <View style={styles.LineSeparator}></View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  TextExpertises: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(108, 117, 125)",
    marginVertical: 30,
  },
  TextExpertise: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },
  TextKeterangan: {
    fontSize: 25,
    marginBottom: 20,
  },
  LineSeparator: {
    borderColor: "rgb(108, 117, 125)",
    opacity: 0.5,
    borderWidth: 1,
    marginTop: 30,
  },
});
