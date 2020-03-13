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
const builderData = [ builderDataElement ];

export { builderData, builderDataElement, gridData, gridRow };