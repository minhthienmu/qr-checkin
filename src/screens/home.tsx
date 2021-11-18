import React from "react";
import { Button, Center, Pressable, Container, Box, View, Flex, Image, Text, ScrollView } from "native-base";
import color from "../constants/colors";
import { LEFT_CAVRET } from "../constants/icons";
import translate from "../localize";
import size from "../constants/sizes";
import fonts from "../constants/fonts";
import { ILLUSTRATION } from "../constants/images";
import Icon_Button from "../components/base/icon_button";
const Workspace_naming = ({ navigation }: { navigation: any }) => {
    return (
        <Flex flex={1} bg={color.WHITE} safeArea>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box px={"10px"} py={"10px"}>
                    <Icon_Button
                        onPress={() => console.log("hello")}
                        pColor={color.GRAY_BUTTON_CLICK}
                        upColor={color.GRAY_BUTTON}
                        icon={LEFT_CAVRET}
                    />
                    <Center py={"40px"}>
                        <Text fontSize={size.font.title.H1} fontFamily={fonts.PoppinsBold}>
                            {translate("workspace_creation.create_workspace")}
                        </Text>
                        <Center py={"30px"}>
                            <Image source={ILLUSTRATION} alt={"Image Error"} />
                        </Center>
                        <Text fontSize={size.font.text.medium} fontFamily={fonts.PoppinsRegular} textAlign="center">
                            {translate("workspace_creation.create_ws_intro")}
                        </Text>
                    </Center>
                    <Pressable onPress={() => console.log("Press")}>
                        <Center
                            height={"60px"}
                            width={"200px"}
                            borderRadius={"99"}
                            _text={{
                                fontSize: size.font.text.large,
                                fontFamily: fonts.PoppinsBold,
                                color: color.WHITE,
                            }}
                            alignSelf="center"
                            bg={{
                                linearGradient: {
                                    colors: [color.BLUE_LIGHT, color.BLUE_HEAVY],
                                    start: [0, 0],
                                    end: [1, 0],
                                },
                            }}
                        >
                            {translate("workspace_creation.get_started")}
                        </Center>
                    </Pressable>
                </Box>
            </ScrollView>
        </Flex>
    );
};

export default Workspace_naming;