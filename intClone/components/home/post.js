import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
const postFooterIcons = [
  {
    name: "like",
    imageUrl:
      "https://cdn-icons.flaticon.com/png/512/707/premium/707680.png?token=exp=1642933641~hmac=bcfccceb648d1ab75974a1c0f2b052a3",
  },
  {
    name: "message",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/134/134783.png",
  },
  {
    name: "share",
    imageUrl:
      "https://cdn-icons.flaticon.com/png/512/2099/premium/2099085.png?token=exp=1642934339~hmac=a71d1bffafd71b8ff8429e3a4039cb45",
  },
  {
    name: "save",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/84/84510.png",
  },
];
const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader po={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />

        <Comment post={post} />
        {/* <Comments post={post} /> */}
      </View>
    </View>
  );
};

const PostHeader = ({ po }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      //nice space from all directions
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: po.profilepicture }} style={styles.icon} />
      <Text style={{ color: "white", fontWeight: "700", marginLeft: 5 }}>
        {po.user}
      </Text>
    </View>
    <View
      style={{
        justifyContent: "flex-end",
      }}
    >
      <Text
        style={{
          justifyContent: "flex-end",
          fontWeight: "900",
          color: "white",
        }}
      >
        ...
      </Text>
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageurl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);
const PostFooter = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
    }}
  >
    <View style={styles.lesftFooterIconContainer}>
      <Icon imgUrl={postFooterIcons[0].imageUrl} imgStyle={styles.footerIcon} />
      <Icon imgUrl={postFooterIcons[1].imageUrl} imgStyle={styles.footerIcon} />
      <Icon imgUrl={postFooterIcons[2].imageUrl} imgStyle={styles.footerIcon} />
    </View>
    {/* set flex to one so it takes all the space between left icons and end */}
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon imgUrl={postFooterIcons[3].imageUrl} imgStyle={styles.footerIcon} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} Likes
    </Text>
  </View>
);
const Caption = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "700" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);
const Comment = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 5 }}>
    {/* !! for 0 comment  !! returns true or false*/}
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all " : " "}
        {post.comments.length}
        {post.comments.length > 1 ? " comments" : " comment"}
      </Text>
    )}
  </View>
);
const Comments = ({ post }) => (
  <>
    {post.comments.map((index, comment) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);
const styles = StyleSheet.create({
  icon: {
    borderRadius: 50,
    justifyContent: "space-between",
    width: 35,
    height: 35,
    borderWidth: 1,
    marginLeft: 7,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
  lesftFooterIconContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});
export default Post;
