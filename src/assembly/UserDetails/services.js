export const fetchUserDetails = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({id: 1});
  }, 1000);
});
