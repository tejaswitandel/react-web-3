import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  Line,
  CheckBox,
  List,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const ResultsPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/homepage");
  }
  function handleNavigate6() {
    navigate("/hotelspage");
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-roboto items-center mx-[auto] w-[100%]"
        compid="1003:22493"
        comptype="Column"
      >
        <header className="w-[100%]" compid="11" comptype="Header">
          <Row
            className="bg-white_A700 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]"
            compid="1016:12034"
            comptype="Row"
          >
            <Img
              src="images/img_combinedshape.png"
              className="CombinedShape"
              compid="1016:12039"
              comptype="Image"
              alt="CombinedShape"
            />
            <Text
              className="common-pointer hover:font-normal lg:ml-[574px] xl:ml-[656px] 2xl:ml-[738px] 3xl:ml-[886px] hover:text-blue_800 text-gray_800 TopContainer"
              compid="1016:12042"
              variant="body7"
              comptype="Text"
              onClick={handleNavigate3}
            >
              Explore
            </Text>
            <Text
              className="hover:font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] text-blue_800 TopContainer"
              compid="1016:12043"
              variant="body7"
              comptype="Text"
            >
              Search
            </Text>
            <Text
              className="common-pointer hover:font-normal hover:text-blue_800 Search"
              compid="1016:12044"
              variant="body7"
              comptype="Text"
              onClick={handleNavigate6}
            >
              Hotels
            </Text>
            <Text
              className="hover:font-normal hover:text-blue_800 Search"
              compid="1016:12045"
              variant="body7"
              comptype="Text"
            >
              Offers
            </Text>
            <Img
              src="images/img_notification.svg"
              className="notification"
              compid="1016:12051"
              comptype="Image"
              alt="notification"
            />
            <Img
              src="images/img_profilepicture.png"
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
              compid="1016:12055"
              comptype="CircleImage"
              alt="unsplashd1UPki"
            />
          </Row>
        </header>
        <Column
          className="bg-gradient3  font-baloobhai items-center w-[100%]"
          compid="1003:22517"
          comptype="Column"
        >
          <Stack
            className="bg-gradient  lg:h-[282px] xl:h-[323px] 2xl:h-[363px] 3xl:h-[435px] w-[100%]"
            compid="8"
            comptype="Stack"
          >
            <Img
              src="images/img_bannerbackgro.png"
              className="absolute lg:h-[282px] xl:h-[323px] 2xl:h-[363px] 3xl:h-[435px] w-[100%]"
              compid="1003:22520"
              comptype="Image"
              alt="BannerBackgrou"
            />
            <Column
              className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[89%]"
              compid="1003:22521"
              comptype="Column"
            >
              <Text
                className="not-italic text-white_A700 w-[auto]"
                compid="1003:22523"
                as="h1"
                variant="h1"
                comptype="Text"
              >
                Where are you off too?
              </Text>
              <Row
                className="bg-white_A700 font-roboto items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius10 w-[100%]"
                compid="1016:19488"
                comptype="Row"
              >
                <Column
                  className="border border-black_900_3a border-solid xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[28%]"
                  compid="1016:19492"
                  comptype="Column"
                >
                  <Text
                    className="bg-white_A700 ml-[4px] not-italic text-black_900_99 tracking-ls1 w-[54px]"
                    compid="1016:19493"
                    variant="body8"
                    comptype="Text"
                  >
                    Departure
                  </Text>
                  <Text
                    className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] Active"
                    compid="1016:19497"
                    variant="body5"
                    comptype="Text"
                  >
                    Singapore (SIN)
                  </Text>
                </Column>
                <Column
                  className="border border-black_900_3a border-solid 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[28%]"
                  compid="1016:19500"
                  comptype="Column"
                >
                  <Column
                    className="bg-white_A700 items-center ml-[4px] w-[11%]"
                    compid="1016:19501"
                    comptype="Column"
                  >
                    <div
                      className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                      compid="6"
                      comptype="View"
                    ></div>
                    <Text
                      className="LabelContainer1"
                      compid="1016:19502"
                      variant="body8"
                      comptype="Text"
                    >
                      Arrival
                    </Text>
                  </Column>
                  <Text
                    className="Input1"
                    compid="1016:19505"
                    variant="body5"
                    comptype="Text"
                  >
                    Los Angeles (LA)
                  </Text>
                </Column>
                <Column
                  className="border border-black_900_3a border-solid 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[28%]"
                  compid="1016:19508"
                  comptype="Column"
                >
                  <Column
                    className="bg-white_A700 items-center ml-[4px] w-[8%]"
                    compid="1016:19509"
                    comptype="Column"
                  >
                    <div
                      className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                      compid="7"
                      comptype="View"
                    ></div>
                    <Text
                      className="LabelContainer1"
                      compid="1016:19510"
                      variant="body8"
                      comptype="Text"
                    >
                      Date
                    </Text>
                  </Column>
                  <Row
                    className="items-center justify-between lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[99%]"
                    compid="1016:19511"
                    comptype="Row"
                  >
                    <Text
                      className="Active"
                      compid="1016:19513"
                      variant="body5"
                      comptype="Text"
                    >
                      01/05/2022
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[5%]"
                      compid="I1016:19514;615:698"
                      comptype="Image"
                      alt="trash"
                    />
                  </Row>
                </Column>
                <Button
                  className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[13%]"
                  compid="1323:6480"
                  comptype="Button"
                  size="lg"
                >
                  Search flights
                </Button>
              </Row>
            </Column>
          </Stack>
        </Column>
        <Row
          className="font-roboto lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[89%]"
          compid="1003:22554"
          comptype="Row"
        >
          <Column className="w-[27%]" compid="1003:22555" comptype="Column">
            <Text
              className="font-normal not-italic text-gray_700 tracking-ls1 w-[auto]"
              compid="1003:22557"
              variant="body3"
              comptype="Text"
            >
              10 out of 177 Results
            </Text>
            <Line
              className="bg-gray_200 h-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[89%]"
              compid="1003:22558"
              comptype="Line"
            />
            <Text
              className="lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] text-gray_700 tracking-ls1 w-[auto]"
              compid="1003:22584"
              variant="body1"
              comptype="Text"
            >
              Stops
            </Text>
            <CheckBox
              className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              compid="1003:22585"
              comptype="CheckBox"
              name="10Results Two"
              label="1 Stop"
            ></CheckBox>
            <CheckBox
              className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              compid="1003:22588"
              comptype="CheckBox"
              name="10Results Three"
              label="2 Stops"
            ></CheckBox>
            <Text
              className="lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] text-gray_700 tracking-ls1 w-[auto]"
              compid="1003:22560"
              variant="body1"
              comptype="Text"
            >
              Booking Options
            </Text>
            <CheckBox
              className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              compid="1003:22561"
              comptype="CheckBox"
              name="10Results Five"
              label="Book on Fickleflight"
            ></CheckBox>
            <CheckBox
              className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic pb-[1px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              compid="1003:22564"
              comptype="CheckBox"
              name="10Results Six"
              label="Official Airline Websites"
            ></CheckBox>
            <Text
              className="lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] text-gray_700 tracking-ls1 w-[auto]"
              compid="1003:22568"
              variant="body1"
              comptype="Text"
            >
              Flight Experience
            </Text>
            <CheckBox
              className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              compid="1003:22569"
              comptype="CheckBox"
              name="10Results Eight"
              label="No overnight flights"
            ></CheckBox>
            <CheckBox
              className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              compid="1003:22572"
              comptype="CheckBox"
              name="10Results Nine"
              label="No long stop-overs"
            ></CheckBox>
            <Line
              className="bg-gray_200 h-[1px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]"
              compid="1003:22591"
              comptype="Line"
            />
            <Text
              className="lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] text-gray_700 tracking-ls1 w-[auto]"
              compid="1003:22576"
              variant="body1"
              comptype="Text"
            >
              Airlines
            </Text>
            <CheckBox
              className="font-normal lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              compid="1003:22577"
              comptype="CheckBox"
              name="10Results Eleven"
              label="Singapore Airlines"
            ></CheckBox>
            <CheckBox
              className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              compid="1003:22580"
              comptype="CheckBox"
              name="10Results Twelve"
              label="Qatar Airways"
            ></CheckBox>
          </Column>
          <Column className="w-[73%]" compid="1003:22592" comptype="Column">
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              compid="19"
              comptype="List"
              orientation="vertical"
            >
              <Row
                className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]"
                compid="1003:22593"
                comptype="Row"
              >
                <Img
                  src="images/img_signal.svg"
                  className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[4%]"
                  compid="I1003:22595;68:399"
                  comptype="Image"
                  alt="signal"
                />
                <Text
                  className="language1"
                  compid="1003:22596"
                  variant="body5"
                  comptype="Text"
                >
                  Turkish Airlines
                </Text>
                <Column
                  className="lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[16%]"
                  compid="1003:22598"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22599"
                    variant="body2"
                    comptype="Text"
                  >
                    11:35 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22600"
                    variant="body5"
                    comptype="Text"
                  >
                    SIN
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[20%]"
                  compid="1003:22601"
                  comptype="Column"
                >
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[60%]"
                    compid="1003:22602"
                    comptype="Image"
                    alt="FlightIcon"
                  />
                  <Text
                    className="FlightDuration"
                    compid="1003:22607"
                    variant="body5"
                    comptype="Text"
                  >
                    33H 10M, 1-stop
                  </Text>
                </Column>
                <Column
                  className="items-end lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[9%]"
                  compid="1003:22608"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22609"
                    variant="body2"
                    comptype="Text"
                  >
                    4:45 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22610"
                    variant="body5"
                    comptype="Text"
                  >
                    LAX
                  </Text>
                </Column>
                <Line
                  className="bg-gray_201 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[1px]"
                  compid="1003:22612"
                  comptype="Line"
                />
                <Text
                  className="price4"
                  compid="1003:22613"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  S$ 723
                </Text>
              </Row>
              <Row
                className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]"
                compid="1003:22614"
                comptype="Row"
              >
                <Img
                  src="images/img_arrowright_46X34.svg"
                  className="lg:h-[36px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] w-[4%]"
                  compid="1003:22616"
                  comptype="Image"
                  alt="arrowright"
                />
                <Text
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic text-gray_700 tracking-ls1 w-[auto]"
                  compid="1003:22617"
                  variant="body5"
                  comptype="Text"
                >
                  Singapore Airlines
                </Text>
                <Column
                  className="lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[18%]"
                  compid="1003:22619"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22620"
                    variant="body2"
                    comptype="Text"
                  >
                    8:45 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22621"
                    variant="body5"
                    comptype="Text"
                  >
                    SIN
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[23%]"
                  compid="1003:22622"
                  comptype="Column"
                >
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[53%]"
                    compid="1003:22623"
                    comptype="Image"
                    alt="FlightIcon One"
                  />
                  <Text
                    className="FlightDuration"
                    compid="1003:22628"
                    variant="body5"
                    comptype="Text"
                  >
                    15H 10M, 2-stops
                  </Text>
                </Column>
                <Column
                  className="items-end lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[11%]"
                  compid="1003:22629"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1326:22162"
                    variant="body2"
                    comptype="Text"
                  >
                    7:55 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22631"
                    variant="body5"
                    comptype="Text"
                  >
                    LAX
                  </Text>
                </Column>
                <Line
                  className="bg-gray_201 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[1px]"
                  compid="1003:22633"
                  comptype="Line"
                />
                <Text
                  className="price4"
                  compid="1003:22634"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  S$ 900
                </Text>
              </Row>
              <Row
                className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]"
                compid="1003:22635"
                comptype="Row"
              >
                <Img
                  src="images/img_file.svg"
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[4%]"
                  compid="I1003:22637;70:534"
                  comptype="Image"
                  alt="file"
                />
                <Text
                  className="language1"
                  compid="1003:22638"
                  variant="body5"
                  comptype="Text"
                >
                  Japan Airlines
                </Text>
                <Column
                  className="lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[15%]"
                  compid="1003:22640"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22641"
                    variant="body2"
                    comptype="Text"
                  >
                    8:20 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22642"
                    variant="body5"
                    comptype="Text"
                  >
                    SIN
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[19%]"
                  compid="1003:22643"
                  comptype="Column"
                >
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[63%]"
                    compid="1003:22644"
                    comptype="Image"
                    alt="FlightIcon Two"
                  />
                  <Text
                    className="FlightDuration"
                    compid="1327:25171"
                    variant="body5"
                    comptype="Text"
                  >
                    17H 30M, 1-stop
                  </Text>
                </Column>
                <Column
                  className="items-end lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[9%]"
                  compid="1003:22650"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22651"
                    variant="body2"
                    comptype="Text"
                  >
                    9:50 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22652"
                    variant="body5"
                    comptype="Text"
                  >
                    LAX
                  </Text>
                </Column>
                <Line
                  className="bg-gray_201 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[1px]"
                  compid="1003:22654"
                  comptype="Line"
                />
                <Text
                  className="price4"
                  compid="1003:22655"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  S$ 859
                </Text>
              </Row>
              <Row
                className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]"
                compid="1003:22656"
                comptype="Row"
              >
                <Img
                  src="images/img_signal_24X34.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[4%]"
                  compid="I1003:22658;70:556"
                  comptype="Image"
                  alt="signal One"
                />
                <Text
                  className="language1"
                  compid="1003:22659"
                  variant="body5"
                  comptype="Text"
                >
                  ANA
                </Text>
                <Column
                  className="lg:ml-[101px] xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] w-[9%]"
                  compid="1003:22661"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22662"
                    variant="body2"
                    comptype="Text"
                  >
                    6:35 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22663"
                    variant="body5"
                    comptype="Text"
                  >
                    SIN
                  </Text>
                </Column>
                <Column
                  className="items-center 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] w-[14%]"
                  compid="1003:22664"
                  comptype="Column"
                >
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[88%]"
                    compid="1003:22665"
                    comptype="Image"
                    alt="FlightIcon Three"
                  />
                  <Text
                    className="FlightDuration"
                    compid="1003:22670"
                    variant="body5"
                    comptype="Text"
                  >
                    19H 15M, 1-stop
                  </Text>
                </Column>
                <Column
                  className="items-end 2xl:ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] w-[9%]"
                  compid="1003:22671"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22672"
                    variant="body2"
                    comptype="Text"
                  >
                    9:50 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22673"
                    variant="body5"
                    comptype="Text"
                  >
                    LAX
                  </Text>
                </Column>
                <Line
                  className="bg-gray_201 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[1px]"
                  compid="1003:22675"
                  comptype="Line"
                />
                <Text
                  className="price4"
                  compid="1003:22676"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  S$ 936
                </Text>
              </Row>
              <Row
                className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]"
                compid="1003:22677"
                comptype="Row"
              >
                <Img
                  src="images/img_group376.png"
                  className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:w-[26px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[40px]"
                  compid="I1003:22679;70:605"
                  comptype="Image"
                  alt="Group376"
                />
                <Text
                  className="language1"
                  compid="1003:22680"
                  variant="body5"
                  comptype="Text"
                >
                  American Airlines
                </Text>
                <Column
                  className="lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[18%]"
                  compid="1003:22682"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22683"
                    variant="body2"
                    comptype="Text"
                  >
                    8:20 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22684"
                    variant="body5"
                    comptype="Text"
                  >
                    SIN
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[22%]"
                  compid="1003:22685"
                  comptype="Column"
                >
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[55%]"
                    compid="1003:22686"
                    comptype="Image"
                    alt="FlightIcon Four"
                  />
                  <Text
                    className="FlightDuration"
                    compid="1003:22691"
                    variant="body5"
                    comptype="Text"
                  >
                    17H 30M, 1-stop
                  </Text>
                </Column>
                <Column
                  className="items-end lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[11%]"
                  compid="1003:22692"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22693"
                    variant="body2"
                    comptype="Text"
                  >
                    9:50 AM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22694"
                    variant="body5"
                    comptype="Text"
                  >
                    LAX
                  </Text>
                </Column>
                <Line
                  className="bg-gray_201 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[1px]"
                  compid="1003:22696"
                  comptype="Line"
                />
                <Text
                  className="price4"
                  compid="1003:22697"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  S$ 939
                </Text>
              </Row>
              <Row
                className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]"
                compid="1003:22698"
                comptype="Row"
              >
                <Img
                  src="images/img_signal.svg"
                  className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[4%]"
                  compid="I1003:22700;68:399"
                  comptype="Image"
                  alt="signal Two"
                />
                <Text
                  className="language1"
                  compid="1003:22701"
                  variant="body5"
                  comptype="Text"
                >
                  Turkish Airlines
                </Text>
                <Column
                  className="lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[15%]"
                  compid="1003:22703"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22704"
                    variant="body2"
                    comptype="Text"
                  >
                    11:35 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22705"
                    variant="body5"
                    comptype="Text"
                  >
                    SIN
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[21%]"
                  compid="1003:22706"
                  comptype="Column"
                >
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[59%]"
                    compid="1003:22707"
                    comptype="Image"
                    alt="FlightIcon Five"
                  />
                  <Text
                    className="FlightDuration"
                    compid="1003:22712"
                    variant="body5"
                    comptype="Text"
                  >
                    33H 10M, 2-stops
                  </Text>
                </Column>
                <Column
                  className="items-end lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[9%]"
                  compid="1003:22713"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22714"
                    variant="body2"
                    comptype="Text"
                  >
                    4:45 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22715"
                    variant="body5"
                    comptype="Text"
                  >
                    LAX
                  </Text>
                </Column>
                <Line
                  className="bg-gray_201 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[1px]"
                  compid="1003:22717"
                  comptype="Line"
                />
                <Text
                  className="price4"
                  compid="1003:22718"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  S$ 673
                </Text>
              </Row>
              <Row
                className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]"
                compid="1003:22719"
                comptype="Row"
              >
                <Img
                  src="images/img_file.svg"
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[4%]"
                  compid="I1003:22721;70:534"
                  comptype="Image"
                  alt="file One"
                />
                <Text
                  className="language1"
                  compid="1003:22722"
                  variant="body5"
                  comptype="Text"
                >
                  Japan Airlines
                </Text>
                <Column
                  className="lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[15%]"
                  compid="1003:22724"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22725"
                    variant="body2"
                    comptype="Text"
                  >
                    10:25 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22726"
                    variant="body5"
                    comptype="Text"
                  >
                    SIN
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[19%]"
                  compid="1003:22727"
                  comptype="Column"
                >
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[64%]"
                    compid="1003:22728"
                    comptype="Image"
                    alt="FlightIcon Six"
                  />
                  <Text
                    className="FlightDuration"
                    compid="1003:22733"
                    variant="body5"
                    comptype="Text"
                  >
                    26H 45M, 1-stop
                  </Text>
                </Column>
                <Column
                  className="items-end lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[9%]"
                  compid="1003:22734"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22735"
                    variant="body2"
                    comptype="Text"
                  >
                    9:10 AM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22736"
                    variant="body5"
                    comptype="Text"
                  >
                    LAX
                  </Text>
                </Column>
                <Line
                  className="bg-gray_201 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[1px]"
                  compid="1003:22738"
                  comptype="Line"
                />
                <Text
                  className="price4"
                  compid="1003:22739"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  S$ 859
                </Text>
              </Row>
              <Row
                className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]"
                compid="1003:22740"
                comptype="Row"
              >
                <Img
                  src="images/img_group376.png"
                  className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:w-[26px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[40px]"
                  compid="I1003:22742;70:605"
                  comptype="Image"
                  alt="Group376 One"
                />
                <Text
                  className="language1"
                  compid="1003:22743"
                  variant="body5"
                  comptype="Text"
                >
                  American Airlines
                </Text>
                <Column
                  className="lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[18%]"
                  compid="1003:22745"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22746"
                    variant="body2"
                    comptype="Text"
                  >
                    10:25 PM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22747"
                    variant="body5"
                    comptype="Text"
                  >
                    SIN
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[22%]"
                  compid="1003:22748"
                  comptype="Column"
                >
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[55%]"
                    compid="1003:22749"
                    comptype="Image"
                    alt="FlightIcon Seven"
                  />
                  <Text
                    className="FlightDuration"
                    compid="1003:22754"
                    variant="body5"
                    comptype="Text"
                  >
                    26H 45M, 1-stop
                  </Text>
                </Column>
                <Column
                  className="items-end lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[11%]"
                  compid="1003:22755"
                  comptype="Column"
                >
                  <Text
                    className="text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:22756"
                    variant="body2"
                    comptype="Text"
                  >
                    9:10 AM
                  </Text>
                  <Text
                    className="SIN1"
                    compid="1003:22757"
                    variant="body5"
                    comptype="Text"
                  >
                    LAX
                  </Text>
                </Column>
                <Line
                  className="bg-gray_201 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[1px]"
                  compid="1003:22759"
                  comptype="Line"
                />
                <Text
                  className="price4"
                  compid="1003:22760"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  S$ 859
                </Text>
              </Row>
            </List>
            <Button
              className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[24%]"
              compid="1610:1959"
              comptype="Button"
              size="xl"
              variant="FillBlue800"
            >
              Show more results
            </Button>
          </Column>
        </Row>
        <footer
          className="font-roboto lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]"
          compid="1016:12755"
          comptype="Footer"
        >
          <Column
            className="items-center w-[100%]"
            compid="16"
            comptype="Column"
          >
            <Column
              className="bg-cover bg-gray_100 bg-repeat items-center justify-end lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] w-[100%]"
              compid="1016:12756"
              style={{
                backgroundImage: "url('images/img_subscribesecti.png')",
              }}
              comptype="Column"
            >
              <Text
                className="FormTitleSubt"
                compid="1016:12760"
                variant="body4"
                comptype="Text"
              >
                subscribe to our newsletter
              </Text>
              <Text
                className="FormTitle"
                compid="1016:12761"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Get weekly updates
              </Text>
              <Column
                className="bg-white_A700 border border-gray_200 border-solid justify-end lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[21px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius12 shadow-bs w-[39%]"
                compid="1016:12762"
                comptype="Column"
              >
                <Text
                  className="Form"
                  compid="1016:12764"
                  variant="body4"
                  comptype="Text"
                >
                  Fill in your details to join the party!
                </Text>
                <Input
                  className="placeholder:text-black_900_99 Input2"
                  wrapClassName="2xl:mt-[23px] 3xl:mt-[27px] lg:mt-[17px] ml-[2px] w-[99%] xl:mt-[20px]"
                  compid="1016:12767"
                  type="text"
                  comptype="EditText"
                  name="Input"
                  placeholder="Your name"
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 Input2"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] ml-[2px] w-[99%] xl:mt-[8px]"
                  compid="1016:12775"
                  type="email"
                  comptype="EditText"
                  name="Input One"
                  placeholder="Email address"
                ></Input>
                <Button
                  className="font-medium ml-[2px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[36%]"
                  compid="1016:12782"
                  comptype="Button"
                  size="lg"
                >
                  submit
                </Button>
              </Column>
            </Column>
            <Row
              className="bg-gradient1  lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] w-[100%]"
              compid="1016:12784"
              comptype="Row"
            >
              <Column
                className="lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] mt-[1px] pb-[1px] pr-[1px] w-[46%]"
                compid="1016:12785"
                comptype="Column"
              >
                <Img
                  src="images/img_combinedshape_white_A700.svg"
                  className="CombinedShape_One"
                  compid="1016:12787"
                  comptype="Image"
                  alt="CombinedShape One"
                />
                <Text
                  className="FickleFlightBi"
                  compid="1016:12788"
                  variant="body4"
                  comptype="Text"
                >
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </Text>
                <Img
                  src="images/img_socialicons.svg"
                  className="SocialIcons"
                  compid="1016:12789"
                  comptype="Image"
                  alt="SocialIcons"
                />
              </Column>
              <Line
                className="bg-white_A700_33 lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] mb-[2px] w-[1px]"
                compid="1016:12796"
                comptype="Line"
              />
              <Column
                className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[11%]"
                compid="1016:12798"
                comptype="Column"
              >
                <Text
                  className="font-medium text-white_A700 w-[auto]"
                  compid="1016:12800"
                  variant="body3"
                  comptype="Text"
                >
                  Company
                </Text>
                <Text
                  className="AboutUs"
                  compid="1016:12799"
                  variant="body5"
                  comptype="Text"
                >
                  About Us
                </Text>
                <Text
                  className="News"
                  compid="1016:12801"
                  variant="body5"
                  comptype="Text"
                >
                  News
                </Text>
                <Text
                  className="Careers"
                  compid="1016:12802"
                  variant="body5"
                  comptype="Text"
                >
                  Careers
                </Text>
                <Text
                  className="Howwework"
                  compid="1016:12803"
                  variant="body5"
                  comptype="Text"
                >
                  How we work
                </Text>
              </Column>
              <Column
                className="lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[119px] xl:w-[136px] 2xl:w-[154px] 3xl:w-[184px]"
                compid="1016:12804"
                comptype="Column"
              >
                <Text
                  className="font-medium text-white_A700 w-[auto]"
                  compid="1016:12806"
                  variant="body3"
                  comptype="Text"
                >
                  Support
                </Text>
                <Text
                  className="Account"
                  compid="1016:12805"
                  variant="body5"
                  comptype="Text"
                >
                  Account
                </Text>
                <Text
                  className="News"
                  compid="1016:12807"
                  variant="body5"
                  comptype="Text"
                >
                  Support Center
                </Text>
                <Text
                  className="Careers"
                  compid="1016:12808"
                  variant="body5"
                  comptype="Text"
                >
                  FAQ
                </Text>
                <Text
                  className="Accessibility"
                  compid="1016:12809"
                  variant="body5"
                  comptype="Text"
                >
                  Accessibility
                </Text>
              </Column>
              <Column
                className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] mt-[2px] w-[9%]"
                compid="1016:12810"
                comptype="Column"
              >
                <Text
                  className="font-medium text-white_A700 w-[auto]"
                  compid="1016:12812"
                  variant="body3"
                  comptype="Text"
                >
                  More
                </Text>
                <Text
                  className="CovidAdvisory"
                  compid="1016:12811"
                  variant="body5"
                  comptype="Text"
                >
                  Covid Advisory
                </Text>
                <Text
                  className="Accessibility"
                  compid="1016:12813"
                  variant="body5"
                  comptype="Text"
                >
                  Airline Fees
                </Text>
                <Text
                  className="Tips"
                  compid="1016:12814"
                  variant="body5"
                  comptype="Text"
                >
                  Tips
                </Text>
                <Text
                  className="Accessibility"
                  compid="1016:12815"
                  variant="body5"
                  comptype="Text"
                >
                  Quarantine Rules
                </Text>
              </Column>
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ResultsPagePage;
