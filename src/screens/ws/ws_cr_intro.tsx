import React from "react";
import { Center, Box, Flex, Image, Text, ScrollView } from "native-base";
import color from "../../constants/colors";
import { LEFT_CAVRET } from "../../constants/icons";
import translate from "../../localize";
import size from "../../constants/sizes";
import fonts from "../../constants/fonts";
import { ILLUSTRATION } from "../../constants/images";
import Icon_Button from "../../components/base/icon_button";
import Blue_button from "../../components/base/blue_button";
import { Screens } from "../../navigations/model";
const Workspace_creation_intro = ({ navigation }: { navigation: any }) => {
    return (
        <Flex flex={1} bg={color.WHITE} safeArea>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box px={"10px"} py={"10px"}>
                    <Icon_Button
                        onPress={() => navigation.navigate(Screens.HOME)}
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
                    <Blue_button
                        onPress={() => navigation.navigate(Screens.WS_NAMING)}
                        text={translate("workspace_creation.get_started")}
                        width={"200px"}
                    />
                </Box>
            </ScrollView>
        </Flex>
    );
};

export default Workspace_creation_intro;
