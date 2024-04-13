import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Heading, Button, Input } from "../../components";
import CartComponent from "../../components/CartComponent";
import PorductComponent from "../../components/PorductComponent";

export default function DesktopOnePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Yogesh's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700 pb-11 md:pb-5">
        <header>
          <div className="flex items-end justify-between gap-5 bg-blue_gray-900 sm:hidden sm:flex-row sm:items-stretch sm:justify-between">
            <Text size="xl" as="p" className="mb-[7px] ml-[580px] !font-lato !text-white-A700">
              Free shipping on orders over 199.00
            </Text>
            <Button className="mr-2 mt-1 flex h-[36px] w-[36px] items-center justify-center bg-blue_gray-900">
              <Img src="images/img_frame.svg" />
            </Button>
          </div>
          <div className="flex items-end justify-center bg-blue_gray-900 p-1.5 md:flex-col">
            <div className="mb-[5px] flex flex-wrap items-center">
              <Img src="images/img_1f680_1.svg" alt="1f680one_one" className="h-[16px] w-[16px] self-start" />
              <Text size="xl" as="p" className="ml-1.5 !font-lato !text-white-A700">
                Flat 10% Discount on your First Prepaid Order
              </Text>
              <Img src="images/img_1f680_1.svg" alt="1f680two_one" className="ml-[3px] h-[16px] w-[16px] self-start" />
            </div>
            <Text size="xl" as="p" className="mb-[5px] ml-11 !font-lato !text-white-A700 md:ml-0">
              /
            </Text>
            <div className="mb-[5px] ml-11 flex flex-wrap items-center md:ml-0">
              <Img src="images/img_1f4b5_1_3.svg" alt="1f4b51three_one" className="h-[16px] w-[16px] self-start" />
              <Text size="xl" as="p" className="ml-1.5 !font-lato !text-white-A700">
                Extra 5% Off on Prepaid Orders
              </Text>
              <Img src="images/img_1f4b5_1_3.svg" alt="1f4b51two_one" className="ml-1 h-[16px] w-[16px] self-start" />
            </div>
            <Text size="xl" as="p" className="mb-[5px] ml-11 !font-lato !text-white-A700 md:ml-0">
              /
            </Text>
            <div className="mb-[5px] ml-11 flex flex-wrap items-center md:ml-0 sm:flex-col">
              <Img
                src="images/img_1f608_1_2.svg"
                alt="1f6081two_one"
                className="h-[16px] w-[16px] self-start sm:w-full"
              />
              <Text size="xl" as="p" className="ml-1.5 !font-lato !text-white-A700 sm:ml-0">
                Discreet Delivery on Naughty Gifts & Sexual Wellness Products{" "}
              </Text>
              <Img
                src="images/img_1f608_1_2.svg"
                alt="1f6081three_one"
                className="ml-[9px] h-[16px] w-[16px] self-start sm:ml-0 sm:w-full"
              />
            </div>
            <Button className="ml-4 flex h-[36px] w-[36px] items-center justify-center bg-blue_gray-900 md:ml-0 md:p-5">
              <Img src="images/img_frame.svg" />
            </Button>
          </div>
        </header>
        <div className="flex flex-col items-start">
          <div className="flex justify-end self-stretch bg-gray-200 p-3">
            <div className="mr-8 flex w-[59%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
              <Text as="p" className="self-start">
                About
              </Text>
              <Text as="p" className="self-end">
                Loyalty Reward Page
              </Text>
              <Text as="p" className="self-end">
                My Account
              </Text>
              <Text as="p" className="self-start">
                Contact
              </Text>
              <Text as="p" className="self-start">
                Track Your Order
              </Text>
              <Text as="p" className="self-start">
                Log In / Register
              </Text>
            </div>
          </div>
          <div className="mx-auto mt-5 flex w-full max-w-[1126px] self-center md:p-5">
            <div className="flex w-full flex-col gap-2.5">
              <div className="flex items-center md:flex-col">
                <Img
                  src="images/img_logo_1_1_1.png"
                  alt="logo11one_one"
                  className="h-[41px] w-[13%] object-cover md:w-full sm:flex sm:justify-end"
                />
                <Input
                  name="search"
                  placeholder={`Search...`}
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e)}
                  suffix={
                    <div className="flex h-[38px] w-[60px] items-center justify-center bg-cyan-600">
                      {searchBarValue?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#ffffffff" />
                      ) : (
                        <Img
                          src="images/img_materialsymbolssearch.svg"
                          alt="material-symbols:search"
                          className="h-[24px] w-[24px] cursor-pointer"
                        />
                      )}
                    </div>
                  }
                  className="ml-[166px] flex h-[38px] flex-grow items-center justify-center gap-[35px] border border-solid border-gray-200_01 bg-white-A700 pl-4 text-sm text-gray-500 md:ml-0"
                />
                <div className="ml-[127px] flex w-[15%] items-center justify-between gap-5 md:ml-0 md:w-full">
                  <div className="flex w-[33%] flex-col items-start">
                    <div className="relative ml-[5px] h-[28px] w-[73%] md:ml-0">
                      <Img
                        src="images/img_gg_heart.svg"
                        alt="ggheart_one"
                        className="absolute bottom-[-0.23px] left-[0.00px] m-auto h-[24px] w-[24px]"
                      />
                      <div className="absolute right-[0.00px] top-[0.00px] m-auto flex flex-col items-center rounded-[5px] bg-cyan-600 px-0.5">
                        <Heading size="xs" as="h1">
                          0
                        </Heading>
                      </div>
                    </div>
                    <Text size="xs" as="p" className="relative z-[1] mt-[-2px] !text-gray-600_01">
                      Wishlist
                    </Text>
                  </div>
                  <Text size="6xl" as="p" className="!text-blue_gray-100">
                    |
                  </Text>
                  <div className="flex w-[23%] flex-col items-center">
                    <div className="relative z-[2] h-[28px] self-stretch">
                      <Img
                        src="images/img_bi_cart.svg"
                        alt="bicart_one"
                        className="absolute bottom-[-0.23px] left-[0.00px] m-auto h-[26px] w-[26px]"
                      />
                      <div className="absolute right-[0.00px] top-[0.00px] m-auto flex flex-col items-center rounded-[5px] bg-cyan-600 px-0.5">
                        <Heading size="xs" as="h2">
                          0
                        </Heading>
                      </div>
                    </div>
                    <Text size="xs" as="p" className="!text-gray-600_01">
                      Cart
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-px bg-gray-200_01" />
            </div>
          </div>
          <div className="mx-auto mt-[7px] flex w-full max-w-[933px] items-start gap-[18px] md:flex-col md:p-5">
            <div className="mt-[7px] flex w-[13%] items-center gap-[18px] md:w-full">
              <Img src="images/img_uil_bars.svg" alt="uilbars_one" className="h-[24px] w-[24px]" />
              <Text as="p" className="w-[76%] !font-medium">
                <>
                  Browse
                  <br />
                  Categories
                </>
              </Text>
            </div>
            <Text size="2xl" as="p" className="mt-[15px] !text-blue_gray-100">
              |
            </Text>
            <div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
              <div className="flex flex-wrap gap-[22px]">
                <Text as="p" className="self-start">
                  Personal Care{" "}
                </Text>
                <Text as="p" className="self-end">
                  Health & Supplements
                </Text>
                <Text as="p" className="self-end">
                  Naughty Gifts
                </Text>
                <Text as="p" className="self-start">
                  Women’s Fashion
                </Text>
                <Text as="p" className="self-end">
                  Beverages
                </Text>
                <Text as="p" className="self-start">
                  Foods & Snacks
                </Text>
              </div>
              <div className="flex w-[54%] flex-wrap justify-between gap-5 md:w-full">
                <Text as="p" className="self-end">
                  Baby Products
                </Text>
                <Text as="p" className="self-start">
                  Home Care
                </Text>
                <Text as="p" className="self-end">
                  Staples
                </Text>
                <Text as="p" className="self-start">
                  Car Care
                </Text>
              </div>
            </div>
          </div>
          <div className="relative mt-[23px] h-[678px] self-stretch md:h-auto">
            <div className="w-full">
              <div className="h-[500px] bg-blue_gray-100_01" />
              <div className="flex items-start justify-center bg-gray-100 p-[43px] md:flex-col md:p-5">
                <div className="mt-1 flex w-[25%] flex-col items-start md:w-full">
                  <Heading as="h2" className="relative z-[3] ml-12 !text-blue-300_01 md:ml-0">
                    Free Shipping
                  </Heading>
                  <div className="flex items-start gap-3.5 self-stretch">
                    <Img src="images/img_octicon_rocket_24.svg" alt="octiconrocket" className="h-[34px] w-[34px]" />
                    <Text as="p" className="w-[84%] !font-roboto !text-gray-600">
                      <>
                        on all orders across India and
                        <br />
                        100% Discreet Delivery on all
                        <br />
                        Sexual Wellness Products
                      </>
                    </Text>
                  </div>
                </div>
                <div className="ml-[126px] flex w-[21%] items-start justify-center gap-2.5 md:ml-0 md:w-full">
                  <Img
                    src="images/img_material_symbol.svg"
                    alt="materialsymbol"
                    className="mt-[3px] h-[34px] w-[34px]"
                  />
                  <div className="flex flex-1 flex-col items-start">
                    <Heading as="h3" className="!text-blue-300_01">
                      Free Returns
                    </Heading>
                    <Text as="p" className="!font-roboto !text-gray-600">
                      <>
                        within 7 days for eligible
                        <br />
                        products
                      </>
                    </Text>
                  </div>
                </div>
                <div className="mb-[22px] ml-[152px] flex w-[24%] items-center justify-center gap-[11px] md:ml-0 md:w-full sm:flex-col">
                  <Img
                    src="images/img_octicon_rocket_24_black_900.svg"
                    alt="octiconrocket"
                    className="h-[40px] w-[40px] sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start sm:self-stretch">
                    <Heading as="h4" className="!text-blue-300_01">
                      Get Flat 10% Off*
                    </Heading>
                    <Text as="p" className="!font-roboto !text-gray-600">
                      <>
                        When you sign up and place
                        <br />
                        your first order. Use Coupon
                        <br />
                        code &quot;Signup10&quot;
                      </>
                    </Text>
                  </div>
                </div>
                <div className="ml-[132px] flex w-[25%] flex-col items-start md:ml-0 md:w-full">
                  <Heading as="h5" className="relative z-[4] ml-12 !text-blue-300_01 md:ml-0">
                    We Support
                  </Heading>
                  <div className="flex items-start gap-3.5 self-stretch">
                    <Img src="images/img_la_life_ring.svg" alt="lalifering_one" className="h-[34px] w-[34px]" />
                    <Text as="p" className="w-[84%] !font-roboto !text-gray-600">
                      24/7 Customer Support Service available via Chat/Email/Phone
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_997p8pkx_1.png"
              alt="997p8pkxone_one"
              className="absolute left-[23%] top-[0.00px] m-auto h-[508px] w-[46%] object-cover"
            />
          </div>
          <div className="mx-auto mt-[65px] flex w-full max-w-[1238px] self-center md:p-5">
            <div className="flex w-full justify-between gap-5 md:flex-col">
              <div className="w-[38%] bg-blue-50 md:w-full">
                <div className="relative h-[510px] md:h-auto">
                  <Img src="images/img_image_1.png" alt="imageone_one" className="h-[510px] w-full object-cover" />
                  <div className="absolute left-[14%] top-[10%] m-auto flex flex-col items-start">
                    <Heading as="h2" className="!text-gray-500_01">
                      Clearance
                    </Heading>
                    <Heading size="xl" as="h3" className="mt-[3px] !font-extrabold !text-gray-900">
                      Sexual Wellness
                    </Heading>
                    <Text size="4xl" as="p">
                      from ₹150
                    </Text>
                    <Button
                      rightIcon={
                        <Img src="images/img_pharrowright.svg" alt="ph:arrow-right" className="h-[15px] w-[15px]" />
                      }
                      className="ml-1 mt-5 flex h-[38px] min-w-[116px] items-center justify-center gap-[7px] border border-solid border-black-900 bg-blue-50 pl-[13px] pr-1 text-center text-[15px] text-black-900 md:ml-0"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative h-[510px] w-[23%] bg-blue_gray-500 md:h-auto md:w-full">
                <Img src="images/img_image_2.png" alt="imagetwo_one" className="h-[510px] w-full object-cover" />
                <div className="absolute left-[27.00px] top-[9%] m-auto flex w-[69%] flex-col items-start gap-[5px]">
                  <div className="flex flex-col items-start gap-1.5 self-stretch">
                    <Text size="xl" as="p" className="!text-white-A700">
                      On Sale
                    </Text>
                    <Text size="7xl" as="p" className="!text-white-A700">
                      <>
                        Energy & Soft
                        <br />
                        Drinks
                      </>
                    </Text>
                    <Text size="4xl" as="p" className="!text-white-A700">
                      from ₹99
                    </Text>
                    <div className="ml-[13px] flex items-center gap-[3px] md:ml-0">
                      <Text size="lg" as="p" className="!text-white-A700">
                        Discover Now
                      </Text>
                      <Img
                        src="images/img_ph_arrow_right_white_a700.svg"
                        alt="pharrowright"
                        className="h-[15px] w-[15px]"
                      />
                    </div>
                  </div>
                  <div className="h-px w-[72%] bg-white-A700" />
                </div>
              </div>
              <div className="flex w-[30%] flex-col gap-5 md:w-full">
                <div className="flex flex-1 bg-purple-50">
                  <div className="relative h-[245px] w-full md:h-auto">
                    <Img src="images/img_image_3.png" alt="clearance_one" className="h-[245px] w-full object-cover" />
                    <div className="absolute bottom-0 left-[25.00px] top-0 my-auto flex h-max w-[39%] flex-col items-start">
                      <Heading as="h4" className="!text-gray-500_01">
                        Clearance
                      </Heading>
                      <Heading size="xl" as="h5" className="mt-[3px] !font-bold !text-gray-900">
                        <>
                          Feminine
                          <br />
                          Hygiene
                        </>
                      </Heading>
                      <Text size="4xl" as="p" className="mt-2">
                        from ₹128
                      </Text>
                      <div className="mt-3.5 flex flex-col items-center gap-[3px] self-stretch">
                        <div className="flex items-start gap-[29px]">
                          <Text size="lg" as="p">
                            Shop Now
                          </Text>
                          <Img
                            src="images/img_pharrowright.svg"
                            alt="shop_now_one"
                            className="mt-0.5 h-[15px] w-[15px]"
                          />
                        </div>
                        <div className="h-px w-full self-stretch bg-black-900" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 bg-deep_orange-50">
                  <div className="relative h-[245px] w-full md:h-auto">
                    <Img src="images/img_image_4.png" alt="imagefour_one" className="h-[245px] w-full object-cover" />
                    <div className="absolute left-[21.00px] top-[20.54px] m-auto flex w-[40%] flex-col items-start">
                      <Heading as="h6" className="!text-gray-500_01">
                        New Arrivals
                      </Heading>
                      <Heading size="xl" as="h3" className="mt-[3px] !font-bold !text-gray-900">
                        Hair Care
                      </Heading>
                      <Text size="4xl" as="p" className="mt-[3px]">
                        from ₹339
                      </Text>
                      <div className="mt-5 flex flex-col items-center gap-[3px] self-stretch">
                        <div className="flex items-start gap-[29px]">
                          <Text size="lg" as="p">
                            Shop Now
                          </Text>
                          <Img
                            src="images/img_pharrowright.svg"
                            alt="pharrowright"
                            className="mt-0.5 h-[15px] w-[15px]"
                          />
                        </div>
                        <div className="h-px w-full self-stretch bg-black-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap gap-[26px] self-center">
            <Text size="7xl" as="p" className="self-start">
              Featured
            </Text>
            <Text size="7xl" as="p" className="self-start !text-blue_gray-100">
              On Sale
            </Text>
            <Text size="7xl" as="p" className="self-start !text-blue_gray-100">
              New Arrived
            </Text>
            <Text size="7xl" as="p" className="self-end !text-blue_gray-100">
              Top Rated
            </Text>
          </div>
          <div className="ml-[15px] mt-[37px] flex gap-1.5 self-stretch md:ml-0 md:flex-col">
            <CartComponent className="flex w-full flex-col items-start justify-end border border-solid border-gray-400 bg-white-A700 p-[11px] shadow-xs md:p-5" />
            <CartComponent className="flex w-full flex-col items-start justify-end border border-solid border-gray-400 bg-white-A700 p-[11px] shadow-xs md:p-5" />
            <CartComponent className="flex w-full flex-col items-start justify-end border border-solid border-gray-400 bg-white-A700 p-[11px] shadow-xs md:p-5" />
            <CartComponent className="flex w-full flex-col items-start justify-end border border-solid border-gray-400 bg-white-A700 p-[11px] shadow-xs md:p-5" />
          </div>
          <div className="mt-[59px] flex self-stretch bg-blue_gray-50 p-[50px] md:p-5">
            <div className="mx-auto flex w-full max-w-[871px] justify-center bg-white-A700 p-7 md:p-5">
              <div className="mb-7 mt-[38px] flex w-full items-center gap-[30px] md:flex-col">
                <div className="mb-[5px] flex w-[45%] flex-col items-start md:w-full">
                  <Text size="xl" as="p" className="ml-[5px] !font-roboto !text-light_green-400 md:ml-0">
                    Limited Quantities
                  </Text>
                  <Text size="8xl" as="p" className="mt-3 !font-roboto !text-blue-300_01">
                    Deal of the Week
                  </Text>
                  <Text size="4xl" as="p" className="ml-[5px] mt-[39px] !font-roboto !text-blue-300_01 md:ml-0">
                    Durex Tie Me Love Me
                  </Text>
                  <Text size="4xl" as="p" className="ml-[5px] mt-[37px] !font-roboto !text-red-A100 md:ml-0">
                    Flat 10% Off
                  </Text>
                  <Heading size="lg" as="h2" className="ml-[5px] mt-[27px] !text-light_blue-800 md:ml-0">
                    Sale Price: Rs.5,667.3
                  </Heading>
                  <div className="ml-[5px] mt-14 flex gap-[7px] self-stretch md:ml-0">
                    <div className="flex flex-1 gap-[7px] md:flex-row">
                      <div className="flex w-full items-start gap-1.5">
                        <div className="flex flex-1 flex-col items-center gap-0.5 bg-light_green-300_01 p-[9px]">
                          <Heading size="xl" as="h3">
                            00
                          </Heading>
                          <Heading size="s" as="h4" className="mr-1.5 self-end md:mr-0">
                            Days
                          </Heading>
                        </div>
                        <Text size="5xl" as="p" className="mt-[25px] !font-roboto">
                          :
                        </Text>
                      </div>
                      <div className="flex w-full items-start gap-1.5">
                        <div className="flex flex-1 flex-col items-center justify-center bg-light_green-300_01 p-2.5">
                          <Heading size="xl" as="h5">
                            00
                          </Heading>
                          <Heading size="s" as="h6" className="self-end">
                            Hours
                          </Heading>
                        </div>
                        <Text size="5xl" as="p" className="mt-[25px] !font-roboto">
                          :
                        </Text>
                      </div>
                      <div className="flex w-full items-start gap-1.5">
                        <div className="flex flex-1 flex-col items-center justify-center bg-light_green-300_01 p-2.5">
                          <Heading size="xl" as="h3">
                            00
                          </Heading>
                          <Heading size="s" as="p">
                            Mins
                          </Heading>
                        </div>
                        <Text size="5xl" as="p" className="mt-[25px] !font-roboto">
                          :
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-[21%] flex-col items-center justify-center bg-light_green-300_01 p-2.5">
                      <Heading size="xl" as="h3">
                        00
                      </Heading>
                      <Heading size="s" as="p">
                        Secs
                      </Heading>
                    </div>
                  </div>
                  <Button
                    rightIcon={
                      <Img src="images/img_pharrowright.svg" alt="ph:arrow-right" className="h-[15px] w-[15px]" />
                    }
                    className="ml-[5px] mt-[46px] flex h-[38px] min-w-[116px] items-center justify-center gap-[3px] border border-solid border-black-900 bg-white-A700 pl-[13px] pr-1 text-center text-[15px] text-black-900 md:ml-0"
                  >
                    Order Now
                  </Button>
                </div>
                <Img
                  src="images/img_image_6.png"
                  alt="imagesix_one"
                  className="h-[432px] w-[432px] self-end object-cover md:w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-[93px] flex w-[54%] flex-col items-center gap-[26px] self-center md:w-full md:p-5">
            <Heading size="2xl" as="h2" className="!text-blue_gray-900_01">
              Top Selling Products
            </Heading>
            <div className="flex flex-col items-start self-stretch">
              <div className="flex flex-wrap justify-between gap-5 self-stretch">
                <Text size="xl" as="p" className="h-[24px] self-start !text-light_green-400">
                  ALL
                </Text>
                <Text size="xl" as="p" className="self-start !text-blue_gray-900_01">
                  Personal Care
                </Text>
                <Text size="xl" as="p" className="self-end !text-blue_gray-900_01">
                  Beverages
                </Text>
                <Text size="xl" as="p" className="self-start !text-blue_gray-900_01">
                  Foods & Snacks
                </Text>
                <Text size="xl" as="p" className="self-start !text-blue_gray-900_01">
                  Home Care
                </Text>
                <Text size="xl" as="p" className="self-start !text-blue_gray-900_01">
                  Home Care
                </Text>
              </div>
              <div className="h-px w-[3%] bg-light_blue-800" />
            </div>
          </div>
          <div className="mx-auto mt-[59px] grid w-full max-w-[1272px] grid-cols-[repeat(auto-fill,_minmax(217px_,_1fr))] justify-center gap-[21px] self-center md:p-5">
            <PorductComponent className="flex w-full flex-col justify-center gap-[22px] border border-solid border-blue_gray-100_01 bg-white-A700 p-2.5" />
            <PorductComponent className="flex w-full flex-col justify-center gap-[22px] border border-solid border-blue_gray-100_01 bg-white-A700 p-2.5" />
            <PorductComponent className="flex w-full flex-col justify-center gap-[22px] border border-solid border-blue_gray-100_01 bg-white-A700 p-2.5" />
            <PorductComponent className="flex w-full flex-col justify-center gap-[22px] border border-solid border-blue_gray-100_01 bg-white-A700 p-2.5" />
            <PorductComponent className="flex w-full flex-col justify-center gap-[22px] border border-solid border-blue_gray-100_01 bg-white-A700 p-2.5" />
            <PorductComponent className="flex w-full flex-col justify-center gap-[22px] border border-solid border-blue_gray-100_01 bg-white-A700 p-2.5" />
            <PorductComponent className="flex w-full flex-col justify-center gap-[22px] border border-solid border-blue_gray-100_01 bg-white-A700 p-2.5" />
            <PorductComponent className="flex w-full flex-col justify-center gap-[22px] border border-solid border-blue_gray-100_01 bg-white-A700 p-2.5" />
            <PorductComponent className="flex w-full flex-col justify-center gap-[22px] border border-solid border-blue_gray-100_01 bg-white-A700 p-2.5" />
            <PorductComponent className="flex w-full flex-col justify-center gap-[22px] border border-solid border-blue_gray-100_01 bg-white-A700 p-2.5" />
          </div>
          <div className="relative mt-[95px] h-[490px] self-stretch">
            <div className="absolute left-0 right-0 top-[0.00px] m-auto flex h-[460px] w-full items-start justify-center bg-[url(/public/images/img_group_18.png)] bg-cover bg-no-repeat px-14 py-[136px] md:h-auto md:p-5">
              <div className="mb-[52px] flex w-[44%] flex-col items-end gap-3 md:w-full">
                <Heading size="2xl" as="h2" className="mr-[87px] md:mr-0">
                  Get The Latest Deals
                </Heading>
                <Text size="lg" as="p" className="mr-[119px] !font-roboto !text-white-A700 md:mr-0">
                  and receive ₹100 coupon for first shopping
                </Text>
                <div className="flex justify-end self-stretch bg-white-A700">
                  <Button className="flex h-[44px] min-w-[150px] items-center justify-center bg-white-A700 px-8 text-center font-roboto text-[15px] text-black-900 sm:px-5">
                    Subscribe -&gt;
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full items-start justify-center bg-gray-100 p-[43px] md:relative md:flex-col md:p-5">
              <div className="mt-1 flex w-[25%] flex-col items-start md:w-full">
                <Heading as="h3" className="relative z-[5] ml-12 !text-blue-300_01 md:ml-0">
                  Free Shipping
                </Heading>
                <div className="flex items-start gap-3.5 self-stretch">
                  <Img src="images/img_octicon_rocket_24.svg" alt="octiconrocket" className="h-[34px] w-[34px]" />
                  <Text as="p" className="w-[84%] !font-roboto !text-gray-600">
                    <>
                      on all orders across India and
                      <br />
                      100% Discreet Delivery on all
                      <br />
                      Sexual Wellness Products
                    </>
                  </Text>
                </div>
              </div>
              <div className="ml-[126px] flex w-[21%] items-start justify-center gap-2.5 md:ml-0 md:w-full">
                <Img src="images/img_material_symbol.svg" alt="materialsymbol" className="mt-[3px] h-[34px] w-[34px]" />
                <div className="flex flex-1 flex-col items-start">
                  <Heading as="h4" className="!text-blue-300_01">
                    Free Returns
                  </Heading>
                  <Text as="p" className="!font-roboto !text-gray-600">
                    <>
                      within 7 days for eligible
                      <br />
                      products
                    </>
                  </Text>
                </div>
              </div>
              <div className="mb-[22px] ml-[152px] flex w-[24%] items-center justify-center gap-[11px] md:ml-0 md:w-full sm:flex-col">
                <Img
                  src="images/img_octicon_rocket_24_black_900.svg"
                  alt="octiconrocket"
                  className="h-[40px] w-[40px] sm:w-full"
                />
                <div className="flex flex-1 flex-col items-start sm:self-stretch">
                  <Heading as="h5" className="!text-blue-300_01">
                    Get Flat 10% Off*
                  </Heading>
                  <Text as="p" className="!font-roboto !text-gray-600">
                    <>
                      When you sign up and place
                      <br />
                      your first order. Use Coupon
                      <br />
                      code &quot;Signup10&quot;
                    </>
                  </Text>
                </div>
              </div>
              <div className="ml-[132px] flex w-[25%] flex-col items-start md:ml-0 md:w-full">
                <Heading as="h6" className="relative z-[6] ml-12 !text-blue-300_01 md:ml-0">
                  We Support
                </Heading>
                <div className="flex items-start gap-3.5 self-stretch">
                  <Img src="images/img_la_life_ring.svg" alt="lalifering" className="h-[34px] w-[34px]" />
                  <Text as="p" className="w-[84%] !font-roboto !text-gray-600">
                    24/7 Customer Support Service available via Chat/Email/Phone
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[86px] mt-14 flex w-[88%] flex-col gap-[35px] md:ml-0 md:w-full md:p-5">
            <div className="mx-auto flex w-full max-w-[1148px] items-start justify-between gap-5 md:flex-col">
              <div className="flex w-[45%] flex-col gap-6 md:w-full">
                <Img src="images/img_image_9.png" alt="imagenine_one" className="h-[41px] w-[20%] object-cover" />
                <Text as="p" className="!font-roboto">
                  <>
                    We have a special purpose to improve the quality of human life. Our products bring
                    <br />
                    reassuring comfort to people. We have a portfolio of trusted, market-leading brands
                    <br />
                    Reckitt Benckiser, HUL, P&G, Dabur, etc. We’ve been championing innovation,
                    <br />
                    compassion, and grit over the years.
                  </>
                </Text>
                <div className="flex items-center gap-[19px]">
                  <Img src="images/img_mdi_facebook.svg" alt="mdifacebook_one" className="h-[24px] w-[24px]" />
                  <Img src="images/img_trash.svg" alt="trash_one" className="h-[19px] w-[19px] self-start" />
                  <Img src="images/img_link.svg" alt="link_one" className="h-[19px] w-[19px] self-start" />
                  <Img src="images/img_info.svg" alt="info_one" className="h-[24px] w-[24px]" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[13px]">
                <Text size="xl" as="p">
                  Information
                </Text>
                <a href="#">
                  <Text as="p" className="!text-gray-600_01">
                    About CrazyD
                  </Text>
                </a>
                <a href="FAQ" target="_blank" rel="noreferrer">
                  <Text as="p" className="!text-gray-600_01">
                    FAQ
                  </Text>
                </a>
                <a href="#">
                  <Text as="p" className="!text-gray-600_01">
                    Contact Us
                  </Text>
                </a>
              </div>
              <div className="flex flex-col items-start">
                <Text size="xl" as="p">
                  Customer Service
                </Text>
                <a href="#" className="mt-2.5">
                  <Text as="p" className="!text-gray-600_01">
                    Track Your Order
                  </Text>
                </a>
                <a href="Help" target="_blank" rel="noreferrer" className="mt-[15px]">
                  <Text as="p" className="!text-gray-600_01">
                    Help
                  </Text>
                </a>
                <a href="#" className="mt-3.5">
                  <Text as="p" className="!text-gray-600_01">
                    Terms & Conditions
                  </Text>
                </a>
                <a href="#" className="mt-5">
                  <Text as="p" className="!text-gray-600_01">
                    Privacy Policy
                  </Text>
                </a>
              </div>
              <div className="mt-0.5 flex flex-col items-start">
                <Text size="xl" as="p">
                  My Account
                </Text>
                <a href="#" className="mt-[9px]">
                  <Text as="p" className="!text-gray-600_01">
                    Sign In
                  </Text>
                </a>
                <a href="#" className="mt-3">
                  <Text as="p" className="!text-gray-600_01">
                    View Cart
                  </Text>
                </a>
                <a href="#" className="mt-[17px]">
                  <Text as="p" className="!text-gray-600_01">
                    My Wishlist
                  </Text>
                </a>
              </div>
            </div>
            <div className="h-px bg-gray-600_01" />
          </div>
          <div className="mx-auto mt-[37px] flex w-full max-w-[1155px] items-center justify-between gap-5 md:flex-col md:p-5">
            <Text as="p" className="self-start !text-gray-600_01">
              Copyright © Crazy D India Pvt. Ltd. 2023. All Rights Reserved.
            </Text>
            <Img src="images/img_image_10.png" alt="imageten_one" className="h-[25px] w-[24%] object-cover md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
