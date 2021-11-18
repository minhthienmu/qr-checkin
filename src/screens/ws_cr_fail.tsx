import React from "react";
import { Button, Center, Pressable, Container, Box, View, Flex, Image, Text, ScrollView, HStack } from "native-base";
import color from "../constants/colors";
import { LEFT_CAVRET } from "../constants/icons";
import translate from "../localize";
import size from "../constants/sizes";
import fonts from "../constants/fonts";
import { ILLUSTRATION_3 } from "../constants/images";
import Icon_Button from "../components/base/icon_button";
import Blue_button from "../components/base/blue_button";
import Trans_button from "../components/base/transparent_button";
const Workspace_creation_fail = ({ navigation }: { navigation: any }) => {
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
                        <Center paddingBottom={"30px"}>
                            <Image source={ILLUSTRATION_3} alt={"Image Error"} />
                        </Center>
                        <Text
                            fontSize={size.font.title.H1}
                            fontFamily={fonts.PoppinsBold}
                            textAlign="center"
                            paddingBottom={"15px"}
                        >
                            {translate("workspace_creation.error")}
                        </Text>
                    </Center>
                    <Center>
                        <HStack alignItems="center" space={"3"}>
                            <Trans_button
                                onPress={() => {}}
                                text={translate("workspace_creation.cancel")}
                                width={"156px"}
                            />
                            <Blue_button
                                onPress={() => {}}
                                text={translate("workspace_creation.try_again")}
                                width={"156px"}
                            />
                        </HStack>
                    </Center>
                </Box>
            </ScrollView>
        </Flex>
    );
};

export default Workspace_creation_fail;
