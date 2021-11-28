import React, { useState, useEffect } from "react";
import {
    Button,
    Center,
    Pressable,
    Container,
    Box,
    View,
    Flex,
    Image,
    Text,
    ScrollView,
    HStack,
    Input,
    VStack,
    Icon,
} from "native-base";
import color from "../../constants/colors";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LEFT_CAVRET, RIGHT_CAVRET } from "../../constants/icons";
import translate from "../../localize";
import size from "../../constants/sizes";
import fonts from "../../constants/fonts";
import Icon_Button from "../../components/base/icon_button";
import { Screens } from "../../navigations/model";
import * as yup from "yup";
import { Formik } from "formik";
import HeaderThree from "../../components/header/headerThree";
import TextInput from "../../components/base/textinput";
import HeaderTwo from "../../components/header/headerTwo";
import Blue_button from "../../components/base/blue_button";
import { apiService } from "../../services";
import { getIn } from "yup/lib/util/reach";
import { sleep } from "../../utils/utils";
import { ActivityIndicator } from "react-native";
import loadingIndicator from "../../components/base/loading_indicator";
interface Com_info {
    name: string;
    email: string;
    address: string;
}

const wsInfoValidationSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(8, ({ min }) => translate("error.min_input", { field: "Name", min: min }))
        .max(256, ({ max }) => translate("error.max_input", { field: "Name", max: max }))
        .required(translate("error.required", { field: "Name" })),
    email: yup
        .string()
        .trim()
        .min(8, ({ min }) => translate("error.min_input", { field: "Email", min: min }))
        .max(256, ({ max }) => translate("error.max_input", { field: "Email", max: max }))
        .email(translate("error.invalid", { field: "Email" }))
        .required(translate("error.required", { field: "Email" })),
    address: yup
        .string()
        .trim()
        .min(8, ({ min }) => translate("error.min_input", { field: "Address", min: min }))
        .max(256, ({ max }) => translate("error.max_input", { field: "Address", max: max }))
        .required(translate("error.required", { field: "Address" })),
});

const dummy: Com_info = {
    name: "",
    email: "",
    address: "",
};

const nameIcon = <Icon as={<MaterialCommunityIcons name="home-edit-outline" />} size={5} ml="2" color="muted.400" />;
const emailIcon = <Icon as={<MaterialCommunityIcons name="email-outline" />} size={5} ml="2" color="muted.400" />;
const addressIcon = <Icon as={<MaterialCommunityIcons name="map-outline" />} size={5} ml="2" color="muted.400" />;
const Ws_s_info = ({ route, navigation }: { route: any; navigation: any }) => {
    const { workspace_id, workspace_name } = route?.params;
    const [info, setInfo] = useState<Com_info>(dummy);
    const [loading, setLoading] = useState<boolean>(true);
    const submit = async (values: any) => {
        // API for updating here
        const data = {
            workspace_id: workspace_id,
            company_name: values.name,
            address: values.address,
            email: values.email,
        };
        await apiService.updateWorkspaceInfo(data);
        navigation.navigate(Screens.WORKSPACE_ADDITION, {
            workspace_id: workspace_id,
            workspace_name: workspace_name,
        });
    };

    useEffect(() => {
        let isActive = true;
        const getInfo = async () => {
            setLoading(true);
            let ws_info = dummy;
            const res = await apiService.getWorkspaceInfo({ workspace_id: workspace_id });
            // API for getting ws Info here
            if (res.data.data) {
                ws_info = {
                    name: res.data.data?.company_name,
                    email: res.data.data?.email,
                    address: res.data.data?.address,
                };
            }

            if (isActive) {
                setInfo(ws_info);
                setLoading(false);
            }
        };
        getInfo();
        return () => {
            isActive = false;
        };
    }, []);
    return (
        <Flex flex={1} bg={color.WHITE} safeArea>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Formik
                    enableReinitialize
                    validationSchema={wsInfoValidationSchema}
                    initialValues={info}
                    onSubmit={submit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                        <Box px={"10px"} py={"10px"}>
                            <HeaderTwo title={"workspace_creation.info"} back={() => navigation.goBack()} />
                            <Center py={"30px"}>
                                <Text fontSize={size.font.title.H1} fontFamily={fonts.PoppinsBold}>
                                    {translate("workspace_creation.com_info")}
                                </Text>
                                <Text
                                    fontSize={size.font.text.medium}
                                    fontFamily={fonts.PoppinsRegular}
                                    textAlign="center"
                                    paddingTop={"15px"}
                                >
                                    {translate("workspace_creation.com_info_des")}
                                </Text>
                            </Center>
                            <Box w={"95%"} alignSelf="center" paddingBottom={"15px"}>
                                {loading ? (
                                    loadingIndicator
                                ) : (
                                    <VStack w={"100%"} space={3}>
                                        <>
                                            <Text
                                                fontSize={size.font.text.large}
                                                fontFamily={fonts.PoppinsMedium}
                                                pl={"10px"}
                                            >
                                                {translate("workspace_creation.com_name")}
                                            </Text>

                                            <TextInput
                                                name={translate("workspace_creation.enter_com_name")}
                                                value={values.name}
                                                handleChange={handleChange("name")}
                                                handleBlur={handleBlur("name")}
                                                leftIcon={nameIcon}
                                                errors={errors.name}
                                                touched={touched.name}
                                            />
                                        </>
                                        <>
                                            <Text
                                                fontSize={size.font.text.large}
                                                fontFamily={fonts.PoppinsMedium}
                                                pl={"10px"}
                                            >
                                                {translate("workspace_creation.com_email")}
                                            </Text>
                                            <TextInput
                                                name={translate("workspace_creation.enter_com_email")}
                                                value={values.email}
                                                handleChange={handleChange("email")}
                                                handleBlur={handleBlur("email")}
                                                leftIcon={emailIcon}
                                                errors={errors.email}
                                                touched={touched.email}
                                            />
                                        </>
                                        <>
                                            <Text
                                                fontSize={size.font.text.large}
                                                fontFamily={fonts.PoppinsMedium}
                                                pl={"10px"}
                                            >
                                                {translate("workspace_creation.com_address")}
                                            </Text>
                                            <TextInput
                                                name={translate("workspace_creation.enter_com_address")}
                                                value={values.address}
                                                handleChange={handleChange("address")}
                                                handleBlur={handleBlur("address")}
                                                leftIcon={addressIcon}
                                                errors={errors.address}
                                                touched={touched.address}
                                            />
                                        </>
                                    </VStack>
                                )}
                            </Box>

                            <Blue_button
                                onPress={handleSubmit}
                                text={translate("workspace_creation.save")}
                                width={"200px"}
                            />
                        </Box>
                    )}
                </Formik>
            </ScrollView>
        </Flex>
    );
};

export default Ws_s_info;
