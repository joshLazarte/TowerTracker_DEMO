const excelTemplate = {};

const styles = {
  primaryHeader: {
    fill: {
      fgColor: {
        rgb: "28a745"
      }
    },
    font: {
      color: {
        rgb: "FFFFFFFF"
      },
      sz: 18,
      bold: true
    },
    alignment: {
      horizontal: "center"
    }
  },
  secondaryHeader: {
    fill: {
      fgColor: {
        rgb: "FFFFFFFF"
      }
    },
    font: {
      color: {
        rgb: "FF000000"
      },
      sz: 14
    },
    alignment: {
      horizontal: "center",
      vertical: "center"
    },
    border: {
      top: {
        style: "thin",
        color: {
          rgb: "FF000000"
        }
      },
      bottom: {
        style: "thin",
        color: {
          rgb: "FF000000"
        }
      },
      left: {
        style: "thin",
        color: {
          rgb: "FF000000"
        }
      },
      right: {
        style: "thin",
        color: {
          rgb: "FF000000"
        }
      }
    }
  },
  longContent: {
    alignment: {
      wrapText: true,
      vertical: "top"
    }
  },
  shortContent: {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  }
};

const today = new Date();
const dateString = `${today.getMonth() +
  1}-${today.getDate()}-${today.getFullYear()}`;

excelTemplate.heading = [
  [{ value: `Cell Tower Report: ${dateString}`, style: styles.primaryHeader }]
];

excelTemplate.specification = {
  address: {
    displayName: "Address",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.longContent,
    width: 200
  },
  cityName: {
    displayName: "City",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    width: "16"
  },
  market: {
    displayName: "Market",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    cellFormat: value => value.name.toUpperCase(),
    width: "10"
  },
  accountNumber: {
    displayName: "Account Number",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    width: "18"
  },
  CLLI: {
    displayName: "CLLI",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    width: "15"
  },
  CID: {
    displayName: "CID",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    width: "20"
  },
  lat: {
    displayName: "Lat",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    width: "12"
  },
  long: {
    displayName: "Long",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    width: "12"
  },
  carrier: {
    displayName: "Carrier",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    width: "7"
  },
  cabinetType: {
    displayName: "Cabinet Type",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.longContent,
    cellFormat: value => (!value ? "Not Specified" : value),
    width: 200
  },
  unrestricted: {
    displayName: "Unrestricted",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    cellFormat: value => (value === true ? "YES" : "NO"),
    width: "15"
  },
  assignedTech: {
    displayName: "Assigned Tech",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    cellFormat: value => value.firstName.toUpperCase(),
    width: "15"
  },
  lastServiceDate: {
    displayName: "Last Service",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    cellFormat: value => (!value ? "N/A" : value),
    width: "15"
  },
  lastServiceTech: {
    displayName: "Last Tech",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.shortContent,
    cellFormat: value => (!value ? "N/A" : value.firstName.toUpperCase()),
    width: "15"
  },
  comments: {
    displayName: "Comments",
    headerStyle: styles.secondaryHeader,
    cellStyle: styles.longContent,
    width: 300
  }
};

excelTemplate.merges = [
  { start: { row: 1, column: 1 }, end: { row: 1, column: 5 } }
];

module.exports = excelTemplate;
