import { createRef } from "react";


export const tabBarRef = createRef();
export const primary = "#00e588";
// export const primary = "#00D980";
export const secondary = "#96a7ff";
export const background = "#f9f9f7";
export const primary_blend1 = "#01e189";
export const primary_blend2 = "#00bbaa";
export const cement = "#e6e5eb";
export const nartjie = "#ffd700";
export const cherry = "#ff2fa0";

export const referralFilters = ["Non-Ozow.ME users",
                                "Invite pending",
                                "Accepted my invite",
                                "Ozow.ME users"];

export const actions = [{ icon: require("../assets/icons/cash.png"),
                          category: "Get Paid",
                          id: "action_get_paid_a0b1" },
                      
                        { icon: require("../assets/icons/qr.png"),
                          category: "Scan to Pay",
                          id: "scan_to_pay_c2d3" },
                      
                        { icon: require("../assets/icons/plane.png"),
                          category: "Send Money",
                          id: "send_money_e4f5" },
                      
                        { icon: require("../assets/icons/buy.png"),
                          category: "Buy",
                          id: "buy_g6h7",
                          route: "Buy" },
                      
                        { icon: require("../assets/icons/trading.png"),
                          category: "Trade Stocks",
                          id: "trade_stocks_i8j9" }];

export const icons = [{ icon: require("../assets/icons/voucher.png"),
                        category: "Vouchers",
                        id: "voucher_c2d3" },

                      { icon: require("../assets/icons/phone.png"),
                        category: "Airtime",
                        id: "airtime_e4f5" },

                      { icon: require("../assets/icons/plane.png"),
                        category: "Send money",
                        id: "send_g6h7" },

                      { icon: require("../assets/icons/plus.png"),
                        category: "Top up",
                        id: "top_i8j9" },

                      { icon: require("../assets/icons/trading.png"),
                        category: "Buy stocks",
                        id: "stock_q16r17" },
                      
                      { icon: require("../assets/icons/wifi.png"),
                        category: "Data",
                        id: "data_k10l11" },
                      
                      { icon: require("../assets/icons/withdraw.png"),
                        category: "Withdraw",
                        id: "withdraw_m12n13" },
                      
                      { icon: require("../assets/icons/zap.png"),
                        category: "Electricity",
                        id: "electricity_o14p15" }];

export const socials = [{ icon: require("../assets/icons/chat.png"),
                          category: "SMS",
                          id: "sms_a0b1" },

                        { icon: require("../assets/icons/fb.png"),
                          category: "Messanger",
                          id: "fb_a0b1" },
                      
                        { icon: require("../assets/icons/link.png"),
                          category: "Copy link",
                          id: "scan_to_pay_c2d3" },
                      
                        { icon: require("../assets/icons/whatsapp.png"),
                          category: "Whatsapp",
                          id: "whatsapp_e4f5" }];

export const transactionIcons = { burger: require("../assets/icons/burger.png"),
                                  coffee: require("../assets/icons/coffee.png"),
                                  // coffee: require("../assets/icons/cup.png"),
                                  // coffee: require("../assets/icons/caffine.png"),
                                  electricity: require("../assets/icons/electricity.png"),
                                  transport: require("../assets/icons/transport.png"),
                                  water: require("../assets/icons/water.png"),
                                  internet: require("../assets/icons/internet.png"),
                                  smoothie: require("../assets/icons/smoothie.png"),
                                  pizza: require("../assets/icons/pizza.png"),
                                  wrap: require("../assets/icons/wrap.png"),
                                  milkshake: require("../assets/icons/milkshake.png"),
                                  tea: require("../assets/icons/tea.png"),
                                  donut: require("../assets/icons/donut.png"),
                                  sushi: require("../assets/icons/sushi.png"),
                                  "fast_food": require("../assets/icons/hot_dog.png") };

export const info = [{ icon: require("../assets/icons/plus.png"),
                       category: "Top up",
                       info: "your pocket safely and securely.",
                       id: "top_up_a0b1" },

                      { icon: require("../assets/icons/plane.png"),
                        category: "Send money",
                        info: "from your pocket to another pocket.",
                        id: "send_money_a0b1" },

                      { icon: require("../assets/icons/cash.png"),
                        category: "Get paid",
                        info: "instantly by your friends and family.",
                        id: "get_paid_c2d3" },

                      { icon: require("../assets/icons/qr.png"),
                        category: "Scan to pay",
                        info: "any QR code to make a payment.",
                        id: "scan_pay_e4f5" }];

export const details = [{ icon: require("../assets/icons/phone.png"),
                          category: "Airtime",
                          details: "Buy/send airtime from your pocket fast!",
                          size: 50,
                          id: "airtime_a0b1" },
  
                        { icon: require("../assets/icons/wifi.png"),
                          category: "Data",
                          details: "Buy/send data bundles from your pocket fast!",
                          size: 40,
                          id: "data_a0b1" },
  
                        { icon: require("../assets/icons/zap.png"),
                          category: "Electricity",
                          details: "Buy/send electricity from your pocket fast!",
                          size: 50,
                          id: "electricity_c2d3" },
  
                        { icon: require("../assets/icons/voucher.png"),
                          category: "Vouchers",
                          details: "Buy/send vouchers from your pocket fast!",
                          size: 40,
                          id: "coupon_e4f5" }];
  
export const data = [{ name: "Logan",
                       category: "fast_food",
                       status: "Received",
                       direction: "into",
                       date: "29 March 2022, 9:00",
                       amount: 350,
                       id: "fast_food_a0b1" },

                     { name: "Scott",
                       category: "sushi",
                       status: "Pending",
                       direction: "from",
                       date: "30 February 2023, 8:23",
                       amount: 150,
                       id: "sushi_a0b1" },

                     { name: "Steve",
                       category: "burger",
                       status: "Failed",
                       direction: "from",
                       date: "13 October 2024, 18:43",
                       amount: 107.9,
                       id: "burger_a0b1" },

                     { name: "Mubeen",
                       category: "donut",
                       status: "failed",
                       direction: "into",
                       date: "9 August 2020, 22:16",
                       amount: 39.86,
                       id: "donut_a0b1" },

                    { name: "Tony",
                      category: "coffee",
                      status: "Paid",
                      direction: "into",
                      date: "28 April 2021, 13:06",
                      amount: 53.6,
                      id: "coffee_a0b1" }];
// export const data = [];



export const contacts = [{ name: "Aadil",
                           phone: "0123456789" },

                         { name: "Bilal",
                           phone: "9876543210" },

                         { name: "Cooper",
                           phone: "2468101214" },

                         { name: "Dawood",
                           phone: "3691215181" },

                         { name: "Elias",
                           phone: "1098726540" },

                         { name: "Fatima",
                           phone: "0987152673" },

                         { name: "George",
                           phone: "9807561229" },

                         { name: "Zaheer",
                           phone: "0981028364" }];