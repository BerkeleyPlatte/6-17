const legoCreationInfo = {
  id: "1",
  creator: "Berkeley",
  creation: "cow",
  color: "brown",
  shape: "animal"
};

document.querySelector("#saveCreatorBtn").addEventListener("click", () => {
    const creator = document.querySelector("#creator").value
})
document.querySelector("#saveCreationBtn").addEventListener("click", () => {
    const creation = document.querySelector("#creation").value
})
document.querySelector("#saveColorBtn").addEventListener("click", () => {
    const color = document.querySelector("#color").value
})
document.querySelector("#saveShapeBtn").addEventListener("click", () => {
    const shape = document.querySelector("#shape").value
})