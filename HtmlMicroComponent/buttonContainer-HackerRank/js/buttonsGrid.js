const nums = [1, 2, 3, 6, 9, 8, 7, 4];
function rotate() {
  const ids = [1, 2, 3, 6, 9, 8, 7, 4];
  nums.unshift(nums.pop());
  for (let i = 0; i < ids.length; i++) {
    document.getElementById(`btn${ids[i]}`).textContent = nums[i];
  }
}