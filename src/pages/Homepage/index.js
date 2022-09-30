import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  RadioGroup,
  Radio,
  Button,
  Line,
  List,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const HomepagePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/hotelspage");
  }
  function handleNavigate1() {
    navigate("/hotelspage");
  }
  function handleNavigate2() {
    navigate("/resultspage");
  }
  function handleNavigate7() {
    navigate("/hotelspage");
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-roboto items-center mx-[auto] w-[100%]"
        compid="1003:3841"
        comptype="Column"
      >
        <header className="w-[100%]" compid="9" comptype="Header">
          <Row
            className="bg-white_A700 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]"
            compid="1003:3844"
            comptype="Row"
          >
            <Img
              src="images/img_combinedshape.png"
              className="common-pointer CombinedShape"
              compid="1003:3849"
              comptype="Image"
              onClick={handleNavigate}
              alt="CombinedShape"
            />
            <Text
              className="hover:font-normal lg:ml-[574px] xl:ml-[656px] 2xl:ml-[738px] 3xl:ml-[886px] text-blue_800 TopContainer"
              compid="1003:3852"
              variant="body7"
              comptype="Text"
            >
              Explore
            </Text>
            <Text
              className="common-pointer hover:font-normal hover:text-blue_800 Search"
              compid="1003:3853"
              variant="body7"
              comptype="Text"
              onClick={handleNavigate2}
            >
              Search
            </Text>
            <Text
              className="hover:font-normal hover:text-blue_800 Search"
              compid="1003:3854"
              variant="body7"
              comptype="Text"
            >
              Hotels
            </Text>
            <Text
              className="hover:font-normal hover:text-blue_800 Search"
              compid="1003:3855"
              variant="body7"
              comptype="Text"
            >
              Offers
            </Text>
            <Img
              src="images/img_notification.svg"
              className="notification"
              compid="1003:3861"
              comptype="Image"
              alt="notification"
            />
            <Img
              src="images/img_profilepicture.png"
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
              compid="1003:3865"
              comptype="CircleImage"
              alt="profilepicture"
            />
          </Row>
        </header>
        <Stack
          className="lg:h-[498px] xl:h-[570px] 2xl:h-[641px] 3xl:h-[769px] w-[100%]"
          compid="1003:3866"
          comptype="Stack"
        >
          <div
            className="absolute bg-gradient  bottom-[0] lg:h-[497px] xl:h-[569px] 2xl:h-[640px] 3xl:h-[768px] w-[100%]"
            compid="1003:3867"
            comptype="View"
          ></div>
          <Stack
            className="absolute lg:h-[497px] xl:h-[569px] 2xl:h-[640px] 3xl:h-[768px] top-[0] w-[100%]"
            compid="4"
            comptype="Stack"
          >
            <Img
              src="images/img_bannerbackgro.png"
              className="absolute lg:h-[498px] xl:h-[570px] 2xl:h-[641px] 3xl:h-[769px] w-[100%]"
              compid="1003:3868"
              comptype="Image"
              alt="BannerBackgro"
            />
            <Column
              className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] pt-[3px] w-[81%]"
              compid="1003:3869"
              comptype="Column"
            >
              <Text
                className="font-baloobhai not-italic text-white_A700 w-[auto]"
                compid="1003:3871"
                as="h1"
                variant="h1"
                comptype="Text"
              >
                Let’s explore & travel the world
              </Text>
              <Text
                className="font-roboto Howwework"
                compid="1003:3872"
                as="h6"
                variant="h6"
                comptype="Text"
              >
                Find the best destinations and the most popular stays!
              </Text>
              <Column
                className="bg-white_A700 font-roboto items-center justify-end lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[100%]"
                compid="1229:822"
                comptype="Column"
              >
                <Row
                  className="items-center justify-between lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] w-[99%]"
                  compid="1229:823"
                  comptype="Row"
                >
                  <Text
                    className="FormTitleGrou"
                    compid="1229:824"
                    variant="body3"
                    comptype="Text"
                  >
                    Search flights
                  </Text>
                  <RadioGroup
                    selectedValue="Return"
                    className="flex w-[19%]"
                    compid="17"
                    comptype="RadioGroup"
                    name="radiogrouplabel"
                  >
                    <Radio
                      value="Return"
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900_dd tracking-ls1"
                      inputClassName="h-[16.67px] mr-[5px] w-[16.67px]"
                      compid="1229:827"
                      comptype="Radio"
                      checked={true}
                      name="radiogrouplabel"
                      label="Return"
                    ></Radio>
                    <Radio
                      value="Oneway"
                      className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900_dd tracking-ls1"
                      inputClassName="h-[16.67px] mr-[5px] w-[16.67px]"
                      compid="1229:831"
                      comptype="Radio"
                      checked={true}
                      name="radiogrouplabel"
                      label="Oneway"
                    ></Radio>
                  </RadioGroup>
                </Row>
                <Row
                  className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[100%]"
                  compid="1229:835"
                  comptype="Row"
                >
                  <Column
                    className="border border-black_900_3a border-solid xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[27%]"
                    compid="1229:839"
                    comptype="Column"
                  >
                    <Text
                      className="bg-white_A700 ml-[4px] not-italic text-black_900_99 tracking-ls1 w-[54px]"
                      compid="1229:840"
                      variant="body8"
                      comptype="Text"
                    >
                      Departure
                    </Text>
                    <Text
                      className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] Active"
                      compid="1229:844"
                      variant="body5"
                      comptype="Text"
                    >
                      Singapore (SIN)
                    </Text>
                  </Column>
                  <Column
                    className="border border-black_900_3a border-solid 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[27%]"
                    compid="1229:847"
                    comptype="Column"
                  >
                    <Column
                      className="bg-white_A700 items-center ml-[4px] w-[12%]"
                      compid="1229:848"
                      comptype="Column"
                    >
                      <div
                        className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                        compid="2"
                        comptype="View"
                      ></div>
                      <Text
                        className="LabelContainer1"
                        compid="1229:849"
                        variant="body8"
                        comptype="Text"
                      >
                        Arrival
                      </Text>
                    </Column>
                    <Text
                      className="Input1"
                      compid="1229:852"
                      variant="body5"
                      comptype="Text"
                    >
                      Los Angeles (LA)
                    </Text>
                  </Column>
                  <Column
                    className="border border-black_900_3a border-solid 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[27%]"
                    compid="1229:855"
                    comptype="Column"
                  >
                    <Column
                      className="bg-white_A700 items-center ml-[4px] w-[9%]"
                      compid="1229:856"
                      comptype="Column"
                    >
                      <div
                        className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                        compid="3"
                        comptype="View"
                      ></div>
                      <Text
                        className="LabelContainer1"
                        compid="1229:857"
                        variant="body8"
                        comptype="Text"
                      >
                        Date
                      </Text>
                    </Column>
                    <Row
                      className="items-center justify-between lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[99%]"
                      compid="1229:858"
                      comptype="Row"
                    >
                      <Text
                        className="Active"
                        compid="1229:860"
                        variant="body5"
                        comptype="Text"
                      >
                        01/05/2022
                      </Text>
                      <Img
                        src="images/img_trash.svg"
                        className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[6%]"
                        compid="I1229:861;615:698"
                        comptype="Image"
                        alt="trash"
                      />
                    </Row>
                  </Column>
                  <Button
                    className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[15%]"
                    compid="1323:1383"
                    comptype="Button"
                    size="lg"
                  >
                    Search flights
                  </Button>
                </Row>
              </Column>
            </Column>
          </Stack>
        </Stack>
        <Column
          className="lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] lg:px-[62px] xl:px-[71px] 2xl:px-[80px] 3xl:px-[96px] w-[100%]"
          compid="18"
          comptype="Column"
        >
          <Text
            className="FormTitleGrou"
            compid="1003:3905"
            variant="body4"
            comptype="Text"
          >
            Upcoming Flight
          </Text>
        </Column>
        <Row
          className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[89%]"
          compid="1003:3906"
          comptype="Row"
        >
          <Column
            className="border border-gray_200 border-solid items-center mb-[1px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius8 w-[41%]"
            compid="1003:3907"
            comptype="Column"
          >
            <Row
              className="items-center pt-[1px] w-[100%]"
              compid="1003:3908"
              comptype="Row"
            >
              <Column
                className="mt-[1px] w-[36%]"
                compid="1003:3909"
                comptype="Column"
              >
                <Text
                  className="capitalize font-bold text-blue_801 tracking-ls1 w-[auto]"
                  compid="1003:3910"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  SIN
                </Text>
                <Text
                  className="capitalize mt-[4px] DepartureDetai"
                  compid="1003:3911"
                  variant="body7"
                  comptype="Text"
                >
                  Singapore
                </Text>
              </Column>
              <Column
                className="mb-[1px] pr-[2px] pt-[2px] w-[48%]"
                compid="1003:3912"
                comptype="Column"
              >
                <Img
                  src="images/img_flighticons.svg"
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] 2xl:mr-[108px] 3xl:mr-[129px] lg:mr-[84px] xl:mr-[96px] w-[52%]"
                  compid="1003:3914"
                  comptype="Image"
                  alt="Flighticons"
                />
                <Text
                  className="capitalize font-bold lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-bluegray_400 tracking-ls1 w-[auto]"
                  compid="1003:3913"
                  variant="body7"
                  comptype="Text"
                >
                  15H 55M
                </Text>
              </Column>
              <Column
                className="items-end mt-[1px] w-[16%]"
                compid="1003:3920"
                comptype="Column"
              >
                <Text
                  className="capitalize font-bold text-blue_801 tracking-ls1 w-[auto]"
                  compid="1003:3921"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  LAX
                </Text>
                <Text
                  className="capitalize mt-[4px] DepartureDetai"
                  compid="1003:3922"
                  variant="body7"
                  comptype="Text"
                >
                  Los Angeles
                </Text>
              </Column>
            </Row>
            <Line
              className="bg-gray_200 h-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
              compid="1003:3923"
              comptype="Line"
            />
            <Row
              className="items-center justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
              compid="1003:3924"
              comptype="Row"
            >
              <Text
                className="capitalize DepartureDetai"
                compid="1003:3925"
                variant="body7"
                comptype="Text"
              >
                Departs on: 1 May, 08:00 AM
              </Text>
              <Text
                className="DepartureDetai"
                compid="1003:3926"
                variant="body7"
                comptype="Text"
              >
                4 days to go
              </Text>
            </Row>
          </Column>
          <Line
            className="bg-gray_200 lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[1px]"
            compid="1003:3927"
            comptype="Line"
          />
          <Column
            className="lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] mt-[1px] w-[54%]"
            compid="1003:3928"
            comptype="Column"
          >
            <Text
              className="font-normal not-italic text-bluegray_101 tracking-ls1 uppercase w-[auto]"
              compid="1003:3929"
              variant="body4"
              comptype="Text"
            >
              Prepare for your trip
            </Text>
            <Row
              className="items-center justify-evenly lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] pb-[1px] w-[100%]"
              compid="1003:3930"
              comptype="Row"
            >
              <Column
                className="items-center w-[17%]"
                compid="1003:3931"
                comptype="Column"
              >
                <Button
                  className="flex lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] items-center justify-center lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  compid="1003:3932"
                  comptype="IconButton"
                  shape="icbRoundedBorder16"
                  size="smIcn"
                  variant="icbFillPink300"
                >
                  <Img
                    src="images/img_car.svg"
                    className="flex items-center justify-center"
                    alt="car"
                  />
                </Button>
                <Text
                  className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-bluegray_400 tracking-ls1 w-[auto]"
                  compid="1003:3937"
                  variant="body6"
                  comptype="Text"
                >
                  Hotel
                </Text>
              </Column>
              <Column
                className="items-center mb-[1px] w-[20%]"
                compid="1003:3938"
                comptype="Column"
              >
                <Button
                  className="flex lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] items-center justify-center lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  compid="1003:3939"
                  comptype="IconButton"
                  shape="icbRoundedBorder16"
                  size="smIcn"
                  variant="icbFillDeeporange300"
                >
                  <Img
                    src="images/img_ticket.svg"
                    className="flex items-center justify-center lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px]"
                    alt="ticket"
                  />
                </Button>
                <Text
                  className="Attractions"
                  compid="1003:3943"
                  variant="body6"
                  comptype="Text"
                >
                  Attractions
                </Text>
              </Column>
              <Column
                className="items-center w-[17%]"
                compid="1003:3944"
                comptype="Column"
              >
                <Button
                  className="flex lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] items-center justify-center lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  compid="1003:3945"
                  comptype="IconButton"
                  shape="icbRoundedBorder16"
                  size="smIcn"
                  variant="icbFillGreenA400"
                >
                  <Img
                    src="images/img_map.svg"
                    className="flex items-center justify-center"
                    alt="map"
                  />
                </Button>
                <Text
                  className="Attractions"
                  compid="1003:3950"
                  variant="body6"
                  comptype="Text"
                >
                  Eats
                </Text>
              </Column>
              <Column
                className="mb-[1px] w-[18%]"
                compid="1003:3951"
                comptype="Column"
              >
                <Button
                  className="flex lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] items-center justify-center ml-[2px] lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  compid="1003:3952"
                  comptype="IconButton"
                  shape="icbRoundedBorder16"
                  size="smIcn"
                  variant="icbFillAmberA400"
                >
                  <Img
                    src="images/img_car_65X65.svg"
                    className="flex items-center justify-center"
                    alt="car One"
                  />
                </Button>
                <Text
                  className="Attractions"
                  compid="1003:3955"
                  variant="body6"
                  comptype="Text"
                >
                  Commute
                </Text>
              </Column>
              <Column
                className="items-center mb-[1px] w-[18%]"
                compid="1003:3956"
                comptype="Column"
              >
                <Stack
                  className="common-pointer bg-blue_400 lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] lg:px-[14px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] rounded-radius16 w-[56%]"
                  compid="1003:3957"
                  comptype="Stack"
                  onClick={handleNavigate1}
                >
                  <Img
                    src="images/img_car_26X28.svg"
                    className="absolute lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] w-[40%]"
                    compid="1003:3959"
                    comptype="Image"
                    alt="car Two"
                  />
                </Stack>
                <Text
                  className="Attractions"
                  compid="1003:3960"
                  variant="body6"
                  comptype="Text"
                >
                  Taxi
                </Text>
              </Column>
              <Column
                className="items-center mb-[1px] w-[9%]"
                compid="1003:3961"
                comptype="Column"
              >
                <Button
                  className="flex lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] items-center justify-center w-[100%]"
                  compid="1003:3962"
                  comptype="IconButton"
                  shape="icbRoundedBorder16"
                  size="mdIcn"
                  variant="icbFillLightgreenA700"
                >
                  <Img
                    src="images/img_movie.svg"
                    className="flex items-center justify-center"
                    alt="Movie"
                  />
                </Button>
                <Text
                  className="Attractions"
                  compid="1003:3965"
                  variant="body6"
                  comptype="Text"
                >
                  Movies
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
        <Row
          className="items-center lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] pt-[1px] w-[89%]"
          compid="1003:3967"
          comptype="Row"
        >
          <Column className="w-[82%]" compid="1003:3968" comptype="Column">
            <Text
              className="font-bold text-blue_801 tracking-ls1 uppercase w-[auto]"
              compid="1003:3969"
              variant="body4"
              comptype="Text"
            >
              Plan your next trip
            </Text>
            <Text
              className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] rectitle"
              compid="1003:3970"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              Most Popular Destinations
            </Text>
          </Column>
          <Row
            className="bg-white_A700 items-center justify-end p-[1px] rounded-radius12 w-[18%]"
            compid="1003:3971"
            comptype="Row"
          >
            <Text
              className="font-medium mb-[3px] text-blue_801 tracking-ls1 w-[auto]"
              compid="1003:3972"
              variant="body4"
              comptype="Text"
            >
              View all destinations
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[2px] w-[7%]"
              compid="1003:3974"
              comptype="Image"
              alt="arrowright"
            />
          </Row>
        </Row>
        <List
          className="lg:gap-[24px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-4 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[87%]"
          compid="1003:3977"
          comptype="List"
          orientation="horizontal"
        >
          <Row
            className="bg-cover bg-repeat justify-between lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius10 w-[100%]"
            compid="1003:3981"
            style={{ backgroundImage: "url('images/img_destinationdet.png')" }}
            comptype="Row"
          >
            <Text
              className="DestinationDet"
              compid="1003:3982"
              variant="body3"
              comptype="Text"
            >
              Paris
            </Text>
            <Column
              className="items-end 2xl:mb-[108px] 3xl:mb-[129px] lg:mb-[84px] xl:mb-[96px] mr-[3px] mt-[1px] w-[31%]"
              compid="1003:3983"
              comptype="Column"
            >
              <Text
                className="from"
                compid="1003:3985"
                variant="body5"
                comptype="Text"
              >
                from
              </Text>
              <Text
                className="price"
                compid="1003:3984"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                $699
              </Text>
            </Column>
          </Row>
          <Row
            className="bg-cover bg-repeat justify-center lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius10 w-[100%]"
            compid="1003:3989"
            style={{
              backgroundImage: "url('images/img_destinationdet_182X288.png')",
            }}
            comptype="Row"
          >
            <Text
              className="DestinationDet"
              compid="1003:3990"
              variant="body3"
              comptype="Text"
            >
              Greece
            </Text>
            <Column
              className="items-end 2xl:mb-[108px] 3xl:mb-[129px] lg:mb-[84px] xl:mb-[96px] 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] mr-[3px] mt-[1px] w-[36%]"
              compid="1003:3991"
              comptype="Column"
            >
              <Text
                className="from"
                compid="1003:3993"
                variant="body5"
                comptype="Text"
              >
                from
              </Text>
              <Text
                className="mr-[1px] price"
                compid="1003:3992"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                $1079
              </Text>
            </Column>
          </Row>
          <Row
            className="bg-cover bg-repeat justify-center 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[100%]"
            compid="1003:3997"
            style={{
              backgroundImage: "url('images/img_destinationdet_1.png')",
            }}
            comptype="Row"
          >
            <Text
              className="DestinationDet1"
              compid="1003:3998"
              variant="body3"
              comptype="Text"
            >
              Norway
            </Text>
            <Column
              className="items-end 2xl:mb-[108px] 3xl:mb-[129px] lg:mb-[84px] xl:mb-[96px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] mr-[2px] w-[30%]"
              compid="1003:3999"
              comptype="Column"
            >
              <Text
                className="from"
                compid="1003:4001"
                variant="body5"
                comptype="Text"
              >
                from
              </Text>
              <Text
                className="price"
                compid="1003:4000"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                $895
              </Text>
            </Column>
          </Row>
          <Row
            className="bg-cover bg-repeat justify-between 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[100%]"
            compid="1003:4005"
            style={{
              backgroundImage: "url('images/img_destinationdet_2.png')",
            }}
            comptype="Row"
          >
            <Text
              className="DestinationDet1"
              compid="1003:4006"
              variant="body3"
              comptype="Text"
            >
              Tuscany
            </Text>
            <Column
              className="items-end 2xl:mb-[108px] 3xl:mb-[129px] lg:mb-[84px] xl:mb-[96px] mr-[2px] w-[36%]"
              compid="1003:4007"
              comptype="Column"
            >
              <Text
                className="from"
                compid="1003:4009"
                variant="body5"
                comptype="Text"
              >
                from
              </Text>
              <Text
                className="price"
                compid="1003:4008"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                $1245
              </Text>
            </Column>
          </Row>
        </List>
        <Column
          className="items-center lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] rounded-radius31 w-[89%]"
          compid="1003:4016"
          comptype="Column"
        >
          <Row
            className="justify-between w-[100%]"
            compid="1003:4017"
            comptype="Row"
          >
            <Text
              className="rectitle"
              compid="1003:4018"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              Recommended Holidays
            </Text>
            <Row
              className="bg-white_A700 items-center justify-end mt-[1px] p-[2px] rounded-radius12 w-[16%]"
              compid="1003:4019"
              comptype="Row"
            >
              <Text
                className="rowviewallholida"
                compid="1003:4020"
                variant="body4"
                comptype="Text"
              >
                View all holidays
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[1px] w-[8%]"
                compid="1003:4022"
                comptype="Image"
                alt="arrowright One"
              />
            </Row>
          </Row>
          <List
            className="lg:gap-[24px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-4 min-h-[auto] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[100%]"
            compid="1003:4025"
            comptype="List"
            orientation="horizontal"
          >
            <Column
              className="items-center w-[100%]"
              compid="1003:4026"
              comptype="Column"
            >
              <Img
                src="images/img_unsplash5mv818.png"
                className="unsplash5MV818"
                compid="1003:4027"
                comptype="Image"
                alt="unsplash5MV818"
              />
              <Row
                className="bg-white_A700 border border-gray_200 border-solid items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                compid="1003:4029"
                comptype="Row"
              >
                <Column
                  className="font-roboto my-[4px] w-[72%]"
                  compid="1003:4030"
                  comptype="Column"
                >
                  <Text
                    className="Bali"
                    compid="1003:4031"
                    variant="body3"
                    comptype="Text"
                  >
                    Bali
                  </Text>
                  <Text
                    className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-gray_500 tracking-ls1 w-[auto]"
                    compid="1003:4032"
                    variant="body5"
                    comptype="Text"
                  >
                    4D3N
                  </Text>
                </Column>
                <Text
                  className="rowbali"
                  compid="1003:4033"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  $899
                </Text>
              </Row>
            </Column>
            <Column
              className="items-center w-[100%]"
              compid="1003:4034"
              comptype="Column"
            >
              <Img
                src="images/img_switzerlandimag.png"
                className="unsplash5MV818"
                compid="1003:4035"
                comptype="Image"
                alt="SwitzerlandImag"
              />
              <Row
                className="bg-white_A700 border border-gray_200 border-solid items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                compid="1003:4037"
                comptype="Row"
              >
                <Column
                  className="font-roboto my-[4px] w-[71%]"
                  compid="1003:4038"
                  comptype="Column"
                >
                  <Text
                    className="Bali"
                    compid="1003:4039"
                    variant="body3"
                    comptype="Text"
                  >
                    Swiss
                  </Text>
                  <Text
                    className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-gray_500 tracking-ls1 w-[auto]"
                    compid="1003:4040"
                    variant="body5"
                    comptype="Text"
                  >
                    6D5N
                  </Text>
                </Column>
                <Text
                  className="rowbali"
                  compid="1003:4041"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  $900
                </Text>
              </Row>
            </Column>
            <Column
              className="items-center w-[100%]"
              compid="1003:4042"
              comptype="Column"
            >
              <Img
                src="images/img_boracayimage.png"
                className="unsplash5MV818"
                compid="1003:4043"
                comptype="Image"
                alt="BoracayImage"
              />
              <Row
                className="bg-white_A700 border border-gray_200 border-solid items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                compid="1003:4045"
                comptype="Row"
              >
                <Column
                  className="font-roboto lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[72%]"
                  compid="1003:4046"
                  comptype="Column"
                >
                  <Text
                    className="Bali"
                    compid="1003:4047"
                    variant="body3"
                    comptype="Text"
                  >
                    Boracay
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 tracking-ls1 w-[auto]"
                    compid="1003:4048"
                    variant="body5"
                    comptype="Text"
                  >
                    5D4N
                  </Text>
                </Column>
                <Text
                  className="rowbali"
                  compid="1003:4049"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  $699
                </Text>
              </Row>
            </Column>
            <Column
              className="items-center w-[100%]"
              compid="1003:4050"
              comptype="Column"
            >
              <Img
                src="images/img_palawanimage.png"
                className="unsplash5MV818"
                compid="1003:4051"
                comptype="Image"
                alt="PalawanImage"
              />
              <Row
                className="bg-white_A700 border border-gray_200 border-solid items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                compid="1003:4053"
                comptype="Row"
              >
                <Column
                  className="font-roboto my-[4px] w-[73%]"
                  compid="1003:4054"
                  comptype="Column"
                >
                  <Text
                    className="Bali"
                    compid="1003:4055"
                    variant="body3"
                    comptype="Text"
                  >
                    Palawan
                  </Text>
                  <Text
                    className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-gray_500 tracking-ls1 w-[auto]"
                    compid="1003:4056"
                    variant="body5"
                    comptype="Text"
                  >
                    4D3N
                  </Text>
                </Column>
                <Text
                  className="rowbali"
                  compid="1003:4057"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  $789
                </Text>
              </Row>
            </Column>
          </List>
        </Column>
        <Row
          className="justify-between 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] w-[89%]"
          compid="1003:4065"
          comptype="Row"
        >
          <Text
            className="rectitle"
            compid="1003:4067"
            as="h5"
            variant="h5"
            comptype="Text"
          >
            Popular Stays
          </Text>
          <Row
            className="common-pointer bg-white_A700 items-center justify-end mt-[1px] p-[2px] rounded-radius12 w-[14%]"
            compid="1003:4068"
            comptype="Row"
            onClick={handleNavigate7}
          >
            <Text
              className="rowviewallholida"
              compid="1003:4069"
              variant="body4"
              comptype="Text"
            >
              View all stays
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[1px] w-[9%]"
              compid="1003:4071"
              comptype="Image"
              alt="arrowright Two"
            />
          </Row>
        </Row>
        <List
          className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-4 min-h-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[87%]"
          compid="1003:4074"
          comptype="List"
          orientation="horizontal"
        >
          <Column
            className="bg-white_A700 border border-gray_200 border-solid lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius10 w-[100%]"
            compid="1003:4076"
            comptype="Column"
          >
            <Img
              src="images/img_matterhornsuit.png"
              className="MatterhornSuit"
              compid="1003:4077"
              comptype="Image"
              alt="MatterhornSuit"
            />
            <Row
              className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]"
              compid="1003:4078"
              comptype="Row"
            >
              <Column className="w-[91%]" compid="1003:4079" comptype="Column">
                <Text
                  className="DepartureDetai"
                  compid="1003:4080"
                  variant="body5"
                  comptype="Text"
                >
                  Entire bungalow
                </Text>
                <Text
                  className="MatterhornSuit_One"
                  compid="1003:4081"
                  variant="body1"
                  comptype="Text"
                >
                  Matterhorn Suites
                </Text>
                <Text
                  className="price_Eight"
                  compid="1003:4082"
                  variant="body4"
                  comptype="Text"
                >
                  $575/night
                </Text>
              </Column>
              <Img
                src="images/img_play.svg"
                className="play"
                compid="I1003:4083;169:428"
                comptype="Image"
                alt="play"
              />
            </Row>
            <Row
              className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[54%]"
              compid="1003:4084"
              comptype="Row"
            >
              <Img
                src="images/img_star.svg"
                className="star"
                compid="1003:4088"
                comptype="Image"
                alt="star"
              />
              <Text
                className="FortyNine"
                compid="1003:4087"
                variant="body5"
                comptype="Text"
              >
                4.9
              </Text>
              <Text
                className="test_60reviews"
                compid="1003:4085"
                variant="body5"
                comptype="Text"
              >
                (60 reviews)
              </Text>
            </Row>
            <Button
              className="font-medium mb-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[100%]"
              compid="1003:4089"
              comptype="Button"
              variant="OutlineBluegray102"
            >
              More details
            </Button>
          </Column>
          <Column
            className="items-center rounded-radius10 w-[100%]"
            compid="1003:4091"
            comptype="Column"
          >
            <Column
              className="bg-white_A700 border border-gray_200 border-solid lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius10 w-[100%]"
              compid="1003:4092"
              comptype="Column"
            >
              <Img
                src="images/img_discoveryshore.png"
                className="MatterhornSuit"
                compid="1003:4093"
                comptype="Image"
                alt="DiscoveryShore"
              />
              <Row
                className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]"
                compid="1003:4094"
                comptype="Row"
              >
                <Column
                  className="w-[91%]"
                  compid="1003:4095"
                  comptype="Column"
                >
                  <Text
                    className="DepartureDetai"
                    compid="1003:4096"
                    variant="body5"
                    comptype="Text"
                  >
                    2-Story beachfront suite
                  </Text>
                  <Text
                    className="DiscoveryShore_One"
                    compid="1003:4097"
                    variant="body1"
                    comptype="Text"
                  >
                    Discovery Shores
                  </Text>
                  <Text
                    className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_900 tracking-ls1 w-[auto]"
                    compid="1003:4098"
                    variant="body4"
                    comptype="Text"
                  >
                    $360/night
                  </Text>
                </Column>
                <Img
                  src="images/img_play.svg"
                  className="play"
                  compid="I1623:997;169:428"
                  comptype="Image"
                  alt="play One"
                />
              </Row>
              <Row
                className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[58%]"
                compid="1003:4099"
                comptype="Row"
              >
                <Img
                  src="images/img_star.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[10%]"
                  compid="1003:4103"
                  comptype="Image"
                  alt="star One"
                />
                <Text
                  className="FortyNine"
                  compid="1003:4102"
                  variant="body5"
                  comptype="Text"
                >
                  4.8
                </Text>
                <Text
                  className="test_60reviews"
                  compid="1003:4100"
                  variant="body5"
                  comptype="Text"
                >
                  (116 reviews)
                </Text>
              </Row>
              <Button
                className="font-medium mb-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[100%]"
                compid="1003:4104"
                comptype="Button"
                variant="OutlineBluegray102"
              >
                More details
              </Button>
            </Column>
          </Column>
          <Column
            className="bg-white_A700 border border-gray_200 border-solid lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius10 w-[100%]"
            compid="1003:4107"
            comptype="Column"
          >
            <Img
              src="images/img_arctichutimag.png"
              className="MatterhornSuit"
              compid="1003:4108"
              comptype="Image"
              alt="ArcticHutImag"
            />
            <Row
              className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]"
              compid="1003:4109"
              comptype="Row"
            >
              <Column className="w-[91%]" compid="1003:4110" comptype="Column">
                <Text
                  className="DepartureDetai"
                  compid="1003:4111"
                  variant="body5"
                  comptype="Text"
                >
                  Single deluxe hut
                </Text>
                <Text
                  className="lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rectitle"
                  compid="1003:4112"
                  variant="body1"
                  comptype="Text"
                >
                  Arctic Hut{" "}
                </Text>
                <Text
                  className="price_Eight"
                  compid="1003:4113"
                  variant="body4"
                  comptype="Text"
                >
                  $420/night
                </Text>
              </Column>
              <Img
                src="images/img_play.svg"
                className="play"
                compid="I1623:1001;169:428"
                comptype="Image"
                alt="play Two"
              />
            </Row>
            <Row
              className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[54%]"
              compid="1003:4114"
              comptype="Row"
            >
              <Img
                src="images/img_star.svg"
                className="star"
                compid="1003:4118"
                comptype="Image"
                alt="star Two"
              />
              <Text
                className="FortyNine"
                compid="1003:4117"
                variant="body5"
                comptype="Text"
              >
                4.7
              </Text>
              <Text
                className="test_60reviews"
                compid="1003:4115"
                variant="body5"
                comptype="Text"
              >
                (78 reviews)
              </Text>
            </Row>
            <Button
              className="font-medium mb-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[100%]"
              compid="1003:4119"
              comptype="Button"
              variant="OutlineBluegray102"
            >
              More details
            </Button>
          </Column>
          <Column
            className="bg-white_A700 border border-gray_200 border-solid lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius10 w-[100%]"
            compid="1003:4122"
            comptype="Column"
          >
            <Img
              src="images/img_lakelouiseima.png"
              className="MatterhornSuit"
              compid="1003:4123"
              comptype="Image"
              alt="LakeLouiseIma"
            />
            <Row
              className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]"
              compid="1003:4124"
              comptype="Row"
            >
              <Column className="w-[91%]" compid="1003:4125" comptype="Column">
                <Text
                  className="DepartureDetai"
                  compid="1003:4126"
                  variant="body5"
                  comptype="Text"
                >
                  Deluxe King Room
                </Text>
                <Text
                  className="MatterhornSuit_One"
                  compid="1003:4127"
                  variant="body1"
                  comptype="Text"
                >
                  Lake Louise Inn
                </Text>
                <Text
                  className="price_Eight"
                  compid="1003:4128"
                  variant="body4"
                  comptype="Text"
                >
                  $244/night
                </Text>
              </Column>
              <Img
                src="images/img_play.svg"
                className="play"
                compid="I1003:4129;169:428"
                comptype="Image"
                alt="play Three"
              />
            </Row>
            <Row
              className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[54%]"
              compid="1003:4130"
              comptype="Row"
            >
              <Img
                src="images/img_star.svg"
                className="star"
                compid="1003:4134"
                comptype="Image"
                alt="star Three"
              />
              <Text
                className="FortyNine"
                compid="1003:4133"
                variant="body5"
                comptype="Text"
              >
                4.6
              </Text>
              <Text
                className="test_60reviews"
                compid="1003:4131"
                variant="body5"
                comptype="Text"
              >
                (63 reviews)
              </Text>
            </Row>
            <Button
              className="font-medium mb-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[100%]"
              compid="1003:4135"
              comptype="Button"
              variant="OutlineBluegray103"
            >
              More details
            </Button>
          </Column>
        </List>
        <footer
          className="lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[100%]"
          compid="1003:4143"
          comptype="Footer"
        >
          <Column
            className="items-center w-[100%]"
            compid="14"
            comptype="Column"
          >
            <Column
              className="bg-cover bg-gray_100 bg-repeat items-center justify-end lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] w-[100%]"
              compid="1003:4144"
              style={{
                backgroundImage: "url('images/img_subscribesecti.png')",
              }}
              comptype="Column"
            >
              <Text
                className="FormTitleSubt"
                compid="1003:4148"
                variant="body4"
                comptype="Text"
              >
                subscribe to our newsletter
              </Text>
              <Text
                className="FormTitle"
                compid="1003:4149"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Get weekly updates
              </Text>
              <Column
                className="bg-white_A700 border border-gray_200 border-solid justify-end lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[21px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius12 shadow-bs w-[39%]"
                compid="1003:4150"
                comptype="Column"
              >
                <Text
                  className="Form"
                  compid="1003:4152"
                  variant="body4"
                  comptype="Text"
                >
                  Fill in your details to join the party!
                </Text>
                <Input
                  className="placeholder:text-black_900_99 Input2"
                  wrapClassName="2xl:mt-[23px] 3xl:mt-[27px] lg:mt-[17px] ml-[2px] w-[99%] xl:mt-[20px]"
                  compid="1003:4155"
                  type="text"
                  comptype="EditText"
                  name="Input"
                  placeholder="Your name"
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 Input2"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] ml-[2px] w-[99%] xl:mt-[8px]"
                  compid="1003:4163"
                  type="email"
                  comptype="EditText"
                  name="Input One"
                  placeholder="Email address"
                ></Input>
                <Button
                  className="font-medium ml-[2px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[36%]"
                  compid="1003:4170"
                  comptype="Button"
                  size="lg"
                >
                  submit
                </Button>
              </Column>
            </Column>
            <Row
              className="bg-gradient1  lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] w-[100%]"
              compid="1003:4172"
              comptype="Row"
            >
              <Column
                className="lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] mt-[1px] pb-[1px] pr-[1px] w-[46%]"
                compid="1003:4173"
                comptype="Column"
              >
                <Img
                  src="images/img_combinedshape_white_A700.svg"
                  className="CombinedShape_One"
                  compid="1003:4178"
                  comptype="Image"
                  alt="CombinedShape One"
                />
                <Text
                  className="FickleFlightBi"
                  compid="1003:4179"
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
                  compid="1003:4180"
                  comptype="Image"
                  alt="SocialIcons"
                />
              </Column>
              <Line
                className="bg-white_A700_33 lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] mb-[2px] w-[1px]"
                compid="1003:4187"
                comptype="Line"
              />
              <Column
                className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[11%]"
                compid="1003:4189"
                comptype="Column"
              >
                <Text
                  className="font-medium text-white_A700 w-[auto]"
                  compid="1003:4191"
                  variant="body3"
                  comptype="Text"
                >
                  Company
                </Text>
                <Text
                  className="AboutUs"
                  compid="1003:4190"
                  variant="body5"
                  comptype="Text"
                >
                  About Us
                </Text>
                <Text
                  className="News"
                  compid="1003:4192"
                  variant="body5"
                  comptype="Text"
                >
                  News
                </Text>
                <Text
                  className="Careers"
                  compid="1003:4193"
                  variant="body5"
                  comptype="Text"
                >
                  Careers
                </Text>
                <Text
                  className="Howwework"
                  compid="1003:4194"
                  variant="body5"
                  comptype="Text"
                >
                  How we work
                </Text>
              </Column>
              <Column
                className="lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[119px] xl:w-[136px] 2xl:w-[154px] 3xl:w-[184px]"
                compid="1003:4195"
                comptype="Column"
              >
                <Text
                  className="font-medium text-white_A700 w-[auto]"
                  compid="1003:4197"
                  variant="body3"
                  comptype="Text"
                >
                  Support
                </Text>
                <Text
                  className="Account"
                  compid="1003:4196"
                  variant="body5"
                  comptype="Text"
                >
                  Account
                </Text>
                <Text
                  className="News"
                  compid="1003:4198"
                  variant="body5"
                  comptype="Text"
                >
                  Support Center
                </Text>
                <Text
                  className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic text-white_A700 w-[auto]"
                  compid="1003:4199"
                  variant="body5"
                  comptype="Text"
                >
                  FAQ
                </Text>
                <Text
                  className="Accessibility"
                  compid="1003:4200"
                  variant="body5"
                  comptype="Text"
                >
                  Accessibility
                </Text>
              </Column>
              <Column
                className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] mt-[2px] w-[9%]"
                compid="1003:4201"
                comptype="Column"
              >
                <Text
                  className="font-medium text-white_A700 w-[auto]"
                  compid="1003:4203"
                  variant="body3"
                  comptype="Text"
                >
                  More
                </Text>
                <Text
                  className="CovidAdvisory"
                  compid="1003:4202"
                  variant="body5"
                  comptype="Text"
                >
                  Covid Advisory
                </Text>
                <Text
                  className="Accessibility"
                  compid="1003:4204"
                  variant="body5"
                  comptype="Text"
                >
                  Airline Fees
                </Text>
                <Text
                  className="Tips"
                  compid="1003:4205"
                  variant="body5"
                  comptype="Text"
                >
                  Tips
                </Text>
                <Text
                  className="Accessibility"
                  compid="1003:4206"
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

export default HomepagePage;
