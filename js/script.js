// Circular Progress bar maker

let progress82 = Circles.create({
  id: "progress82",
  radius: 40,
  value: 82,
  maxValue: 100,
  width: 10,
  text: function (value) {
    return value;
  },
  colors: ["#D6DEEA", "#A06C54"],
  duration: 800,
  wrpClass: "circles-wrp",
  textClass: "circles-text",
  valueStrokeClass: "circles-valueStroke",
  maxValueStrokeClass: "circles-maxValueStroke",
  styleWrapper: true,
  styleText: true,
});

let progress74 = Circles.create({
  id: "progress74",
  radius: 40,
  value: 74,
  maxValue: 100,
  width: 10,
  text: function (value) {
    return value;
  },
  colors: ["#D6DEEA", "#A06C54"],
  duration: 400,
  wrpClass: "circles-wrp",
  textClass: "circles-text",
  valueStrokeClass: "circles-valueStroke",
  maxValueStrokeClass: "circles-maxValueStroke",
  styleWrapper: true,
  styleText: true,
});
