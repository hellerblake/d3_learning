import "./style.css";
const data = [
  { width: 200, height: 100, fill: "purple" },
  { width: 100, height: 60, fill: "pink" },
  { width: 50, height: 30, fill: "red" },
];

const svg = d3.select("svg");
svg.append("rect");
svg.append("rect");
const rect = svg
  .selectAll("rect")
  .data(data)
  .attr("width", (d) => d.width)
  .attr("height", (d) => d.height)
  .attr("fill", (d) => d.fill);

console.log(rect);
