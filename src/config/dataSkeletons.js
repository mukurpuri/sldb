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
        lwc: {

        },
        lightning: {
            
        }
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
        top: "none",
        bottom: "none"
      },
      padding: {
        top: "none",
        bottom: "none"
      },
      data: {
        sm: [
          {
            spacings: {
              margin: {
                top: "none",
                bottom: "none"
              },
              padding: {
                top: "none",
                bottom: "none",
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
                    top: "none",
                    bottom: "none"
                  },
                  padding: {
                    top: "none",
                    bottom: "none"
                  },
                }
              }
            ],
            active: true,
            height: "auto",
            horizontal_align: "none",
            vertical_align: "none",
            reverse: "no"
          }
        ],
        md: [
          {
            spacings: {
              margin: {
                top: "none",
                bottom: "none"
              },
              padding: {
                top: "none",
                bottom: "none",
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
                    top: "none",
                    bottom: "none"
                  },
                  padding: {
                    top: "none",
                    bottom: "none"
                  },
                }
              }
            ],
            active: true,
            height: "auto",
            horizontal_align: "none",
            vertical_align: "none",
            reverse: "no"
          }
        ],
        lg: [
          {
            spacings: {
              margin: {
                top: "none",
                bottom: "none"
              },
              padding: {
                top: "none",
                bottom: "none",
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
                    top: "none",
                    bottom: "none"
                  },
                  padding: {
                    top: "none",
                    bottom: "none"
                  },
                }
              }
            ],
            active: true,
            height: "auto",
            horizontal_align: "none",
            vertical_align: "none",
            reverse: "no"
          }
        ]
      }
    }
}
const gridRow = {
  spacings: {
    margin: {
      top: "none",
      bottom: "none"
    },
    padding: {
      top: "none",
      bottom: "none",
    },
  },
  height: "auto",
  horizontal_align: "none",
  vertical_align: "none",
  reverse: "no",
  cols: [
    {
      height: 80,
      size: 12,
      visible: [],
      hide: [],
      active: false,
      spacings: {
        margin: {
          top: "none",
          bottom: "none",
          left: "none",
          right: "none"
        },
        padding: {
          top: "none",
          bottom: "none",
          left: "none",
          right: "none"
        },
      }
    }
  ],
  active: false
}
const builderData = [ builderDataElement ];

export { builderData, builderDataElement, gridData, gridRow };