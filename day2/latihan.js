var objekku = {
  bobi: () => {
    return [
      "",
      "",
      {
        fakhran: [
          "",
          "",
          {
            dzaky: () => {
              return {
                ragiel: [
                  "",
                  () => {
                    return {
                      kartika: a => {
                        return ["", "", "", "berhasil" + a];
                      }
                    };
                  }
                ]
              };
            }
          }
        ]
      }
    ];
  }
};

module.exports = objekku
  .bobi()[2]
  .fakhran[2].dzaky()
  .ragiel[1]()
  .kartika(" oi")[3];
