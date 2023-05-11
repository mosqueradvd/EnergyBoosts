export const logOut = () => {
    localStorage.removeItem("access_tok");
    setTimeout(() => {
      location.href = "/auth/log";
    }, 200);
  };
