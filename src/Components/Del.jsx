function Del(index, addlist, setAddlist) {
  const updatedList = [...addlist];
  updatedList.splice(index, 1);
  setAddlist(updatedList);
}
export default Del;
