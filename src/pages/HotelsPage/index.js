import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  List,
  Input,
  Line,
} from "components";
import { useNavigate } from "react-router-dom";

const HotelsPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href =
      "https://www.thehansindia.com/news/national/holiday-calendar-2021-find-the-complete-list-of-holidays-in-2021-664304";
  }
  function handleNavigate1() {
    navigate("/homepage");
  }
  function handleNavigate5() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }
  function handleNavigate6() {
    navigate("/homepage");
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-roboto items-center mx-[auto] w-[100%]"
        compid="1003:25134"
        comptype="Column"
      >
        <header className="w-[100%]" compid="10" comptype="Header">
          <Row
            className="bg-white_A700 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]"
            compid="1016:12057"
            comptype="Row"
          >
            <Img
              src="images/img_combinedshape.png"
              className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[12%]"
              compid="1016:12062"
              comptype="Image"
              alt="CombinedShape"
            />
            <Text
              className="common-pointer cursor-pointer hover:font-normal font-normal lg:ml-[574px] xl:ml-[656px] 2xl:ml-[738px] 3xl:ml-[886px] not-italic hover:text-blue_800 text-gray_800 w-[auto]"
              compid="1016:12065"
              variant="body6"
              comptype="Text"
              onClick={handleNavigate6}
            >
              Explore
            </Text>
            <Text
              className="common-pointer hover:font-normal hover:text-blue_800 Search"
              compid="1016:12066"
              variant="body6"
              comptype="Text"
              onClick={handleNavigate5}
            >
              Search
            </Text>
            <Text
              className="cursor-pointer hover:font-normal font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic text-blue_800 w-[auto]"
              compid="1016:12067"
              variant="body6"
              comptype="Text"
            >
              Hotels
            </Text>
            <Text
              className="hover:font-normal hover:text-blue_800 Search"
              compid="1016:12068"
              variant="body6"
              comptype="Text"
            >
              Offers
            </Text>
            <Img
              src="images/img_notification.svg"
              className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] w-[1%]"
              compid="1016:12074"
              comptype="Image"
              alt="notification"
            />
            <Img
              src="images/img_profilepicture.png"
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
              compid="1016:12078"
              comptype="CircleImage"
              alt="unsplashd1UPki"
            />
          </Row>
        </header>
        <Stack
          className="bg-gradient2  font-baloobhai lg:h-[151px] xl:h-[172px] 2xl:h-[194px] 3xl:h-[232px] w-[100%]"
          compid="1003:25159"
          comptype="Stack"
        >
          <Img
            src="images/img_bannerbackgrou.png"
            className="absolute lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] w-[100%]"
            compid="1003:25160"
            comptype="Image"
            alt="BannerBackgrou"
          />
          <Column
            className="absolute h-[max-content] inset-y-[0] left-[6%] my-[auto] w-[28%]"
            compid="1003:25161"
            comptype="Column"
          >
            <Text
              className="not-italic text-white_A700 tracking-ls1 w-[auto]"
              compid="1003:25162"
              as="h2"
              variant="h2"
              comptype="Text"
            >
              Stays in Los Angeles
            </Text>
            <Row
              className="font-roboto items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[87%]"
              compid="1003:25163"
              comptype="Row"
            >
              <Button
                className="capitalize font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[45%]"
                compid="1003:25164"
                comptype="Button"
                shape="RoundedBorder20"
                variant="OutlineWhiteA700"
              >
                Recommended
              </Button>
              <Button
                className="capitalize font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[24%]"
                compid="1003:25165"
                comptype="Button"
                shape="RoundedBorder20"
                variant="OutlineWhiteA7001_2"
              >
                Price
              </Button>
              <Button
                className="capitalize font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[27%]"
                compid="1003:25166"
                comptype="Button"
                shape="RoundedBorder20"
                variant="OutlineWhiteA7001_2"
              >
                Rating
              </Button>
            </Row>
          </Column>
        </Stack>
        <Row
          className="font-roboto lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] pr-[1px] py-[1px] w-[89%]"
          compid="1003:25168"
          comptype="Row"
        >
          <Text
            className="font-medium mb-[2px] text-bluegray_900 tracking-ls1 uppercase w-[auto]"
            compid="1003:25169"
            variant="body3"
            comptype="Text"
          >
            200+ results
          </Text>
          <Text
            className="font-normal 2xl:ml-[1068px] 3xl:ml-[1282px] lg:ml-[830px] xl:ml-[950px] mt-[1px] not-italic text-bluegray_900 tracking-ls1 w-[auto]"
            compid="1003:25172"
            variant="body4"
            comptype="Text"
          >
            Filters
          </Text>
          <Img
            src="images/img_settings.svg"
            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[2px] w-[1%]"
            compid="I1003:25171;180:1158"
            comptype="Image"
            alt="settings"
          />
        </Row>
        <Row
          className="font-roboto items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[89%]"
          compid="1003:25173"
          comptype="Row"
        >
          <List
            className="gap-[0] min-h-[auto] w-[44%]"
            compid="1003:25174"
            comptype="List"
            orientation="vertical"
          >
            <Row
              className="bg-blue_800_0c items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pb-[1px] pr-[1px] rounded-radius10 w-[100%]"
              compid="1003:25175"
              comptype="Row"
            >
              <Img
                src="images/img_resultsimage.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-radius50 w-[46%]"
                compid="1003:25176"
                comptype="CircleImage"
                alt="ResultsImage"
              />
              <Column
                className="2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] w-[49%]"
                compid="1003:25177"
                comptype="Column"
              >
                <Row
                  className="justify-evenly w-[100%]"
                  compid="1003:25178"
                  comptype="Row"
                >
                  <Column
                    className="w-[92%]"
                    compid="1003:25179"
                    comptype="Column"
                  >
                    <Text
                      className="DepartureDetai"
                      compid="1003:25180"
                      variant="body4"
                      comptype="Text"
                    >
                      1 king bed standard
                    </Text>
                    <Text
                      className="DiscoveryShore_One"
                      compid="1003:25181"
                      variant="body1"
                      comptype="Text"
                    >
                      Holiday Inn Expre...
                    </Text>
                    <Row
                      className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[69%]"
                      compid="1003:25182"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[9%]"
                        compid="1003:25186"
                        comptype="Image"
                        alt="star"
                      />
                      <Text
                        className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] text-bluegray_900 tracking-ls1 w-[auto]"
                        compid="1003:25185"
                        variant="body4"
                        comptype="Text"
                      >
                        4.7
                      </Text>
                      <Text
                        className="common-pointer test_60reviews"
                        compid="1003:25183"
                        variant="body4"
                        comptype="Text"
                        onClick={handleNavigate1}
                      >
                        (1,136 reviews)
                      </Text>
                    </Row>
                  </Column>
                  <Img
                    src="images/img_play.svg"
                    className="common-pointer lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mt-[1px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                    compid="I1003:25187;169:428"
                    comptype="Image"
                    onClick={handleNavigate}
                    alt="play"
                  />
                </Row>
                <Row
                  className="items-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[41%]"
                  compid="1003:25189"
                  comptype="Row"
                >
                  <Text
                    className="rectitle"
                    compid="1003:25190"
                    variant="body1"
                    comptype="Text"
                  >
                    $S 286
                  </Text>
                  <Text
                    className="night"
                    compid="1003:25191"
                    variant="body6"
                    comptype="Text"
                  >
                    /night
                  </Text>
                </Row>
                <Button
                  className="font-medium ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[60%]"
                  compid="1003:25192"
                  comptype="Button"
                >
                  View Details
                </Button>
              </Column>
            </Row>
            <Row
              className="bg-blue_800_0c items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pb-[1px] pr-[1px] rounded-radius10 w-[100%]"
              compid="1003:25193"
              comptype="Row"
            >
              <Img
                src="images/img_resultsimage_220X260.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-radius50 w-[46%]"
                compid="1003:25194"
                comptype="CircleImage"
                alt="ResultsImage One"
              />
              <Column
                className="2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] pb-[1px] pr-[1px] w-[49%]"
                compid="1003:25195"
                comptype="Column"
              >
                <Text
                  className="DepartureDetai"
                  compid="1003:25199"
                  variant="body4"
                  comptype="Text"
                >
                  Bed in Quad
                </Text>
                <Text
                  className="DiscoveryShore_One"
                  compid="1003:25198"
                  variant="body1"
                  comptype="Text"
                >
                  Freehand Los Angeles
                </Text>
                <Row
                  className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]"
                  compid="1003:25200"
                  comptype="Row"
                >
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[10%]"
                    compid="1003:25204"
                    comptype="Image"
                    alt="star One"
                  />
                  <Text
                    className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] text-bluegray_900 tracking-ls1 w-[auto]"
                    compid="1003:25203"
                    variant="body4"
                    comptype="Text"
                  >
                    4.2
                  </Text>
                  <Text
                    className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] not-italic text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:25201"
                    variant="body4"
                    comptype="Text"
                  >
                    (1,941 reviews)
                  </Text>
                </Row>
                <Row
                  className="items-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[41%]"
                  compid="1003:25206"
                  comptype="Row"
                >
                  <Text
                    className="rectitle"
                    compid="1003:25207"
                    variant="body1"
                    comptype="Text"
                  >
                    $S 198
                  </Text>
                  <Text
                    className="night"
                    compid="1003:25208"
                    variant="body6"
                    comptype="Text"
                  >
                    /night
                  </Text>
                </Row>
                <Button
                  className="font-medium ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[60%]"
                  compid="1003:25209"
                  comptype="Button"
                >
                  View Details
                </Button>
              </Column>
            </Row>
            <Row
              className="bg-blue_800_0c items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pb-[1px] pr-[1px] rounded-radius10 w-[100%]"
              compid="1003:25210"
              comptype="Row"
            >
              <Img
                src="images/img_resultsimage_1.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-radius50 w-[46%]"
                compid="1003:25211"
                comptype="CircleImage"
                alt="ResultsImage Two"
              />
              <Column
                className="2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] pr-[3px] pt-[3px] w-[49%]"
                compid="1003:25212"
                comptype="Column"
              >
                <Text
                  className="DepartureDetai"
                  compid="1003:25216"
                  variant="body4"
                  comptype="Text"
                >
                  1 King, City view
                </Text>
                <Text
                  className="MatterhornSuit_One"
                  compid="1003:25215"
                  variant="body1"
                  comptype="Text"
                >
                  The Westin Bonavent...
                </Text>
                <Row
                  className="lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[67%]"
                  compid="1003:25217"
                  comptype="Row"
                >
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[10%]"
                    compid="1003:25221"
                    comptype="Image"
                    alt="star Two"
                  />
                  <Text
                    className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] text-bluegray_900 tracking-ls1 w-[auto]"
                    compid="1003:25220"
                    variant="body4"
                    comptype="Text"
                  >
                    4.1
                  </Text>
                  <Text
                    className="font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] not-italic text-blue_800 tracking-ls1 w-[auto]"
                    compid="1003:25218"
                    variant="body4"
                    comptype="Text"
                  >
                    (1,002 reviews)
                  </Text>
                </Row>
                <Row
                  className="items-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[41%]"
                  compid="1003:25223"
                  comptype="Row"
                >
                  <Text
                    className="rectitle"
                    compid="1003:25224"
                    variant="body1"
                    comptype="Text"
                  >
                    $S 289
                  </Text>
                  <Text
                    className="night"
                    compid="1003:25225"
                    variant="body6"
                    comptype="Text"
                  >
                    /night
                  </Text>
                </Row>
                <Button
                  className="font-medium ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[61%]"
                  compid="1003:25226"
                  comptype="Button"
                >
                  View Details
                </Button>
              </Column>
            </Row>
            <Row
              className="bg-blue_800_0c items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pb-[1px] pr-[1px] rounded-radius10 w-[100%]"
              compid="1003:25227"
              comptype="Row"
            >
              <Img
                src="images/img_resultsimage_2.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-radius50 w-[46%]"
                compid="1003:25228"
                comptype="CircleImage"
                alt="ResultsImage Three"
              />
              <Column
                className="2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] pb-[1px] pr-[1px] w-[49%]"
                compid="1003:25229"
                comptype="Column"
              >
                <Row
                  className="justify-evenly w-[100%]"
                  compid="1003:25230"
                  comptype="Row"
                >
                  <Column
                    className="w-[92%]"
                    compid="1003:25231"
                    comptype="Column"
                  >
                    <Text
                      className="DepartureDetai"
                      compid="1003:25232"
                      variant="body4"
                      comptype="Text"
                    >
                      Deluxe King
                    </Text>
                    <Text
                      className="DiscoveryShore_One"
                      compid="1003:25233"
                      variant="body1"
                      comptype="Text"
                    >
                      The Ritz-Carlton, L...
                    </Text>
                    <Row
                      className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[69%]"
                      compid="1003:25234"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[9%]"
                        compid="1003:25238"
                        comptype="Image"
                        alt="star Three"
                      />
                      <Text
                        className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] text-bluegray_900 tracking-ls1 w-[auto]"
                        compid="1003:25237"
                        variant="body4"
                        comptype="Text"
                      >
                        4.7
                      </Text>
                      <Text
                        className="test_60reviews"
                        compid="1003:25235"
                        variant="body4"
                        comptype="Text"
                      >
                        (1,136 reviews)
                      </Text>
                    </Row>
                  </Column>
                  <Img
                    src="images/img_play.svg"
                    className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mt-[1px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                    compid="I1003:25239;169:428"
                    comptype="Image"
                    alt="play One"
                  />
                </Row>
                <Row
                  className="items-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[41%]"
                  compid="1003:25241"
                  comptype="Row"
                >
                  <Text
                    className="rectitle"
                    compid="1003:25242"
                    variant="body1"
                    comptype="Text"
                  >
                    $S 286
                  </Text>
                  <Text
                    className="night"
                    compid="1003:25243"
                    variant="body6"
                    comptype="Text"
                  >
                    /night
                  </Text>
                </Row>
                <Button
                  className="font-medium ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[60%]"
                  compid="1003:25244"
                  comptype="Button"
                >
                  View Details
                </Button>
              </Column>
            </Row>
          </List>
          <Column
            className="bg-cover bg-repeat lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius10 w-[54%]"
            compid="1323:3017"
            style={{ backgroundImage: "url('images/img_map_917X695.png')" }}
            comptype="Column"
          >
            <Img
              src="images/img_dots.svg"
              className="lg:h-[391px] xl:h-[447px] 2xl:h-[503px] 3xl:h-[603px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] lg:mr-[116px] xl:mr-[133px] 2xl:mr-[150px] 3xl:mr-[180px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius10 w-[62%]"
              compid="1323:3020"
              comptype="Image"
              alt="Dots"
            />
            <Img
              src="images/img_volume.svg"
              className="lg:h-[57px] xl:h-[65px] 2xl:h-[74px] 3xl:h-[88px] lg:ml-[484px] xl:ml-[554px] 2xl:ml-[623px] 3xl:ml-[748px] mr-[1px] lg:mt-[188px] xl:mt-[215px] 2xl:mt-[242px] 3xl:mt-[290px] rounded-radius10 w-[6%]"
              compid="1323:3034"
              comptype="Image"
              alt="volume"
            />
          </Column>
        </Row>
        <footer
          className="font-roboto lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]"
          compid="1003:25269"
          comptype="Footer"
        >
          <Column
            className="items-center w-[100%]"
            compid="15"
            comptype="Column"
          >
            <Column
              className="bg-cover bg-gray_100 bg-repeat items-center justify-end lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] w-[100%]"
              compid="1003:25270"
              style={{
                backgroundImage: "url('images/img_subscribesecti.png')",
              }}
              comptype="Column"
            >
              <Text
                className="font-bold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] text-blue_801 tracking-ls1 uppercase w-[auto]"
                compid="1003:25274"
                variant="body3"
                comptype="Text"
              >
                subscribe to our newsletter
              </Text>
              <Text
                className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] text-gray_801 w-[auto]"
                compid="1003:25275"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Get weekly updates
              </Text>
              <Column
                className="bg-white_A700 border border-gray_200 border-solid justify-end lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[21px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius12 shadow-bs w-[39%]"
                compid="1003:25276"
                comptype="Column"
              >
                <Text
                  className="Form"
                  compid="1003:25278"
                  variant="body3"
                  comptype="Text"
                >
                  Fill in your details to join the party!
                </Text>
                <Input
                  className="placeholder:text-black_900_99 Input2"
                  wrapClassName="2xl:mt-[23px] 3xl:mt-[27px] lg:mt-[17px] ml-[2px] w-[99%] xl:mt-[20px]"
                  compid="1003:25281"
                  type="text"
                  comptype="EditText"
                  name="Input"
                  placeholder="Your name"
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 Input2"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] ml-[2px] w-[99%] xl:mt-[8px]"
                  compid="1003:25289"
                  type="email"
                  comptype="EditText"
                  name="Input One"
                  placeholder="Email address"
                ></Input>
                <Button
                  className="font-medium ml-[2px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[36%]"
                  compid="1003:25296"
                  comptype="Button"
                  size="md"
                  variant="FillOrange500"
                >
                  submit
                </Button>
              </Column>
            </Column>
            <Row
              className="bg-gradient1  lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] w-[100%]"
              compid="1003:25298"
              comptype="Row"
            >
              <Column
                className="lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] mt-[1px] pb-[1px] pr-[1px] w-[46%]"
                compid="1003:25299"
                comptype="Column"
              >
                <Img
                  src="images/img_combinedshape_white_A700.svg"
                  className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] w-[27%]"
                  compid="1003:25304"
                  comptype="Image"
                  alt="CombinedShape One"
                />
                <Text
                  className="FickleFlightBi"
                  compid="1003:25305"
                  variant="body3"
                  comptype="Text"
                >
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </Text>
                <Img
                  src="images/img_socialicons.svg"
                  className="lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[20%]"
                  compid="1003:25306"
                  comptype="Image"
                  alt="SocialIcons"
                />
              </Column>
              <Line
                className="bg-white_A700_33 lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] mb-[2px] w-[1px]"
                compid="1003:25313"
                comptype="Line"
              />
              <Column
                className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[11%]"
                compid="1003:25315"
                comptype="Column"
              >
                <Text
                  className="font-medium text-white_A700 w-[auto]"
                  compid="1003:25317"
                  variant="body2"
                  comptype="Text"
                >
                  Company
                </Text>
                <Text
                  className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-white_A700 w-[auto]"
                  compid="1003:25316"
                  variant="body4"
                  comptype="Text"
                >
                  About Us
                </Text>
                <Text
                  className="News"
                  compid="1003:25318"
                  variant="body4"
                  comptype="Text"
                >
                  News
                </Text>
                <Text
                  className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic text-white_A700 w-[auto]"
                  compid="1003:25319"
                  variant="body4"
                  comptype="Text"
                >
                  Careers
                </Text>
                <Text
                  className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic text-white_A700 w-[auto]"
                  compid="1003:25320"
                  variant="body4"
                  comptype="Text"
                >
                  How we work
                </Text>
              </Column>
              <Column
                className="lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[119px] xl:w-[136px] 2xl:w-[154px] 3xl:w-[184px]"
                compid="1003:25321"
                comptype="Column"
              >
                <Text
                  className="font-medium text-white_A700 w-[auto]"
                  compid="1003:25323"
                  variant="body2"
                  comptype="Text"
                >
                  Support
                </Text>
                <Text
                  className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-white_A700 w-[auto]"
                  compid="1003:25322"
                  variant="body4"
                  comptype="Text"
                >
                  Account
                </Text>
                <Text
                  className="News"
                  compid="1003:25324"
                  variant="body4"
                  comptype="Text"
                >
                  Support Center
                </Text>
                <Text
                  className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic text-white_A700 w-[auto]"
                  compid="1003:25325"
                  variant="body4"
                  comptype="Text"
                >
                  FAQ
                </Text>
                <Text
                  className="Accessibility"
                  compid="1003:25326"
                  variant="body4"
                  comptype="Text"
                >
                  Accessibility
                </Text>
              </Column>
              <Column
                className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] mt-[2px] w-[9%]"
                compid="1003:25327"
                comptype="Column"
              >
                <Text
                  className="font-medium text-white_A700 w-[auto]"
                  compid="1003:25329"
                  variant="body2"
                  comptype="Text"
                >
                  More
                </Text>
                <Text
                  className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-white_A700 w-[auto]"
                  compid="1003:25328"
                  variant="body4"
                  comptype="Text"
                >
                  Covid Advisory
                </Text>
                <Text
                  className="Accessibility"
                  compid="1003:25330"
                  variant="body4"
                  comptype="Text"
                >
                  Airline Fees
                </Text>
                <Text
                  className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic text-white_A700 w-[auto]"
                  compid="1003:25331"
                  variant="body4"
                  comptype="Text"
                >
                  Tips
                </Text>
                <Text
                  className="Accessibility"
                  compid="1003:25332"
                  variant="body4"
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

export default HotelsPagePage;
