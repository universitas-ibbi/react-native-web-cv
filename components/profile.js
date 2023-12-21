import { Image, Text, StyleSheet } from "react-native";

import ImageProfile from "../assets/profile.png";
import data from "../profile.json";

export default function Profile() {
  return (
    <>
      <Image source={ImageProfile} style={styles.ImageProfile} />
      <Text style={styles.TextNama}>{data.profile.nama}</Text>
      <Text style={styles.TextJabatan}>{data.profile.jabatan}</Text>
      <Text style={styles.TextDeskripsi}>{data.profile.deskripsi}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  ImageProfile: {
    width: "100%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  TextNama: {
    fontSize: 40,
    fontWeight: "bold",
  },
  TextJabatan: {
    fontSize: 25,
    marginVertical: 15,
  },
  TextDeskripsi: {
    fontSize: 25,
  },
});
