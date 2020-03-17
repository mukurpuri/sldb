const builderDataElement =  {
    id: '_' + Math.random().toString(36).substr(2, 9),
    name: "Page 1",
    active: "false",
    state: "builder",
    component: {
      type: null,
      data: null
    },
    properties: {

    },
    code: {
        isMinified: false,
        allowVirtualProperties: true,
        innerText: true,
        lwc: "",
        lightning: ""
    }
}
const ComponentList = [
"Alert"
,"Avatar"
,"Avatar Group"
,"Badges"
,"Brand Band"
,"Breadcrumbs"
,"Button Groups"
,"Button Icons"
,"Buttons"
,"Cards"
,"Checkbox"
,"Checkbox Button"
,"Checkbox Button Group"
,"Checkbox Toggle"
,"Color Picker"
,"Combobox"
,"Data Tables"
,"Datepickers"
,"Datetime Picker"
,"Dynamic Icons"
,"Dynamic Menu"
,"Expandable Section"
,"File Selector"
,"Files"
,"Form Element"
,"Icons"
,"Illustration"
,"Input"
,"Lookups"
,"Map"
,"Menus"
,"Modals"
,"Notifications"
,"Panels"
,"Picklist"
,"Pills"
,"Popovers"
,"Progress Bar"
,"Progress Indicator"
,"Progress Ring"
,"Prompt"
,"Radio Button Group"
,"Radio Group"
,"Rich Text Editor"
,"Scoped Notifications"
,"Scoped Tabs"
,"Select"
,"Slider"
,"Spinners"
,"Summary Detail"
,"Tabs"
,"Textarea"
,"Tiles"
,"Timepicker"
,"Toast"
,"Tooltips"
,"Trees"
,"Vertical Navigation"
,"Vertical Tabs"
,"Visual Picker"
];

const gridData  = {
    activeEditor: "lg",
    activeRow: 0,
    activeColumn: 0,
    gridProperties: {
      columnHeight: {
        "lable": "Column Height",
        "value": "100px"
      },
      columnBackgroundColor: {
        "lable": "Background Color",
        "value": "100px"
      }
    },
    properties: {
      gutters: "slds-gutters_medium",
      margin: {
        top: "",
        bottom: ""
      },
      padding: {
        top: "",
        bottom: ""
      },
      data: {
        sm: [
          {
            spacings: {
              margin: {
                top: "",
                bottom: ""
              },
              padding: {
                top: "",
                bottom: "",
              },
            },
            cols: [
              {
                height: 80,
                size: 12,
                visible: [],
                hide: [],
                active: true,
                spacings: {
                  margin: {
                    top: "",
                    bottom: ""
                  },
                  padding: {
                    top: "",
                    bottom: ""
                  },
                }
              }
            ],
            active: true,
            height: "auto",
            horizontal_align: "",
            vertical_align: "",
            reverse: ""
          }
        ],
        md: [
          {
            spacings: {
              margin: {
                top: "",
                bottom: ""
              },
              padding: {
                top: "",
                bottom: "",
              },
            },
            cols: [
              {
                height: 80,
                size: 12,
                visible: [],
                hide: [],
                active: true,
                spacings: {
                  margin: {
                    top: "",
                    bottom: ""
                  },
                  padding: {
                    top: "",
                    bottom: ""
                  },
                }
              }
            ],
            active: true,
            height: "auto",
            horizontal_align: "",
            vertical_align: "",
            reverse: ""
          }
        ],
        lg: [
          {
            spacings: {
              margin: {
                top: "",
                bottom: ""
              },
              padding: {
                top: "",
                bottom: "",
              },
            },
            cols: [
              {
                height: 80,
                size: 12,
                visible: [],
                hide: [],
                active: true,
                spacings: {
                  margin: {
                    top: "",
                    bottom: ""
                  },
                  padding: {
                    top: "",
                    bottom: ""
                  },
                }
              }
            ],
            active: true,
            height: "auto",
            horizontal_align: "",
            vertical_align: "",
            reverse: ""
          }
        ]
      }
    }
}
const gridRow = {
  spacings: {
    margin: {
      top: "",
      bottom: ""
    },
    padding: {
      top: "",
      bottom: "",
    },
  },
  height: "auto",
  horizontal_align: "",
  vertical_align: "",
  reverse: "",
  cols: [
    {
      height: 80,
      size: 12,
      visible: [],
      hide: [],
      active: false,
      spacings: {
        margin: {
          top: "",
          bottom: "",
          left: "",
          right: ""
        },
        padding: {
          top: "",
          bottom: "",
          left: "",
          right: ""
        },
      }
    }
  ],
  active: false
}

const cardData = {
  spacings: {
    margin: {
      "top": "",
      "bottom": "",
      "left": "",
      "right": ""
    },
    padding: {
      "top": "",
      "bottom": "",
      "left": "",
      "right": ""
    }
  },
  header: {
    hidden: [],
    spacings: {
      margin: {
        "top": "",
        "bottom": "",
        "left": "",
        "right": ""
      },
      padding: {
        "top": "",
        "bottom": "",
        "left": "",
        "right": ""
      }
    },
    flip: "",
    icon: {
      hidden: [],
      name: "custom5",
      size: "",
      flip: false,
      type: "custom",
      description: "Description of the icon",
      spacings: {
        margin: {
          "top": "slds-m-top_xxx-small",
          "bottom": "",
          "left": "",
          "right": ""
        },
        padding: {
          "top": "",
          "bottom": "",
          "left": "",
          "right": ""
        }
      }
    },
    title: {
      hidden: [],
      text: "Accounts",
      size: "slds-text-title",
      color: "",
      align: "slds-text-align_left",
      spacings: {
        margin: {
          "top": "",
          "bottom": "",
          "left": "",
          "right": ""
        },
        padding: {
          "top": "",
          "bottom": "",
          "left": "",
          "right": ""
        }
      }
    },
    button: {
      streched: false,
      hidden: [],
      text: "Button 2",
      strong: false,
      isDisabled: false,
      type: "slds-button_neutral",
      spacings: {
        margin: {
          "top": "",
          "bottom": "",
          "left": "",
          "right": ""
        },
        padding: {
          "top": "",
          "bottom": "",
          "left": "",
          "right": ""
        }
      },
      icon: {
        name: "",
        position: "",
      },
    }
  },
  body: {
    hidden: [],
    text: "Anything can go into the card body",
    align: "slds-text-align_left",
    spacings: {
      margin: {
        "top": "",
        "bottom": "",
        "left": "",
        "right": ""
      },
      padding: {
        "top": "",
        "bottom": "",
        "left": "",
        "right": ""
      }
    },
    size: ""
  },
  footer: {
    hidden: [],
    spacings: {
      margin: {
        "top": "",
        "bottom": "",
        "left": "",
        "right": ""
      },
      padding: {
        "top": "",
        "bottom": "",
        "left": "",
        "right": ""
      }
    },
    align: "slds-text-align_center",
    textAlign: "",
    text: "View All"
  }
}

const builderData = [ builderDataElement ];
export { builderData, ComponentList, builderDataElement, gridData, gridRow, cardData };