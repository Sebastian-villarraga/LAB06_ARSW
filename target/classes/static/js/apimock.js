//@author hcadavid

apimock = (function () {
  var mockdata = [];

  mockdata["SebastianVillaraga"] = [
    {author: "SebastianVillaraga", points: [{ x: 150, y: 120 }, { x: 215, y: 115 }], name: "house"},
    {author: "SebastianVillaraga", points: [{ x: 340, y: 240 }, { x: 15, y: 215 }], name: "gear"},
    {author: "SebastianVillaraga", points: [{ x: 440, y: 340 }, { x: 150, y: 115 }], name: "building"},
    {author: "SebastianVillaraga", points: [{ x: 540, y: 440 }, { x: 140, y: 315 }], name: "room"}
  ];
  mockdata["AllanContreras"] = [
    {author: "AllanContreras", points: [{ x: 140, y: 140 }, { x: 115, y: 115 }, { x: 150, y: 145 }, { x: 101, y: 105 }], name: "house2"},
    {author: "AllanContreras", points: [{ x: 140, y: 140 }, { x: 115, y: 115 }, { x: 166, y: 116 }], name: "gear2"},
    {author: "AllanContreras", points: [{ x: 40, y: 30 }, { x: 50, y: 15 }], name: "building2"},
    {author: "AllanContreras", points: [{ x: 50, y: 40 }], name: "room2"}
  ];

  return {
    getBlueprintsByAuthor: function (authname, callback) {
      callback(mockdata[authname]);
    },

    getBlueprintsByNameAndAuthor: function (authname, bpname, callback) {
      callback(
        mockdata[authname].find(function (e) {
          return e.name === bpname;
        })
      );
    },
  };
})();

/*
Example of use:
var fun=function(list){
    console.info(list);
}

apimock.getBlueprintsByAuthor("SebastianVillaraga",fun);
apimock.getBlueprintsByNameAndAuthor("SebastianVillaraga","house",fun);
*/
