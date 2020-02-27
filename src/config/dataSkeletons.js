const builderDataElement =  {
    id: '_' + Math.random().toString(36).substr(2, 9),
    name: "Page 1",
    active: "false",
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
      wrap: "slds-wrap",
      data: {
        sm: [
          {
            wrap: "slds-wrap",
            cols: [
              {
                size: 12,
                visible: [],
                hide: [],
                active: true
              },
              {
                size: 6,
                visible: [],
                hide: [],
                active: false
              }
            ],
            active: true
          },
          {
            wrap: "slds-wrap",
            cols: [
              {
                size: 3,
                visible: [],
                hide: [],
                active: false
              },
              {
                size: 9,
                visible: [],
                hide: [],
                active: false
              }
            ]
          }
        ],
        md: [
          {
            wrap: "slds-wrap",
            cols: [
              {
                size: 12,
                visible: [],
                hide: [],
                active: true
              },
              {
                size: 6,
                visible: [],
                hide: [],
                active: false
              }
            ],
            active: true
          },
          {
            wrap: "slds-wrap",
            cols: [
              {
                size: 2,
                visible: [],
                hide: [],
                active: false
              },
              {
                size: 10,
                visible: [],
                hide: [],
                active: false
              }
            ]
          }
        ],
        lg: [
          {
            wrap: "slds-wrap",
            cols: [
              {
                size: 12,
                visible: [],
                hide: [],
                active: true
              },
              {
                size: 6,
                visible: [],
                hide: [],
                active: false
              }
            ],
            active: true
          },
          {
            wrap: "slds-wrap",
            cols: [
              {
                size: 8,
                visible: [],
                hide: [],
                active: false
              },
              {
                size: 4,
                visible: [],
                hide: [],
                active: false
              }
            ]
          }
        ]
      }
    }
}
const builderData = [ builderDataElement ];

export { builderData, builderDataElement, gridData };