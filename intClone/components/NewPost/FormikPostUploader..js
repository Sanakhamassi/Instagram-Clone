import { View, Text, TextInput, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, formik } from "formik";
import { Divider } from "react-native-elements/dist/divider/Divider";
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A url is required"),
  caption: Yup.string().max(2200, "Caption has reached maximum characters"),
});

export default function FormikPostUploader({ navigation }) {
  const placeholder =
    "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg?fbclid=IwAR30felYLtC9p_IXgYgzbRithqetYaeYxjSJBlUMwH8usnvJU_DoxaDGba8";
  const [imgUrl, setImgUrl] = useState("");
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log("succesuffly");
        navigation.back();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isvalid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: imgUrl ? imgUrl : placeholder,
              }}
              style={{ height: 100, width: 100 }}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                placeholder="write a caption ..."
                placeholderTextColor="gray"
                multiline={true}
                style={{ color: "white", fontSize: 20 }}
                onChange={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.1} orientation="vertical" />
          <TextInput
            onChange={(e) => {
              setImgUrl(e.nativeEvent.text);
            }}
            placeholder="image url ..."
            style={{ color: "white", fontSize: 20 }}
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 15, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button
            onPress={handleSubmit}
            title="Share"
            //disabled={!isvalid}
          ></Button>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({});
